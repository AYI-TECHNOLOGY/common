import { Container, CosmosClient, SqlQuerySpec } from "@azure/cosmos";
import _, { partition } from "lodash";
import Id from "../types/Id";

class TableManager<Type> {
  constructor({
    collectionId,
    databaseId,
    endpoint,
    key,
  }: {
    endpoint: string;
    key: string;
    databaseId: string;
    collectionId: string;
  }) {
    this.database = new CosmosClient({ endpoint, key })
      .database(databaseId)
      .container(collectionId);
  }

  database: Container;

  async create(document: Type): Promise<Type> {
    const id = _.uniqueId();
    const doc = await this.database.items.create({ ...document, id });
    return document;
  }

  async getQuery(query: string | SqlQuerySpec): Promise<Type[]> {
    const result = (await this.database.items.query(query).fetchAll())
      .resources;
    return result;
  }

  async get(id: string, partitionId?: string): Promise<Type> {
    let result: Type;
    if (partitionId) {
      result = (await this.database.item(id, partitionId).read<Type>())
        .resource;
    } else {
      result = (
        await this.database.items
          .query<Type>(`SELECT * FROM c where c.id = "${id}"`)
          .fetchAll()
      ).resources[0];
    }
    if (!result) return null;
    return result;
  }

  async getFromArray(array: Id[]): Promise<Type[]> {
    const result = array.length
      ? (
          await this.database.items
            .query(
              `SELECT * FROM c WHERE c.id in (${array
                .map((id: any) => `'${id}'`)
                .join(", ")})`
            )
            .fetchAll()
        ).resources
      : [];
    return result;
  }

  async getCollection(): Promise<Type[]> {
    const result = (
      await this.database.items.query(`SELECT * FROM c`).fetchAll()
    ).resources;
    console.log(result);
    return result;
  }

  async set(id: string, document: Type): Promise<Type> {
    const doc = (
      await this.database
        .item(id)
        .replace({ ...document, updatedAt: Date.now() })
    ).resource;
    return doc;
  }

  async update(
    id: string,
    document: Type,
    partitionId?: string
  ): Promise<Type> {
    const doc = (
      await this.database
        .item(id, partitionId)
        .replace({ id, ...document, updatedAt: Date.now() })
    ).resource;
    return doc;
  }
}

export default TableManager;

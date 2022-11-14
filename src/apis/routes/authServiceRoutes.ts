import { baseUrl } from "../../constants/URLS";
import { checkIfDev } from "../../helpers/environment";

const authServiceRoutes = {
  profile: {
    cleaner: {
      getProfile: () => `${root}/profile/cleaner`,
      getProfileWithId: (id: string) => `${root}/profile/cleaner/${id}`,
      updateProfile: () => `${root}/profile/cleaner`,
    },
    user: {
      getProfile: () => `${root}/profile/user`,
      getProfileWithId: (id: string) => `${root}/profile/user/${id}`,
      updateProfile: () => `${root}/profile/user`,
    },
  },
  register: {
    accountCreation: {
      cleaner: {
        createAccount: () => `${root}/register/cleaner`,
      },
      user: {
        createAccount: () => `${root}/register/user`,
      },
    },
  },
  verify: {
    tokenVerification: {
      verifyToken: {
        verifyToken: () => `${root}/verify`,
      },
    },
  },
};

export const PORT = 3001;

const root = checkIfDev() ? `${baseUrl}${PORT}` : `${baseUrl}/auth`;

export default authServiceRoutes;

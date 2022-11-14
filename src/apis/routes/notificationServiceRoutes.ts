import { baseUrl } from "../../constants/URLS";
import { checkIfDev } from "../../helpers/environment";

const notificationsServiceRoutes = {
  jobRequest: {
    sendRequestNotification: {
      sendRequestOTP: () => `${root}/job-requests/request-push-notification`,
    },
  },
};

export const PORT = 3003;

export const root = checkIfDev() ? `${baseUrl}${PORT}` : `${baseUrl}/notifications`;

export default notificationsServiceRoutes;

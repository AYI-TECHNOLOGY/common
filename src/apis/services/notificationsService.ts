import axios from "axios";
import { baseUrl } from "../../constants/URLS";
import { checkIfDev } from "../../helpers/environment";
import Booking from "../../types/Booking";
import notificationsServiceRoute from "../routes/notificationServiceRoutes";

export const PORT = 3001;

const notificationAxios = axios.create({});

const sendRequestNotificationRequest = (
  booking: Booking,
  cleanerIds: string[]
) =>
  axios.post(
    notificationsServiceRoute.jobRequest.sendRequestNotification.sendRequestOTP(),
    { booking, cleanerIds }
  );

const notificationsService = {
  sendRequestNotificationRequest,
};

export default notificationsService;

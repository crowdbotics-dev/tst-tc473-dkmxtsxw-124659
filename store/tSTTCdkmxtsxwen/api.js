import axios from "axios"
import {
  TST_TC473_DKMXTSXWEN_USERNAME,
  TST_TC473_DKMXTSXWEN_PASSWORD
} from "react-native-dotenv"
const tSTTCdkmxtsxwen = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC473_DKMXTSXWEN_USERNAME,
    password: TST_TC473_DKMXTSXWEN_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function tsttc473dkmxtsxwen_get_getUserDetails_read(payload) {
  return tSTTCdkmxtsxwen.get(`/getUser${payload.Details}`)
}
export const apiService = { tsttc473dkmxtsxwen_get_getUserDetails_read }

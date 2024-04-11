
import {  userRequest} from "../requestMethods";
const sendToken = async (payload) => {
    return userRequest.post('customer/web-token', payload)
}

const generalService = {sendToken}

export {generalService}
 
import { publicRequest , userRequest} from "../requestMethods";

const getTransaction = async () => {
    return userRequest.get('customer/store/all')
}

const initializeTransaction = async (payload) => {
    return userRequest.post('customer/pay', payload)
}

const transactionService = {getTransaction, initializeTransaction}

export {transactionService}
import axios from "axios";
import { IClient } from "../types/IClient";
const CLIENT_BASE_REST_API_URL = "http://localhost:8080/api/v1/clientes";

class ClientService{
    getAllClients(){
        return axios.get<IClient[]>(CLIENT_BASE_REST_API_URL)
    }

    createClient(cliente: IClient){
        return axios.post(CLIENT_BASE_REST_API_URL,cliente)
    }
}

export default new ClientService();
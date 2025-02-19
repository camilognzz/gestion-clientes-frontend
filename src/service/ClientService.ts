import axios from "axios";
const CLIENT_BASE_REST_API_URL = "http://localhost:8080/api/v1/clientes";

class ClientService{
    getAllClients(){
        return axios.get(CLIENT_BASE_REST_API_URL)
    }
}

export default new ClientService();
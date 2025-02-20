import axios from "axios";
import { IClient } from "../types/IClient";
const CLIENT_BASE_REST_API_URL = `${process.env.REACT_APP_API_URL}/api/v1/clientes`;
console.log("API URL usada en React:", CLIENT_BASE_REST_API_URL);

class ClientService {
  getAllClients() {
    return axios.get<IClient[]>(CLIENT_BASE_REST_API_URL);
  }

  createClient(cliente: IClient) {
    return axios.post(CLIENT_BASE_REST_API_URL, cliente);
  }

  getClienteById(clienteId: string) {
    return axios.get(CLIENT_BASE_REST_API_URL + "/" + clienteId);
  }

  updateClient(clienteId: string, cliente: IClient) {
    return axios.put(CLIENT_BASE_REST_API_URL + "/" + clienteId, cliente);
  }

  deleteClient(clienteId: string) {
    return axios.delete(CLIENT_BASE_REST_API_URL + "/" + clienteId);
  }
}

export default new ClientService();

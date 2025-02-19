import { useEffect, useState } from "react"
import ClientService from "../service/ClientService";

interface IClient {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
  }

export const ListClients = () => {
    const [clientes, setCLientes] = useState<IClient[]>([]);

    useEffect(() => {
        ClientService.getAllClients().then(response => {
            setCLientes(response.data);
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    },[])
  return (
    <div className="container">
        <h2 className="text-center">Lista de clientes</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
            </thead>
            <tbody>
                {
                    clientes.map(
                        cliente => 
                            <tr key={cliente.id}>
                                <td>{cliente.id}</td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.apellido}</td>
                                <td>{cliente.email}</td>
                            </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

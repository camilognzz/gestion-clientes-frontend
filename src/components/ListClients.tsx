import { useEffect, useState } from "react"
import ClientService from "../service/ClientService";
import { Link } from "react-router-dom";
import { IClient } from "../types/IClient";

export const ListClients = () => {
    const [clientes, setCLientes] = useState<IClient[]>([]);

    useEffect(() => {
        listClients();
    }, [])

    const listClients = () => {
        ClientService.getAllClients().then(response => {
            setCLientes(response.data);
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const deleteClient = (clienteId: string) => {
        ClientService.deleteClient(clienteId)
            .then(() => {
                setCLientes(prevClientes => prevClientes.filter(cliente => cliente.id !== clienteId));
            })
            .catch(error => {
                console.error("Error al eliminar el cliente:", error);
            });
    };

    return (
        <div className="container">
            <h2 className="text-center">Lista de clientes</h2>
            <Link to='/add-cliente' className="btn btn-primary mb-2">Agregar cliente</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.email}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-cliente/${cliente.id}`}>Actualizar</Link>
                                <button
                                    style={{ marginLeft: "10px" }}
                                    className="btn btn-danger"
                                    onClick={() => deleteClient(cliente.id!)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

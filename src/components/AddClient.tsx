import { useEffect, useState } from "react";
import ClientService from "../service/ClientService";
import { Link, useNavigate, useParams } from "react-router-dom";

export const AddClient = () => {
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateClient = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cliente = { nombre, apellido, email };

        if (id) {
            ClientService.updateClient(id, cliente).then((resp) => {
                console.log(resp.data);
                navigate('/clientes');
            }).catch(error => {
                console.log(error);
            })
        } else {
            ClientService.createClient(cliente).then((resp) => {
                console.log(resp.data);
                navigate('/clientes');
            }).catch(error => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        if (!id) return;
        ClientService.getClienteById(id)
            .then((resp) => {
                setNombre(resp.data.nombre);
                setApellido(resp.data.apellido);
                setEmail(resp.data.email);
            })
            .catch(error => {
                console.error("Error al obtener el cliente:", error);
            });
    }, [id]);

    const title = () => {
        if (id) {
            return <h2 className="text-center">Actualizar cliente</h2>
        } else {
            return <h2 className="text-center">Agregar cliente</h2>
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">{title()}</h2>
                    <div className="card-body">
                        <form onSubmit={saveOrUpdateClient}>
                            <div className="form-group mb-2">
                                <label className="form-label">Nombre:</label>
                                <input type="text"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    name="nombre"
                                    placeholder="Camilo"
                                    className="form-control"
                                />
                                <label className="form-label">Apellido:</label>
                                <input type="text"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                    name="apellido"
                                    placeholder="Gonzalez"
                                    className="form-control"
                                />
                                <label className="form-label">Email:</label>
                                <input type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    placeholder="camilo@gmail.com"
                                    className="form-control"
                                />
                            </div>
                            <button className="btn btn-success" type="submit">
                                Guardar
                            </button>
                            <Link to='/clientes' className="btn btn-danger">Cancelar</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

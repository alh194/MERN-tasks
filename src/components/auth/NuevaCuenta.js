import React, {useState} from 'react';
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

    //State para iniciar sesión
    const [ usuario, guardarUsuario ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    //Destructuring. Extraer usuario

    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios


        // Password mínimo de 6 caracteres


        //Los 2 passwords son iguales
    

        //Pasarlo al action

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crea cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                    <label htmlFor="nombre">Nombre de usuario</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="nombre"
                        onChange={onChange}
                        value={nombre}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="confirmar password"
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>
                
            </div>
        </div>
     );
}
 
export default NuevaCuenta;
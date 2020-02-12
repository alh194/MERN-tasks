import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;

    //State para proyecto
    const [ proyecto, guardarProyecto ] = useState({
        nombre: '',
    });

    //Destructuring para el nombre del state proyecto
    const { nombre } = proyecto;

    //Funciones formulario de NuevoProyecto
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar el proyecto
        if(nombre === ''){
            return;
        }

        //Agregar al state
        agregarProyecto(proyecto);

        //Reiniciar el form
        guardarProyecto({
            nombre: ''
        })

    }

    // //Mostrar formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }


    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo proyecto</button>

           {
               formulario
               ?
                    (
                        <form
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProyecto}
                        >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Nombre proyecto"
                                name="nombre"
                                onChange={onChangeProyecto}
                                value={nombre}
                            />
            
                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar proyecto"
                            />
                        </form>
                    )
                : null
           }
        </Fragment>
     );
}
 
export default NuevoProyecto;
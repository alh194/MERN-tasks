import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {

   //Obtener el state global de los proyectos
   const proyectosContext = useContext(proyectoContext);
   const { proyectos, obtenerProyectos } = proyectosContext;

   //Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

   //Revisar si proyectos tienen contenido
   if(proyectos.length === 0) return null;

    

    return ( 

        <ul classname="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;
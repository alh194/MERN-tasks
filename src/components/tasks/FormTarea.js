import React from 'react';

const FormTarea = () => {
    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                        <input
                        tyoe="text"
                        className="input-text"
                        placeholder="Nombre tarea..."
                        name="nombre"
                        />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;
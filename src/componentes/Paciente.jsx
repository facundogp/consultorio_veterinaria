import React from 'react'
import swal from 'sweetalert'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente


    const handleEliminar = () => {
        const respuesta = swal({
            title: `ALERTA!!!`,
            text: `Esta seguro que desea eliminar al Paciente?`,
            icon:`warning`,
            buttons: [`Cancelar`, `Aceptar`]
        }).then(respuesta => {

            if(respuesta) {
            swal({icon: `success`, timer:[`3000`]})
            eliminarPaciente(id)
            }
        })

            
    }
  return (
      
    <div className="mx-3 my-5 bg-white shadow-md px-5 py-10 rounded-xl">

        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
            {` `}
            <span className="font-normal normal-case"> { nombre } </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
            {` `}
            <span className="font-normal normal-case"> { propietario } </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email:
            {` `}
            <span className="font-normal normal-case"> { email } </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:
            {` `}
            <span className="font-normal normal-case"> { fecha } </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:
            {` `}
            <span className="font-normal normal-case"> { sintomas } </span>
        </p>

        <div className="flex justify-between mt-10">
            <button 
            type="button" 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg md:mr-1"
            onClick={() => setPaciente(paciente)}
            >     
            Editar
            </button>

            <button 
            type="button" 
            className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg md:ml-1"
            onClick={handleEliminar}
            >
            Eliminar
            </button>

        </div>

    </div>
  )
}

export default Paciente
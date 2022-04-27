import { useState, useEffect } from "react"
import Error from "./Error.jsx"
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState(``)
  const [propietario, setPropietario] = useState(``)
  const [email, setEmail] = useState(``)
  const [fecha, setFecha] = useState(``)
  const [sintomas, setSintomas] = useState(``)

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      
    }
  }, [paciente])
  

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //error en consola:
    
    if( [ nombre, propietario, email, fecha, sintomas].includes(``) ) {
      //console.log(`Hay al menos un campo vacio`)

      setError(true)
      return;
    } 
    setError(false)

    setNombre(``)
    setPropietario(``)
    setEmail(``)
    setFecha(``)
    setSintomas(``)

    //Objeto de Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    if(paciente.id) {
      //editando el registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})
    }
    else {
      //nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }
    
    
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          añade paciententes y 
          {` `}
          <span className=" text-indigo-500 font-bold">administralos</span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-8 px-4 mb-10"
        >

          <div className="mb-5">
            <label htmlFor="mascota" className="block ml-2 text-gray-700 uppercase font-bold">
              Nombre Mascota
            </label>

            <input 
              id="mascota"
              className="ml-2 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="text"
              placeholder="Nombre de la Mascota"
              minlength="3"
              maxlength="10"
              required autocomplete="off"
              value={nombre}
              onChange={ (e) => setNombre(e.target.value)}
            />

          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block ml-2 text-gray-700 uppercase font-bold">
              Nombre del Propietario
            </label>

            <input 
              id="propietario"
              className="ml-2 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="text"
              placeholder="Nombre del propietario"
              minlength="3"
              maxlength="10"
              required autocomplete="off"
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value)}
            />

          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block ml-2 text-gray-700 uppercase font-bold">
              Email
            </label>

            <input 
              id="email"
              className="ml-2 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="email"
              placeholder="@email contacto propietario"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
            />

          </div>

          <div className="mb-5">
            <label 
            htmlFor="alta" className="block ml-2 text-gray-700 uppercase font-bold">
              Alta
            </label>

            <input 
              id="alta"
              className="ml-2 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="date"
              value={fecha}
              onChange={ (e) => setFecha(e.target.value)}
            />

          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block ml-2 text-gray-700 uppercase font-bold">
              Sintomas
            </label>

            <textarea 
              id="sintomas"
              className="ml-2 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los sintomas"
              minlength="3"
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value)} 
            />

            <input
              type="submit"
              className="bg-indigo-600 w-full p-3 text-white font-blond hover:bg-indigo-800 cursor-pointer transition-colors"
              value={ paciente.id ? `Editar Paciente` : `Agregar Paciente`}
            />

          </div>

          <div>
            {error && < Error mensaje="Todos los campos son obligatorios" />}
          </div>
           

        </form>
    
    </div>
  )
}

export default Formulario

const Error = ({mensaje}) => {
    return (
        <div className="b bg-red-800 text-white text-center font-bold p-3 mb-3 uppercase rounded-md">
            <p>{mensaje}</p>
        </div>
      )
}

export default Error
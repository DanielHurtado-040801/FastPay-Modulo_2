import { useNavigate } from "react-router-dom"

export function UsuariosCard({usuario}){

    const navigate = useNavigate();

    return (
        <div className="bg-zinc-800 shadow-lg shadow-zinc-950 p-3 hover:bg-zinc-600 hover:cursor-pointer rounded-lg "
        onClick={() => {
            navigate(`/usuarios/${usuario.id}`);
        }}
        >
        <h4 className="font-bold uppercase flex text-blue-600"><h4 className="font-bold uppercase flex ml-1 text-blue-600">{usuario.username}</h4></h4>
        <h5 className="text-blue-800 flex font-bold"><p className="text-slate-300 flex font-light ml-1">{usuario.email}</p></h5>
        <h5 className="text-blue-800 flex font-bold"><p className="text-slate-300 flex font-light ml-1">{usuario.name}</p></h5>
        <h5 className="text-blue-800 flex font-bold"><p className="text-slate-300 flex font-light ml-1">{usuario.last_name}</p></h5>
      </div>
    )
}
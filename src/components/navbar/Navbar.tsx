import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {

  const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-gradient-to-r from-blue-500 to-cyan-500 text-white'>
            
                <div className="container flex justify-between text-lg">
                   <div className="font-bold uppercase">
                   <Link to="/home">Blog Pessoal</Link>
                   </div>
                    <div className='flex gap-4'>
                      <div className="text-white hover:font-bold">Postagens</div>  
                      <Link to='/temas' className='text-white hover:font-bold'>Temas</Link>
                      <Link to='/cadastrartema' className='text-white hover:font-bold'>Cadastrar tema</Link>
                      <div className="text-white hover:font-bold">Perfil</div> 
                      <Link to=" " className="text-white hover:font-bold" onClick={logout}> Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
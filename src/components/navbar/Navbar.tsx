import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className='w-full  bg-gradient-to-r from-blue-500 to-cyan-500 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="font-bold uppercase">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='text-white hover:font-bold'>Postagens</Link>
                        <Link to='/temas' className='text-white hover:font-bold'>Temas</Link>
                        <Link to='/cadastrartema' className='text-white hover:font-bold'>Cadastrar tema</Link>
                        <Link to='/perfil' className='text-white hover:font-bold'>Perfil</Link>
                        <Link to='' onClick={logout} className='text-white hover:font-bold'>Sair</Link>
                    </div>
                </div>
            </div>

        )

    }

    return (
        <>
            { component }
            
        </>
    )
}

export default Navbar
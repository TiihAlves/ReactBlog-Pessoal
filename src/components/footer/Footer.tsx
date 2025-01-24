import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className="flex justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Tiago Alves | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>

                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/tiago-salves" target="_blank">
                            <LinkedinLogo size={40} weight='bold' className='bg-transparent hover:size-14' />
                        </a>
                        <a href="https://www.instagram.com/alves.tiih/" target="_blank">
                            <InstagramLogo size={40} weight='bold' className='bg-transparent hover:size-14' />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100033838786322&locale=pt_BR" target="_blank">
                            <FacebookLogo size={40} weight='bold' className='bg-transparent hover:size-14' />
                        </a>
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

export default Footer
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Tiago Alves | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='bold' className='bg-transparent hover:size-3/4' />
                        <InstagramLogo size={48} weight='bold' className='bg-transparent hover:size-3/4'/>
                        <FacebookLogo size={48} weight='bold' className='bg-transparent hover:size-3/4' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
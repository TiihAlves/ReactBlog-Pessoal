function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-gradient-to-r from-blue-500 to-cyan-500 text-white'>
            
                <div className="container flex justify-between text-lg">
                    Blog Pessoal

                    <div className='flex gap-4'>
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
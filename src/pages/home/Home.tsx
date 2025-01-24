import ListaPostagens from "../../components/postagems/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagems/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className=" bg-gradient-to-r from-blue-500 to-cyan-500 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/tkeh5vknk/online-resume-concept-illustration-b.png?updatedAt=1737733577135"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-2xl font-bold p-1"> 🌟 Minhas Postagens 🌟</p>
            </div>
            <ListaPostagens />
        </>
    )
}

export default Home
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css';

interface ColaboradorProps {
    nome: string
    imagem: string
    cargo: string
    corDeFundo: string
    id: string | number
    favorito: boolean
    aoDeletar: any
    aoFavoritar: any
    data: any
}

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar, id, favorito, aoFavoritar, data}: ColaboradorProps) =>{
    function favoritar(){
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={()=>aoDeletar(id)}
            />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
                <div className='favoritar'>
                    {favorito
                        ? <AiFillHeart {...propsFavorito} />
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;
import Comentario from '../app/comentario.js';
import '../app/styles.css';

async function inicio(){
    const com = new Comentario();
    const res = await com.obtenerCategorias()
    console.log(res.categories)

}

inicio()


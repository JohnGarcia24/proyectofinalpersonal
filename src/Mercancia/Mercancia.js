import { Footer } from "../shared/Footer/Footer"

export function Mercancia(){
    let titulo="PRODUCTOS"
    let productos=[
        {
            nombre:"Buso Personalizado",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/producto1.jpg?alt=media&token=f3fb86e5-02c1-467b-8abe-120e957f724c",
            precio:20 
        },
        {
            nombre:"Case para celulares",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/producto2.jpg?alt=media&token=65282be2-846c-48e9-aa2f-ddb73bede0ee",
            precio:30
        },
        {
            nombre:"Bolso Ecologico Personalizado",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/producto3.jpg?alt=media&token=ed8c5377-6c7b-4b2b-9ec4-3585156d4be8",
            precio:17
        },
        {
            nombre:"Llavero Personalizado",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/producto4.jpg?alt=media&token=ca2d493d-1449-4864-b015-770410ba732f",
            precio:11
        },
        {
            nombre:"Gorro Personalizado",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/producto5.jpg?alt=media&token=5e849a78-2cf6-474d-b2dd-031ac537309e",
            precio:35
        },
        {
            nombre:"Camiseta Basica",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/producto6.jpg?alt=media&token=72eb3019-f80b-48ba-9f3d-f8f89e38bedf",
            precio:23
        }
    ]
    
    
    
    return(
        <>
        <h1>{titulo}</h1>
        <div class="container">
            <div class="row row-col-1 row-cols-md-3 g-5">
                {
                    productos.map(function(producto){
                        return(
                            <>
                            <div class="col">
                                <div class="card h-100 shadow">

                                   <img src={producto.foto} alt="" class="h-100 img-fluid w-100"/>
                                   <h3 class="text-center">{producto.nombre}</h3>
                                   <h4 class="text-center">${producto.precio} USD</h4>

                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        <Footer/>
        </>
    )
}
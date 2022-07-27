import { useFectchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category, onDeleteCat }) => {

    const { data:images, loading } = useFectchGifs( category );

    const handleDeleteCategory = (e) => {
        onDeleteCat(e.target.textContent)
    }

    return (
        <div className="grid-container">
            <h3 onClick={ handleDeleteCategory } className="card label-category card-category animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="card animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                {
                    images.map( image => (
                       <GifGridItem key={image.id} {...image} />
                    ))
                }
            </div>
        </div>
        
    )
}

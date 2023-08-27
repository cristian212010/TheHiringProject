import './card.components.css'

function Card({data}) {
    const {image, title, description} = data
    return(
        <div class="card">
            <div class="image">
                <img src={image} alt="" class="image"/>
            </div>
            <div class="content">
                <a href="#">
                <span class="title">
                    {title}
                </span>
                </a>

                <p class="desc">
                {description}
                </p>

                <a class="action" href="#">
                Add to Cart
                <span aria-hidden="true">
                    →
                </span>
                </a>
            </div>
        </div>
    )
}

export default Card;
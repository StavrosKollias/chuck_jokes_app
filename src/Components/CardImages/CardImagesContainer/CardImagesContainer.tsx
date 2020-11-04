import React from "react";
import CardJoke from "../CardJoke/CardJoke";
import "./CardImagesContainer.scss"

const CardImagesContainer:React.FC<{}>=(props)=>{

    return(
        <section className="card-images-container">
            <CardJoke joke="Hi Iam A jokes" title="Joke title: 2" btnLabel="View more" btnUrl="/search" src="https://images.unsplash.com/photo-1596574202467-915fa42375c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=534&q=80" />
            <CardJoke joke="Hi Iam A jokes" title="Joke title: 2" btnLabel="View more" btnUrl="/search" src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" />
            <CardJoke joke="Hi Iam A jokes" title="Joke title: 2" btnLabel="View more" btnUrl="/search" src="https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" />
            <CardJoke joke="Hi Iam A jokes" title="Joke title: 2" btnLabel="View more" btnUrl="/search" src="https://images.unsplash.com/photo-1524549110215-6624d76a0b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" />
        </section>
    )
}


export default CardImagesContainer;
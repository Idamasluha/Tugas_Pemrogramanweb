function CardLandingComponent(props) {
    return(
        <>
        <div class="text-center py-1" style={{ background: "#F5EADD" }}><img src={props.image} style={{ width: "200px" }}/><h3>{props.title}</h3></div>
        </>
    )
}

export default CardLandingComponent;
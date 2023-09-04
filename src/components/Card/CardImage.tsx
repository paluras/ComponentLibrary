const CardImage =({children , color} : {children: React.ReactElement , color : string}) => {

    return(
        <div className="img-container" style={{backgroundColor:`${color}`}}>{children}</div>
    )
}

export default CardImage
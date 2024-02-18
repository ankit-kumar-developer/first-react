const Movies = (props) => {
  return (
    <div className="movie">

       <img src={props.img}/>
        <h2>{props.title}</h2>
        <h3>{props.year}</h3>
       </div>
  )
}

export default Movies
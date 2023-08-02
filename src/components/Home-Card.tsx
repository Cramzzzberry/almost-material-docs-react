const HomeCard = ({url, imgSrc, title, desc}) => {
  return(
    <a href={ url } className="card w-full h-full ease-in-out duration-100 hover:card-success-70">
      <figure className="max-h-56"><img src={ imgSrc } /></figure>
      <div className="card-body">
        <h4 className="card-title">{ title }</h4>
        <span>{ desc }</span>
      </div>
    </a>
  )
}

export default HomeCard
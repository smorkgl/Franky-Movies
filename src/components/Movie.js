function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return (<div id={id} className="card">
    <div className="card-image waves-effect waves-block waves-light">
      {
        poster === 'N/A' ? <img className="activator" src='https://placehold.co/270x350?text=Image+not+found' />
        : 
        <img className="activator" src={poster} />

      }
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <p>{year}</p>
      <p className="right">{type}</p>
    </div>
  </div>)
            
}

export {Movie}
//BookCard
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const { id, title, director, abstract, Image } = movie;

  return (
    <>
      <div className="card mb-4">
        <img src={Image} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span>{director}</span>
          <p>{abstract}</p>
          <Link to={`movies/${id}`}>Read More</Link>
        </div>
      </div>
    </>
  );
}
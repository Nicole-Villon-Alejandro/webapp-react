import{Link} from 'react-router-dom';
export default function MovieCard({ movie }) {
    return (
        <div className="card">
        <img src={movie.poster} className="card-img-top" alt={movie.title} />
        <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.plot}</p>
        </div>
        </div>
    );


}
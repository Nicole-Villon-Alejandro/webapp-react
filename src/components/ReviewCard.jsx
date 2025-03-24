export default function ReviewCard({ review }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{review.author}</h5>
                <p className="card-text">{review.content}</p>
            </div>
        </div>
    );
}
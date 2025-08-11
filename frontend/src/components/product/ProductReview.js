import React from 'react';

export default function ProductReview({ reviews }) {
    return (
        <div className="reviews mt-4">
            <h4>Other Reviews:</h4>
            {reviews.map((review) => (
                <div key={review._id} className="review-card mb-3">
                    <strong>
                        {review.user ? review.user.name : 'Anonymous'}
                    </strong>
                    <div className="rating-outer">
                        <div
                            className="rating-inner"
                            style={{ width: `${(review.rating / 5) * 100}%` }}
                        ></div>
                    </div>
                    <p>{review.comment}</p>
                </div>
            ))}
        </div>
    );
}

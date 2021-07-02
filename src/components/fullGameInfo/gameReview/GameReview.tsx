import { Result as ReviewType } from "../../../utils/getGameReviews/interface";
import { readableDate } from "../../../utils/readableDate";
import dompurify from "dompurify";

const GameReview: React.FC<ReviewType> = (review) => {
  return (
    <div className="review">
      <p
        dangerouslySetInnerHTML={{
          __html: dompurify.sanitize(review.text),
        }}
      ></p>
      <br />
      <div className="review__stars">
        {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
      </div>
      <div className="review__created">
        {review.user ? `${review.user.username}` : ""}{" "}
        {readableDate(review.created)}
      </div>
    </div>
  );
};
export default GameReview;

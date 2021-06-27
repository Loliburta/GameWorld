import { Result as ReviewType } from "../../../utils/getGameReviews/interface";
import dompurify from "dompurify";

const GameReview: React.FC<ReviewType> = (review) => {
  const readableDate = (date: Date) => {
    date = new Date(date);
    const day = date.getDay().toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
    const month = (date.getMonth() + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
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

import { useState } from "react";
import classes from "./BookmarkBtn.module.css";

const BookmarkBtn = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    setBookmarked((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleBookmark}
      className={
        bookmarked
          ? `${classes.bookmark} ${classes.bookmarked}`
          : `${classes.bookmark}`
      }
      type="button"
    >
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <circle
            fill={bookmarked ? "#147b74" : "#2F2F2F"}
            cx="28"
            cy="28"
            r="28"
          />
          <path
            fill={bookmarked ? "#fff" : "#B1B1B1"}
            d="M23 19v18l5-5.058L33 37V19z"
          />
        </g>
      </svg>
      <span>{bookmarked ? "Bookmarked" : "Bookmark"}</span>
    </button>
  );
};

export default BookmarkBtn;

import React, {PropTypes} from "react";
import classnames from "classnames";

const Paginator = (props) => {
  const {
    page,
    perPage,
    issues,
    onNav
  } = props;

  const prevClasses = {
    previous: true,
    disabled: page === 1
  };

  const nextClasses = {
    next: true,
    disabled: issues.length < perPage
  };

  const handleOnPrev = (e) => {
    e.preventDefault();
    if (e.target.parentNode.classList.contains("disabled")) {
      return;
    }
    if (onNav) {
      onNav(page - 1);
    }
  };

  const handleOnNext = (e) => {
    e.preventDefault();
    if (e.target.parentNode.classList.contains("disabled")) {
      return;
    }
    if (onNav) {
      onNav(page + 1);
    }
  };

  return (
    <nav>
      <ul className="pager">
        <li
          className={classnames(prevClasses)}>
          <a
            href="#"
            onClick={handleOnPrev}>
            Previous
          </a>
        </li>
        <span>
          {`Current page: ${page}`}
        </span>
        <li
          className={classnames(nextClasses)}>
          <a
            href="#"
            onClick={handleOnNext}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;

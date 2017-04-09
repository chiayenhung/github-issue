import React, {PropTypes} from "react";
import User from "../../components/user";
import Labels from "../../components/labels";

const IssueDetail = (props) => {
  const {
    detail: {
      title,
      state,
      body,
      user,
      labels,
      comments_url
    } = {}
  } = props;
  return (
    <div>
      <h1>
        { title }
      </h1>
      <User
        value={user}/>
      <p>
        {`state: ${state}`}
      </p>
      <p>
        { body }
      </p>
      <Labels
        value={labels || []}/>
    </div>
  );
};

export default IssueDetail;

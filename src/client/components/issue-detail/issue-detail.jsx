import React, {PropTypes} from "react";
import User from "../../components/user";
import Labels, { Label } from "../../components/labels";
import Comments from "../comments";

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
      <div
        className="issue-detail-title">
        <h1>
          { title }
        </h1>
        <Label
          type={state}
          label={{ name: state }}>
        </Label>
      </div>
      <User
        value={user}/>
      <p>
        { body }
      </p>
      <Labels
        value={labels || []}/>
      <Comments
        url={comments_url}/>
    </div>
  );
};

export default IssueDetail;

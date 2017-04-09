/**
 * Created by chia-yenhung on 4/9/17.
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import Comments from "./comments";
import { fetchComments } from "./comments-actions";

class CommentsContainer extends Component {
  componentDidMount() {
    const {
      onFetch
    } = this.props;
    if (onFetch) {
      onFetch()
    }
  }

  render() {
    const {
      comments
    } = this.props;
    return (
      <Comments
        comments={comments}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    url
  } = ownProps;
  return {
    onFetch: () => {
      if (url) {
        dispatch(fetchComments(url));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsContainer);

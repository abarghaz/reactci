import React from "react";

// to turn a component into a container to have access to the state:
import { connect } from "react-redux";

const CommentList = (props) => {
  const list = props.comments.map((comment) => (
    <ul key={comment}>{comment}</ul>
  ));
  return <ul className="comment-list">{list}</ul>;
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

// to turn a component into a container:
export default connect(mapStateToProps)(CommentList);

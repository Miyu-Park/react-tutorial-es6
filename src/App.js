import React, { Component } from 'react';
import Remarkable from 'remarkable';
import logo from '../img/logo.svg';
import '../scss/App.scss';


const data = [
  { id: 1, author: 'Pete Hunt', text: 'This is one comment' },
  { id: 2, author: 'Jordan Walke', text: 'This is *another* comment' },
];

class CommentBox extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    get('story.json').then(function(response) {
      return JSON.parse(response);
    }).then(function(response) {
      console.log("Yey JSON!", response);
    });


    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false
    })
    .then()
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
}

class CommentList extends Component {
  render() {
    const commentNodes = this.props.data.map((comment) => {
      console.log(comment);
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

class CommentForm extends Component {
  render() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
}

class Comment extends Component {
  rawMarkup() {
    this.md = new Remarkable();
    this.rawMarkup = this.md.render(this.props.children.toString());
    return {
      __html: this.rawMarkup,
    };
  }
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

export default CommentBox;

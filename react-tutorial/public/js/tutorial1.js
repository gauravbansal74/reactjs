//data

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

//CommentBox
var CommentBox = React.createClass({
  render: function() {
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/api/comments" />,
  document.getElementById('content')
);



//CommentList
var CommentList = React.createClass({
    render : function () {
      var commentNodes = this.props.data.map(function(comment){
        return(
            <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
        );
      });
      return(
        <div className="commentList">
          {commentNodes}
        </div>
      );
    }
});


//CommentForm
var CommentForm = React.createClass({
  render: function () {
    return(
      <div className="commentForm">
        Hello, world! I am a CommentForm
      </div>
    );
  }
});

//Comment

var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render: function(){
    var md = new Remarkable();
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

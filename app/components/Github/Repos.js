var React = require('react');

var Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },

  render: function() {
    var repos = this.props.repos.map(function(repo, index){
      return (
        <li className="list-group-item" key={index}>
          {repo.html_url && <h5><a href={repo.html_url}>{repo.name}</a></h5>}
          {repo.description && <p>{repo.description}</p>}
        </li>
      )
    });
    return (
      <div>
        <h4>User Repos</h4>
        <ul className="list-group">
          {repos}
        </ul>
      </div>
    );
  }
});

module.exports = Repos;
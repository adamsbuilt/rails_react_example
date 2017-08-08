const SearchForm = React.createClass({
  handleSearch() {
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    var self = this;
    $.ajax({
      url: '/api/events/search',
      data: { query: query },
      success(data) {
        self.props.handleSearch(data);
      },
      error: function(xhr, status, error) {
        alert('Search error: ', status, xhr, error);
      }
    });
  },
  render() {
    return(
      <input onChange={this.handleSearch}
             type="text"
             className="form-control"
             placeholder="Type search phrase here..."
             ref="query" />
    )
  }
});

const SearchForm = React.createClass({
  handleSearch() {
    const query = ReactDOM.findDOMNode(this.refs.query).value;
    const self = this;
    $.ajax({
      url: '/api/events/search',
      data: { query: query },
      success(data) {
        self.props.handleSearch(data);
      },
      error(xhr, status, error) {
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

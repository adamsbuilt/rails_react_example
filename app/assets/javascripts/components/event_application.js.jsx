const EventApplication = React.createClass({
  getInitialState() {
    return {events: [], sort: "name", order: "asc"};
  },
  componentDidMount() {
    this.getDataFromApi();
  },
  getDataFromApi() {
    const self = this;
    $.ajax({
      url: '/api/events',
      success: (data) => {
        self.setState({ events: data });
      },
      error: (xhr, status, error) => {
        alert('Cannot get data from API: ', error);
      }
    });
  },
  handleSearch(events) {
    this.setState({events: events});
  },
  handleAdd(event) {
    const events = this.state.events;
    events.push(event);
    this.setState({event: events});
  },
  handleDeleteRecord(event) {
    const events = this.state.events.slice();
    const index = events.indexOf(event);
    events.splice(index,1);
    this.setState({events: events});
  },
  handleUpdateRecord(old, fresh) {
  const events = this.state.events.slice();
  const index = events.indexOf(old);
    events.splice(index, 1, fresh);
    this.setState({events: events});
  },
  handleSortColumn(name, order) {
    if (this.state.sort != name) {
      order = 'asc';
    }
    $.ajax({
      url: '/api/events',
      data: {sort_by: name, order: order},
      method: 'GET',
      success: (data) => {
        this.setState({ events: data, sort: name, order: order });
      }.bind(this),
      error: (xhr, status, error) => {
        alert('Cannot sort events: ', error);
      }
    });
  },
  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>ReactJS Tutorial</h1>
          <p>by adamsbuilt</p>
        </div>
        <div className="row">
          <div className="col-md-3">
            <SearchForm handleSearch={this.handleSearch} />
          </div>
          <div className="col-md-9">
            <NewForm handleAdd={this.handleAdd} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable
              events={this.state.events}
              sort={this.state.sort}
              order={this.state.order}
              handleDeleteRecord={this.handleDeleteRecord}
              handleUpdateRecord={this.handleUpdateRecord}
              handleSortColumn={this.handleSortColumn} />
          </div>
        </div>
      </div>
    )
  }
});

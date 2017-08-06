const EventApplication = React.createClass({
  getInitialState: function() {
    return { events: [] };
  },
  componentDidMount: function() {
    this.getDataFromApi();
  },
  getDataFromApi: function() {
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
  handleSearch: function(events) {
    this.setState({events: events});
  },
  handleAdd: function(event) {
    const events = this.state.events;
    events.push(event);
    this.setState({event: events});
  },
  handleDeleteRecord: function(event) {
    const events = this.state.events.slice();
    const index = events.indexOf(event);
    events.splice(index,1);
    this.setState({events: events});
  },
  handleUpdateRecord: function(old, fresh) {
  const events = this.state.events.slice();
  const index = events.indexOf(old);
    events.splice(index, 1, fresh);
    this.setState({events: events});
  },
  render: function() {
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
              handleDeleteRecord={this.handleDeleteRecord}
              handleUpdateRecord={this.handleUpdateRecord}/>
          </div>
        </div>
      </div>
    )
  }
});

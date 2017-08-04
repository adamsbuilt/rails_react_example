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
  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>ReactJS Tutorial</h1>
          <p>by adamsbuilt</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable events={this.state.events}/>
          </div>
        </div>
      </div>
    )
  }
});

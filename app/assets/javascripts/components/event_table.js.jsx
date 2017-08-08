const EventTable = React.createClass({
  handleDeleteRecord(event) {
    this.props.handleDeleteRecord(event);
  },
  handleUpdateRecord(old, fresh) {
    this.props.handleUpdateRecord(old, fresh);
  },
  handleSortColumn(name, order) {
    this.props.handleSortColumn(name, order);
  },
  render() {
    const events = [];
    console.log(events);
    this.props.events.forEach((event) => {
      events.push(<Event
        event={event}
        key={'event' + event.id}
        handleDeleteRecord={this.handleDeleteRecord}
        handleUpdateRecord={this.handleUpdateRecord}/>);
    }.bind(this));
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2 sortable">
              <SortColumn
                name="name"
                text="Name"
                sort={this.props.sort}
                order={this.props.order}
                handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-2 sortable">
              <SortColumn
                name="event_date"
                text="Date"
                sort={this.props.sort}
                order={this.props.order}
                handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-3 sortable">
              <SortColumn
                name="place"
                text="Place"
                sort={this.props.sort}
                order={this.props.order}
                handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-3 sortable">
              <SortColumn
                name="description"
                text="Description"
                sort={this.props.sort}
                order={this.props.order}
                handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </table>
    )
  }
});

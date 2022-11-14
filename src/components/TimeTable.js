import React, { Component } from "react";

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      offset: props.offset,
    };
    
  }

  componentDidMount() {
    console.log("did mount");
    this.timer = setInterval(() => this.tick(this.props.offset), 1000);
  }

  componentWillUnmount() {
    console.log("willUnmount");
    clearInterval(this.timer)
  }

  tick(offset) {
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const newDate = new Date(utc + 3600000 * offset);

    this.setState({ date: newDate });
  }
  render() {
    return (
      <div className="column is-4">
        <div className={"card"}>
          <div className="card-header">
            <h1 className="card-header-title">{this.props.city}</h1>
          </div>
          <div className="card-content">
            <p>
              L'orario di {this.props.city} ({this.props.offset}) è{" "}
              {this.state.date.toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeTable;

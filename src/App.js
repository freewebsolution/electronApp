import React from "react";
import "./App.css";
import AddTimeTable from "./components/AddTimeTable";
import Navbar from "./components/Navbar";
import TimeTable from "./components/TimeTable";

const ThemeContext = React.createContext("light");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      timeTables: [
        {
          id: 1,
          city: "Roma",
          offset: 1,
        },
        {
          id: 2,
          city: "Mosca",
          offset: 3,
        },
        {
          id: 3,
          city: "Los Angeles",
          offset: -10,
        },
      ],
      newtimeTable: {
        id: 0,
        city: "",
        offset: 0,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, prop) {
    const timetable = { ...this.state.newtimeTable };
    timetable[prop] = e.target.value;
    this.setState({
      newtimeTable: timetable,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state, props) => {
      state.newtimeTable.id = this.state.timeTables.length + 1;
      return {
        timeTables: [...state.timeTables, state.newtimeTable],
      };
    });
    console.log("obj: ", this.state.timeTables);
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Navbar/>
          <div className="container is-fluid">
            <div className={"section"}>
              <div className="columns is-multiline">
                {this.state.timeTables.map((timetable) => (
                  <TimeTable
                    key={timetable.id}
                    city={timetable.city}
                    offset={timetable.offset}
                  />
                ))}
              </div>
              <AddTimeTable
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                city={this.state.city}
                offset={this.state.offset}
              />
            </div>
          </div>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;

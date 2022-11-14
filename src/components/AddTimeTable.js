import React from "react";

const AddTimeTable = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="field">
          <label className="label">Città</label>
          <div className="control">
            <input
              className="input"
              placeholder="Città..."
              type="text"
              value={props.city}
              onChange={(e)=>props.handleChange(e,'city')}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Offset</label>
          <div className="control">
            <input
              className="input"
              placeholder="3"
              type="number"
              min="-8"
              max="8"
              step="1"
              value={props.offset}
              onChange={(e)=>props.handleChange(e,'offset')}
            />
          </div>
        </div>
        <button className="button is-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTimeTable;

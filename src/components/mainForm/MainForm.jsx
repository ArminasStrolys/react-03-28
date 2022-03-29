import React from "react";

class MainForm extends React.Component {
  constructor() {
    super();
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <p className="mainForm">Sukurkite naują kontaktą</p>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Paslėpti" : "Naujas kontaktas"}
        </button>
        {this.state.visibility && (
          <div>
            <form className="theForm" onSubmit={alert('išsiųsta')}>
              <input type="text" placeholder="Vardas" />
              <input type="text" placeholder="Pavardė" />
              <input type="text" placeholder="El. paštas" />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default MainForm;

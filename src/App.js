import React, { Component } from "react";
import faker from "faker";
import "./styles.css";
import MyContainer from "./Components/approvalContainer/approval";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "Steve",
        comment: "A Good Post"
      },
      {
        id: 2,
        name: "Rogers",
        comment: "A Great Post"
      },
      {
        id: 3,
        name: "Justin",
        comment: " i will share the Post"
      },
      {
        id: 5,
        name: "Seth",
        comment: " How artistic!"
      },
      {
        id: 6,
        name: "Shane",
        comment: "WOW !!"
      },
      {
        id: 7,
        name: "Rob",
        comment: "Sharing right away"
      }
    ]
  };

  render() {
    return (
      <div className="App container cards ui" style={{ marginTop: "45px" }}>
        {this.state.items.map(({ id, name, comment }) => (
          <MyContainer
            key={id}
            {...{ name, comment }}
            image={faker.image.avatar()}
          />
        ))}
      </div>
    );
  }
}

export default App;

import React from "react";
import Button from "../../components/Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onClickButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <Button onClick={this.onClickButton} />
      </>
    );
  }
}

export default App;

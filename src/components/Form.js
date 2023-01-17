import React from "react";

export default class Form extends React.Component {
  state = {
    title: "Javascript",
    text: "Hi, I am Javascript.",
    library: "React",
    isAwesome: true,
  };

  handleChange = (e) => {
    // this.setState({
    //     [e.target.name]: e.target.value,
    // });
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("nothing here");
    }
  };

  submitHandler = (e) =>{
    e.preventDefault();
    const { title, text, library, isAwesome } = this.state;
    console.log(title, text, library, isAwesome);
  }

  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <br />
        <form onSubmit={this.submitHandler}>
            <input type="text" name="" value={null}/>
            <br /><br />
          <input
            name="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={this.handleChange}
          />
          <p>{title}</p>
          <br />
          <textarea
            name="text"
            id=""
            cols="30"
            rows="4"
            value={text}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <br />
          <select name="" id="" value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Anglar">Anglar</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

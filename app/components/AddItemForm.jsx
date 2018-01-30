import React from 'react'; 


export default class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }



  render() {
    return (
      
    );
  }
}
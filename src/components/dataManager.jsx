import React, {Component} from 'react';

class DataManager extends Component{
    state ={//manipulated, add  to, update, delete
        defaultValue: "",
        value: this.props.addItemValue
    };

    handleChange = (e) => {
        //updated the local component's state
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //Clear existing value in input
        document.getElementById("itemValue").value = "";

        //Updating local component state
        this.setState({value:""});
    }

    addItem = () => {
        //Call method reference in Todos component using props
        this.props.foodataManager(this.state.value);
        this.clearInput();
    }

    render(){
        return(
            <div className="input-group mb-3">
                <input type="text" className= "form-control" id="itemValue" placeholder="item"
                       onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.addItem} className="btn btn-outline-secondary"
                            type="button" id="button-addon2">Add New To-Do Item</button>
                </div>
            </div>
        );  //put integrated html here  [ return() ]
    }
}

export default DataManager;


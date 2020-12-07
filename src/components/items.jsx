import React, {Component} from 'react';

import DataManager from "./dataManager";
import Item from "./item";

class Items extends Component {
    state = {
        addItemValue:"",
        items : [
            {
                id: 1,
                value: "Clifford Choi made this",
                isDone: false
            },
            {
                id: 2,
                value: "Item number 2",
                isDone: false
            }
        ]
    }; //object,

    getTime(){
        let d = new Date();

        return d.getTime();
    }

    handleDelete = item => {
        const items = this.state.items.filter((t) => {
            return t.id !== item
        });
        this.setState({ items });
    }

    handleDone = item => {
        const items = [...this.state.items];
        items.map((t) => {
            if (t.id === item.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({items});
    }

    addNewItem = item => {
        if (item) {
            const items = [...this.state.items];
            items.push(
                {
                    id: this.getTime(),
                    value: item,
                    isDone: false
                }
            );
            this.setState({ addManagerValue: "", items })
        } else {
            console.log("Please Add Text to Item");
        }
    }

    render(){
        return(
            <table className="table">
                <tbody>
                    {this.state.items.map((item, index) => (
                    <tr key={item.id}>
                        <Item index={index+1} item={item}
                              fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                    </tr>
                    ))}
                    <tr>
                        <td colSpan="4" className="text-center">
                            <DataManager foodataManager={this.addNewItem}
                                         dataManagerValue={this.state.addItemValue}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Items;

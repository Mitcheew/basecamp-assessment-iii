import React, { Component } from 'react';
import Item from './components/item';
import UniqueId from 'react-html-id';

class List extends Component {


    constructor(){
        super();
        UniqueId.enableUniqueIds(this);
        this.state = {
            items: [
                {id:this.nextUniqueId(), item:'chair'},
                {id:this.nextUniqueId(), item:'tv'},
                {id:this.nextUniqueId(), item:'bread'}
            ]
        }
        console.log(this.state);
    }

    deleteItem = (index, e) => {
        const items = Object.assign([], this.state.items);
        items.splice(index, 1);
        this.setState({items:items})
    }

    addItem = (e) => {
        e.preventDefault();
        UniqueId.enableUniqueIds(this);
        const newItem = 
        {id:this.nextUniqueId(), item: this.newItem.value};

        this.setState({
            items: [...this.state.items, newItem]
        })
    }


  render() {
    return (
      <div>
          <form onSubmit={(e) => {this.addItem(e)}}>
            <div>
                <label>Add item</label>
                <input ref={input => this.newItem = input} type="text" placeholder="type here" />
            </div>
            <button type="submit">Add</button>
            </form>
          <ul>
              {
                  this.state.items.map((item, index)=>{
                      return(<Item
                         key={item.id}
                         delEvent={this.deleteItem.bind(this, index)}
                         >
                         {item.item}
                         </Item>)
                  })
              }
          </ul>
      </div>
    );
  }
}

export default List;

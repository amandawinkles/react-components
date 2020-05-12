// TODO
//create a GroceryList component that contains an unordered list of 2 grocery items. ///Render GroceryList component to the div tag in index.html with an id of app

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bold: false
    }
  }

  onMouseOver() {
    this.setState(() => ({
      bold: !this.state.bold
    }));
  }

  onMouseOut() {
    this.setState(() => ({
      bold: this.state.bold
    }));
  }

  render() {
    let style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    }
    return (
      <li style={style}
      onMouseOver={this.onMouseOver.bind(this)} //mouseOver
      onMouseOut={this.onMouseOut.bind(this)}
      >
        {this.props.item}
      </li>
    )
  }
}

let GroceryList = (props) => (
  <div>
    <h1>My Grocery List</h1>
      <ul>
        {props.groceryItems.map( item =>
          <GroceryListItem item={item} key={item}/>
        )}
      </ul>
  </div>
)

ReactDOM.render(<GroceryList groceryItems={['Orange', 'Spinach']}/>, document.getElementById('app'));

/*

onClick
onMouseOver

onMouseOver() {
    this.setState(() => ({
      bold: !this.state.bold //true
    }));
  }

  onMouseOut() {
    this.setState(() => ({
      bold: this.state.bold
    }));
  }




let GroceryList = (props) => (
  <div>
    <h1>My Grocery List</h1>
      <ul>
        {props.groceryItems.map( item =>
          <GroceryListItem item={item} key={item}/>
        )}
      </ul>
  </div>
);

let Orange = () => (
  return <li>{props.groceryItems[0]}</li>;
);

let Spinach = () => (
  return <li>{props.groceryItems[1]}</li>;
);

render = () => {
  {this.props.item}
};

ReactDOM.render(<GroceryList groceryItems={['Orange', 'Spinach']}/>, document.getElementById('app'));
*/
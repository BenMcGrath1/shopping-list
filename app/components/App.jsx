import React from 'react';


function Header(props) {
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	);
}

class ShoppingList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
						{name: 'milk', sku: '23490234b30234b', price: '$3.99'},
						{name: 'bread', sku: '123431001b4', price: '$1.99'},
					]
		}
	}

	addProduct(e) {
	    e.preventDefault();
	    const {products} = this.state; 
	    const newProduct = {name: this.newName.value, sku: this.newSKU.value, price: this.newPrice.value};


	    //Attempt to validate newProduct contains a value (not empty)
	    newProduct !== {name: '', sku: '', price: ''} && this.setState({    
	    	products: [...this.state.products, newProduct]
	    })
	    this.addForm.reset(); 
  	}

  	removeProduct(product) {
  		const {products} = this.state; 
  		const newProducts = products.filter(function(buyProduct){
  			return buyProduct.name !== product.name; 
  		});

  		this.setState({
  			products: [...newProducts]
  		})
  	}

	render() {
		return (
			<div className="shopping-list">
				<Header title="My Shopping List" />

				<div className="wrapper">  
		        <form  ref={(input) => {this.addForm = input; }} onSubmit={(e) => {this.addProduct(e)}}>
		          <div className="form-group">
		            <label for="itemName"></label>
		            <input ref={(input) => {this.newName = input; }} type="text" className="form-control" id="itemName" placeholder="Item Name" />
		          </div>
		          <div className="form-group">
		            <label for="itemSKU"></label>
		            <input ref={(input) => {this.newSKU = input; }} type="text" className="form-control" id="itemSKU" placeholder="Item SKU#" />
		          </div>
		          <div className="form-group">
		            <label for="itemPrice"> </label>
		            <input ref={(input) => {this.newPrice = input; }} type="text" className="form-control" id="itemPrice" placeholder="Item Price" />
		          </div>
		          
		          
		          <button type="submit" className="btn btn-primary">Add to List</button>
		        </form>
		      </div>
				<ul className="list wrapper">{this.state.products.map(product =>
					<li key={product.sku}>
						<div className="list-item">
							<div>{product.name}</div>
							<div>{product.price}</div>
							<button onClick={(e) => this.removeProduct(product)} className="btn btn-small btn-outline-primary">Remove</button>
						</div>	
					</li>
				)}
				</ul>
			</div>
		); 
	}; 
}


export default class App extends React.Component {
  render() {
    return <ShoppingList />;
    console.log('test'); 
  }
}


import React from "react";
import ProductComponent from './ProductComponent';
import Head from 'next/head';
import data from '../testdata.js';
import fetch from 'isomorphic-unfetch';


class ProductList extends React.Component{

	constructor(props){
		super(props)
		this.state ={"productList":[]}
	}

	componentWillMount(){
		fetch('http://localhost:9000/getData',{
			method:'get',
		})
		.then(response =>response.json()
		.then(data =>this.setState({productList:data})));
	}

	isFavourie = (arraytosearch, key, valuetosearch) =>{
		for (var i = 0; i < arraytosearch.length; i++) {
			if (arraytosearch[i][key] == valuetosearch) {
	    		return i;
	    	}
	    }
    	return null;
    }


	changeHeart = (e,index) => {
		console.log('hello');
		const tempProduct = this.state.productList
		var val = this.isFavourie(this.state.productList, "id",index);
		tempProduct[val]["isFav"] = !this.state.productList[val]["isFav"]
		this.setState({productList:tempProduct})
	}

	render(){
		console.log('my data '+this.state.productList[0]);
		return(
			<div className="main-cls">
			<h2 className="aheading-cls">Activewear</h2>

			<style jsx>{`
		      .main-cls{
		      	width:1215px;
		      	padding-top:300px;
		      	padding-left:300px;

		      }

		      .aheading-cls{
		      	margin-bottom: 20px;
    			padding-bottom: 15px;
    			opacity:0.7;
		      	border-bottom:1px solid #d3d3d3;
		      }

     		`}</style>

				<div >
					{this.state.productList.map((abc,index) =>(
				       	<ProductComponent index={abc.index} changeImage={this.changeImage} changeHeart={this.changeHeart} id={abc.id} name={abc.name} price={abc.price} discountedPrice={abc.discountedPrice} isExclusive={abc.isExclusive} isFav={abc.isFav} itemsLeftInStock={abc.itemsLeftInStock} isPreOrder={abc.isPreOrder} imageURL={abc.imageURL} imageHoverURL={abc.imageHoverURL}/>
				    ))}
				</div>
			</div>
		)
	}
}

export default ProductList;
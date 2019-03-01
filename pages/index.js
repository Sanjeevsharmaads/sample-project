import React from "react";
import TopHeader from './TopHeader';
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import ProductList from './ProductList';

class index extends React.Component{
	render(){
		return(
			<div>
				<TopHeader />
				<SearchBox />
				<Navigation />
				<ProductList />
			</div>
		)
	}
}

export default index;
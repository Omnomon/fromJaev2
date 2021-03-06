import React, { Component } from 'react';
import update from "immutability-helper"
import Navbar from "./navbar.js"
import Featured from "./featuredProducts.js"
import NewArrival from "./newArrivals.js"
import Footer from "./Footer.js"
import API from "../utils/API.js"
import '../App.css';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import Flexbox from "flexbox-react"
import Item from "./common/item.js"


class Figurine extends Component {
	constructor(props) {
		super(props);
/*        this.props.handleAddToCart = this.handleAddToCart.bind(this)*/
        this.renderItems = this.renderItems.bind(this)
        this.shoppingBag = this.shoppingBag.bind(this)
	}

	renderItems(){

		let newproducts = this.props.products.filter((item)=>item.product_category === "Figurine")
		//eventully, dummyobj will be replaced with an API call to retrieve the items from database 
		return newproducts.map((toBeReplaced, index)=>{

			return(	
                <Item key={toBeReplaced._id} product_ID={toBeReplaced.product_ID} imgUrl={toBeReplaced.imgUrl} handleAddToCart={this.props.handleAddToCart} product_name={toBeReplaced.product_name} price={toBeReplaced.price} quantity={toBeReplaced.quantity} featuredIndex={index}/>
				)
		})
	}

	componentDidMount(){
		console.log(this.props.cart)
		if ( $ && $.flexslider ) {
			$('.flexslider.top_slider').flexslider({
				animation: "fade",
				controlNav: true,
				directionNav: false,
				prevText: "",
				nextText: ""
			});
		}
		if ( $ ) {
			jQuery('.shopping_bag .cart').slideUp(1);
			jQuery('.top_search_form form').slideUp(1);
		}
		if ( $ && window.tovarfotoHeight ) {
    		console.log('calling tovarfotoHeight')
        	tovarfotoHeight();
    	}
	}	

	shoppingBag(){
		if($){
			jQuery(document).ready(function() {
				jQuery('.shopping_bag .cart').slideToggle();
				jQuery('.shopping_bag .cart').parent().toggleClass('cart_active');
			})
		}
	}	


	componentDidUpdate(prevProps, prevState) {
		console.log('Figurine component, componentDidUpdate');
	}



  	render() {
	    return (
		    <div id="page">
		        <header>
		      		<Navbar shoppingBag={this.shoppingBag} totalPrice={this.props.totalPrice} totalQuantity={this.props.totalQuantity} cart={this.props.cart} cartItems={this.props.cartItems}/>
		        </header>


				<section id="home" className="padbot0">		
					<div className="flexslider top_slider">
						<ul className="slides">
							<li className="slide1">	
							</li>
						</ul>
					</div>
				</section>
		        
				<section className="tovar_section">
					{/*<!-- CONTAINER -->*/}
					<div className="container">
						<h2 id="feature_title">Figurines</h2>
						
						{/*<!-- ROW -->*/}
						<Flexbox>
							<Flexbox className="tovar_wrapper" data-appear-top-offset='-100' data-animated='fadeInUp' style={{flexWrap:"wrap"}}>
								{this.renderItems()}
							</Flexbox>
						</Flexbox>				
					</div>{/*<!-- CONTAINER -->*/}
				</section>


		        <hr className="container"/>

		        <Footer/>
		    </div>  
	    );
  }
}

export default Figurine;

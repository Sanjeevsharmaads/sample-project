import head from 'next/head';

const ProductComponent = (props) => (

	<div>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </head>

    <style jsx>{`
      .main-div{
      	width:25%;
      	float:left;
      }

      .img-link{
        background-image:url(${props.imageURL});
      	margin-right:10px;
      	margin-left:10px;
      	height:350px;
      	width:278px;
      }

      .img-link:hover{
      	background-image:url(${props.imageHoverURL});
      }
      .Content {
      	text-align:center;
      }
      .Mybutton {
      	background-color:#ffffff;
      	border:1px solid #888888;
      }
      .complete-div{
      	position:relative;
      	top:-15px;
      }
      .textname {
      	text-align:center;
      }
      .description{
      	text-align: center;
    	  position: relative;
    	  top: -16px;
        color:#000;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: .0625em;
        text-align: center;
      }
      .myprice{
      	text-align: center;
      	position: relative;
      	top: -16px;
      }
      .myprice{
      	position: relative;
        top: -28px;
      }
      .heart-cls{
        background:transparent;
        border:none;
      }
      
      .discount {
        color: #b00000;
        font-weight: 700;
        margin-left:5px;
      }

      .mybut {
        color:red;
      }
    `}</style>

	  	<div className="main-div" >
          
	      <div  className="img-link"></div>
	      <div className="Content">
            <button onClick={(e) => {props.changeHeart(e,props.id)}} className="heart-cls"><i className={`${props.isFav ? 'fa fa-heart' : 'fa fa-heart-o'}`}></i></button>
	       		<button className="Mybutton"><a>Quick Look</a></button>
	      </div>

	      <div className="complete-div">
         	<span className="textname"><h4>{props.name}</h4></span>
          <span className="description"><h4>Siman Ribbed Side Zip-Sweater </h4></span>
	       	<div className ="myprice">
	       		<span clasName="myprice-span">{props.price}</span> 
            <span className="discount">{props.discountedPrice}</span>
	       	</div>
	     </div>
	    </div>
    </div>
)

export default ProductComponent
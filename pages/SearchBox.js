import head from 'next/head';

const SearchBox = () => (
	<div>
		<head>
			<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'/>
	    	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
		</head>

		<style jsx>{`
			.main-box{
				position:relative;
				float:left;
				width:100%;
			}
			.logo-icon{
				background:url("https://www.neimanmarcus.com/assets/images/neiman-marcus-logo-full-width.f83de5ee12fba429f707cfc8307c7512.svg") no-repeat;
				margin-top: 10px;
			    margin-bottom: 10px;
			    max-width: 194px;
			    height: 76px;
			    display:block;
			    margin-left: 650px;
  				margin-right: auto;
  				position:relative;
  				float:left; 
			    width:50%	     
			}

			.search-cls{
				position:relative;
				float:right;
				width:40%
			}
			.sign-cls{
				position:relative;
				float:left;
				color:#333;
				left:250px;
			}
			.heart-cls{
				position:relative;
				float:left;
				margin-top:15px;
				margin-left:30px;
				left:250px;
			}
			.bg-cls{
				padding-right:20px;
				left:250px;
			}
			.bag-cls{
				position:relative;
				float:left;
				left:280px;
			}

			.bg-icon{
				margin-right:10px;
				margin-left:10px;
			}

			.sbox-cls{

			}

			.in-cls{
				margin-top:10px;
				background-color: #fff;
			    color: #000;
			    border: 1px solid #8b8b8b;
			    border-radius: 0;
			    margin-left: 80px;
			    width: 70%;
			    height: 26px;
			    border-right: 0;
			    font-size: 13px;
			}
			.btn-submit{
				background-color:black;
				    color: #fff;
				width:90px;
				height:30px;
				border:none;
			}

		`}</style>

		<div className="main-box">
			
				<div className="logo-icon"></div>

				<div className="search-cls">
						<p className="sign-cls">Sign In / Register</p>
						<i className="fa fa-heart heart-cls"></i>
						<div className="bag-cls">
							<p className="bg-cls">SHOPPING BAG<i className='fas fa-shopping-bag bg-icon'></i></p>
						</div>

						<div className="sbox-cls">
							<input  className="in-cls" type="text" />
							<button className="btn-submit">Search</button>
						</div>
				</div>
			
		</div>
	</div>
)

export default SearchBox;
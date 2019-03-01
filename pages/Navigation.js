const Navigation = () => (
	<div>
		<style jsx>{`
			.hr-class{
				display: block;
    			border: 1px;
    			height: 1px;
   				background-color: #e1e1e1;
   				margin-top: 110px;
    			right: 0;
    			left: 0;
   				position: absolute;
   				z-index: -1;
			}

			.heading-top{
				color:white;
				text-align:center;
				padding-top:10px;
				padding-bottom:10px;

			}
			.nav-list{
				position:relative;
				top:50px;
			}

			.list-item{
				position:relative;
				float:left;
				list-style-type:none;
				
				margin-right:65px;
			}
			span{
				font-size:12px;
			}

		`}</style>

		<div className="navigation">
			<hr className="hr-class" />
			<ul className="nav-list">
				<li className="list-item"><span>DESIGNERS</span></li>
				<li className="list-item"><span>WOMEN'S CLOTHING</span></li>
				<li className="list-item"><span>CONTEMPORARY</span></li>
				<li className="list-item"><span>SHOES</span></li>
				<li className="list-item"><span>HANDBAGS</span></li>
				<li className="list-item"><span>JEWELLERY</span></li>
				<li className="list-item"><span>BEAUTY</span></li>
				<li className="list-item"><span>MEN</span></li>
				<li className="list-item"><span>KIDS</span></li>
				<li className="list-item"><span>HOME</span></li>
				<li className="list-item"><span>GIFTS</span></li>
				<li className="list-item"><span>SALE</span></li>
			</ul>
		</div>
	</div>
)

export default Navigation;
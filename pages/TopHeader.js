const TopHeader = () => (
	<div>
		<style jsx>{`
			.header-top{
				position:relative;
				background-color:black;
				width:100%;
				height:39px;
				margin-top:-22px;
				margin-left: -8px;
    			padding-right: 16px;
			}
			.heading-top{
				color:white;
				text-align:center;
				padding-top:10px;
				padding-bottom:10px;

			}

		`}</style>

		<div className="header-top">
			<h4 className="heading-top">FREE SHIPPING + FREE RETURNS EVERY DAY</h4>
		</div>
	</div>
)

export default TopHeader;
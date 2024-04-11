import React from 'react';
import styled from '@emotion/styled';
// import Client1 from "../../../assets/client1.svg";
// import Client2 from "../../../assets/client2.svg";
// import Client3 from "../../../assets/client3.svg";
// import Client4 from "../../../assets/client4.svg";
// import Client5 from "../../../assets/client5.svg";
// import Client6 from "../../../assets/client6.svg";

const PartnerSection = styled.div`
	background: #fff;
`;

const Container = styled.div`
	max-width: 1260px;
	padding: 30px 40px 30px;
	//   border: 1px solid red;
	margin: 0 auto;
	font-family: 'Oxygen', sans-serif;
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	.img1 {
		width: 105px;
	}

	.img2 {
		width: 125px;
	}

	.img3 {
		width: 120px;
	}
	.img4 {
		width: 120px;
	}
	.img5 {
		width: 120px;
	}
	.img6 {
		width: 120px;
	}
	@media screen and (max-width: 576px) {
		// flex-direction: column;
		padding: 25px 20px 25px;
		// align-items: center;
		justify-content: center;
		gap: 30px;

		div {
			//   height: 150px;
			//   border: 1px solid red;

			//   img {
			//     width: 100%;
			//     height: auto;
			//   }
		}

		// img {
		//   width: 150px;
		// }

		.img1 {
			width: 105px;
		}

		.img2 {
			width: 125px;
		}

		.img3 {
			width: 120px;
		}
		.img4 {
			width: 120px;
		}
		.img5 {
			width: 120px;
		}
		.img6 {
			width: 120px;
		}
	}
`;

export default function Partners() {
	return (
		<PartnerSection>
			<Container>
				<div>
					<img src='images/aws.png' alt='clients' className='img1' />
				</div>
				<div>
					<img
						src='images/docker.png'
						alt='clients'
						width={140}
						className='img2'
					/>
				</div>
				<div>
					<img src='images/react.png' alt='clients' className='img3' />
				</div>
				<div>
					<img src='images/stripe.png' alt='clients' className='img4' />
				</div>
				<div>
					<img src='images/google.png' alt='clients' className='img5' />
				</div>
				<div>
					<img src='images/vscode.png' alt='clients' className='img6' />
				</div>
			</Container>
		</PartnerSection>
	);
}

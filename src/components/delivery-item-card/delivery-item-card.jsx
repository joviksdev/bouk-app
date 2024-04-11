import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const DeliveryCard = styled.div`
	background-color: #ffffff;
	display: flex;
	justify-content: space-between;
	padding: 10px 15px;
	border: 1px solid #e2e2e2;
	border-radius: 5px;
	flex: 1;
`;

const ItemDetail = styled.div`
	p {
		font-weight: 400;
		color: #181725;
		margin-bottom: 5px;
	}

	span {
		font-weight: 300;
		color: #7c7c7c;
	}
`;

const ItemWeight = styled.span`
	font-weight: 700;
	color: #181725;
`;

function DeliveryItemCard({ item }) {
	return (
		<DeliveryCard>
			<ItemDetail>
				<Typography variant={'body1'}>{item.name}</Typography>
				<Typography variant={'body2'}>{item.description}</Typography>
			</ItemDetail>
			<ItemWeight>{item.weight}lbs</ItemWeight>
		</DeliveryCard>
	);
}

export default DeliveryItemCard;

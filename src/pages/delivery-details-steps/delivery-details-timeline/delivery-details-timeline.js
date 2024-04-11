import React from 'react';
import { Box } from '@mui/material';
import './delivery-details-timeline.css';
import { ReactComponent as Checked } from '../../../assets/checked.svg';
import { ReactComponent as Unchecked } from '../../../assets/unchecked.svg';

function DeliveryDetailTimeline({ currentStep }) {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				paddingBottom: '4rem',
				overflow: 'auto',
			}}
		>
			{/* first timeline */}
			<div
				className={`${
					currentStep >= 1 ? 'checked' : 'unchecked'
				} delivery_detail_timeline_item`}
				data-stage='Pick up & Delivery details'
			>
				<div>{currentStep >= 1 ? <Checked /> : <Unchecked />}</div>
			</div>

			<div
				className={`${
					currentStep >= 2 ? 'active' : 'inactive'
				} timeline_divider`}
			></div>

			{/* second timeline */}
			<div
				className={`${
					currentStep >= 2 ? 'checked' : 'unchecked'
				} delivery_detail_timeline_item`}
				data-stage='Add delivery Items'
			>
				<div>{currentStep >= 2 ? <Checked /> : <Unchecked />}</div>
			</div>

			<div
				className={`${
					currentStep >= 3 ? 'active' : 'inactive'
				} timeline_divider`}
			></div>

			{/* third timeline */}
			<div
				className={`${
					currentStep >= 3 ? 'checked' : 'unchecked'
				} delivery_detail_timeline_item`}
				data-stage='Make Payment'
			>
				<div>{currentStep >= 3 ? <Checked /> : <Unchecked />}</div>
			</div>

			<div
				className={`${
					currentStep === 4 ? 'active' : 'inactive'
				} timeline_divider`}
			></div>
			{/* fourth timeline */}
			<div
				className={`${
					currentStep >= 4 ? 'checked' : 'unchecked'
				} delivery_detail_timeline_item`}
				data-stage='Delivery Summary'
			>
				<div>{currentStep === 4 ? <Checked /> : <Unchecked />}</div>
			</div>
		</Box>
	);
}

export default DeliveryDetailTimeline;

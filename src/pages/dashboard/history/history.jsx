import * as React from 'react';
import styled from '@emotion/styled';
import Deliveries from './features/deliveries';

const SectionHeader = styled.div`
	padding: 15px 30px;
	border-bottom: 1px solid #e2e2e2;

	h2 {
		font-weight: 700;
		font-size: 20px;
		font-family: 'Oxygen', sans-serif;
		margin-bottom: 0;
	}
`;

const TabContainer = styled.div`
	display: flex;
	border-bottom: 1px solid #f0f0f0;

	div {
		padding: 10px 30px;
		color: #181725;
		font-weight: 700;
		font-size: 14px;
		font-family: 'Oxygen', sans-serif;
		cursor: pointer;
		// transition: all 0.3s ease;
	}

	.tab_active {
		color: #6438b0;
		border-bottom: 3px solid #6438b0;
	}
`;

const HISTORY_TYPE = Object.freeze({
	DELIVERIES: { label: 'Deliveries', value: 'DELIVERIES' },
});

const History = () => {
	const [currentTab, setCurrentTab] = React.useState(
		HISTORY_TYPE.DELIVERIES.value
	);

	function renderView() {
		switch (currentTab) {
			case 'DELIVERIES':
				return <Deliveries />;

			default:
				break;
		}
	}

	return (
		<>
			<SectionHeader>
				<h2>History</h2>
			</SectionHeader>
			<TabContainer>
				{Object.values(HISTORY_TYPE).map(({ label, value }, i) => {
					return (
						<div
							key={i}
							className={currentTab === value ? 'tab_active' : ''}
							onClick={() => setCurrentTab(value)}
						>
							{label}
						</div>
					);
				})}
			</TabContainer>
			{renderView()}
		</>
	);
};

export default History;

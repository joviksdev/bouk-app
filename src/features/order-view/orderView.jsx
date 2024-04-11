import React from 'react';
import { ORDER_VIEW } from './enum';
import CancelRequest from './cancel-request/cancelRequest';
import DeliveryCompleted from './delivery-completed/deliveryCompleted';
import DriverTipped from './driver-tipped/driverTipped';
import TipDriver from './tip-driver/tipDriver';
import CustomModal from '../../components/modal/modal';

const OrderView = ({ isOpen, closeModal, exact }) => {
	const [currentOrderView, setCurrentOrderView] = React.useState(
		ORDER_VIEW.CANCEL.value
	);
	React.useEffect(
		() => {
			setCurrentOrderView(exact);
		},
		// eslint-disable-next-line
		[]
	);
	function renderBasedOnCurrentView() {
		switch (currentOrderView) {
			case 'CANCEL':
				return (
					<CancelRequest
						setCurrentOrderView={setCurrentOrderView}
						closeModal={closeModal}
					/>
				);

			case 'TIP_DRIVER':
				return (
					<TipDriver
						setCurrentOrderView={setCurrentOrderView}
						closeModal={closeModal}
					/>
				);

			case 'DELIVERY_COMPLETE':
				return (
					<DeliveryCompleted
						setCurrentOrderView={setCurrentOrderView}
						closeModal={closeModal}
					/>
				);

			case 'DRIVER_TIPPED':
				return (
					<DriverTipped
						setCurrentOrderView={setCurrentOrderView}
						closeModal={closeModal}
					/>
				);

			default:
				return null;
		}
	}

	return (
		<CustomModal isOpen={isOpen} closeModal={closeModal}>
			{renderBasedOnCurrentView()}
		</CustomModal>
	);
};

export default OrderView;

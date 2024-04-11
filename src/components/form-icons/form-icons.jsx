import React from 'react';
import { ReactComponent as PickUp } from '../../assets/pickup-icon.svg';
import { ReactComponent as DropOff } from '../../assets/delivery-icon.svg';
import styles from './form-icons.module.css';

function FormIcons({ lineStyle }) {
	return (
		<div className={styles.formIcons}>
			<PickUp />
			<div style={lineStyle} className='line'></div>
			<DropOff />
		</div>
	);
}

export default FormIcons;

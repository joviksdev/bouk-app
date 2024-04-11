import React from 'react';
import { Box } from '@mui/material';
import styles from './section-divider.module.css';

function SectionDivider({ sx = {} }) {
	return <Box sx={sx} className={styles.section_divider}></Box>;
}

export default SectionDivider;

import React, { ReactNode } from 'react';
import { Box, useTheme, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

const ModalLayout = ({
	children,
	hasCloseButton,
	isOpen,
	closeModal,
	...rest
}) => {
	const theme = useTheme();
	if (isOpen) {
		return (
			<Box
				sx={{
					position: 'fixed',
					top: '0px',
					left: '0px',
					height: '100vh',
					width: '100%',
					backgroundColor: 'rgba(40, 83, 107, 0.7)',
					zIndex: theme.zIndex.modal,
					overflow: 'auto',
					padding: '15px',
				}}
			>
				<Box
					sx={{
						maxWidth: '480px',
						margin: '10rem auto',
						width: '100%',
						backgroundColor: 'background.paper',
						padding: { xs: '15px 20px' },
						borderRadius: '5px',
						position: 'relative',
						...rest.sx,
					}}
				>
					{hasCloseButton && (
						<IconButton
							onClick={closeModal}
							size={'small'}
							sx={{
								position: 'absolute',
								top: '20px',
								right: '20px',
								// backgroundColor: `${grey['400']} !important`,
								color: 'black',
							}}
						>
							<Close />
						</IconButton>
					)}
					<Box
						sx={{
							marginTop: hasCloseButton ? '20px' : '0px',
						}}
					>
						{children}
					</Box>
				</Box>
			</Box>
		);
	}
};

export default ModalLayout;

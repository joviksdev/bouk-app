import React from 'react';
import * as ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const container = document.getElementById('root');
const root = ReactDom.createRoot(container);

root.render(
	<Provider store={store}>
		{/* <PersistGate loading={null} store={store}>  */}
		<BrowserRouter>
			<SnackbarProvider
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				autoHideDuration={3000}
				preventDuplicate={true}
				maxSnack={3}
			>
				<App />
			</SnackbarProvider>
		</BrowserRouter>
		{/* </PersistGate> */}
	</Provider>
);

import React from 'react';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import DrawerAppBar from '../components/Navbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SimpleAccordion from '../components/Accordion';
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
const FAQs = () => {
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const merchantdata = [
		{
			question: 'How do I open a shop?',
			answer: `Opening a shop and becoming a merchant is a very easy and hassle-free process on bouk. Kindly follow the steps below
        1. Open the mobile app or web page and click on sign up
        2. Proceed to provide your name, phone number, email address, and password
        3. An OTP will be sent to the mobile number provided, enter this and your account will be up
        4. Click on become a merchant 
        5. Proceed to provide store name, address, and image
        6. Finally click on register and your store will be up
        7. You can now proceed to upload your items, fill in description and prices`,
		},
	];

	const boukerdata = [
		{
			question: 'How do I make payment on Bouk? ',
			answer:
				'After entering your request details, your card details will be requested to enable and confirm payment. ',
		},
		{
			question:
				'Can I request a pick-up and delivery without shopping through bouk?',
			answer:
				'Yes, you can request pick up and delivery without shopping on our platforms.',
		},
		{
			question: 'How do I receive payment?',
			answer: 'Bouk will make payments weekly to your provided account.',
		},
		{
			question: 'Does bouk use third party navigations?',
			answer: 'Yes, bouk drivers use third party navigations like google map.',
		},
		{
			question: 'How do I request a delivery pick-up or drop-off?',
			answer: `If you are requesting for an item to be picked up from a location (home, shop or an address), kindly follow the steps below 
      1. start by entering your address under pick up at
      2. enter the address for the drop-off location under dropped off. 
      3. Provide item description, weight, and a note if you deem fit
      4.  Tick if it’s an item delivery or pick-up and upload receipt
      5. Proceed to payment to confirm and send request
      6.  Click on done and sit back while we take it from there 
   
  If you are requesting a pickup from a shop, follow the same instruction above, but please remember to upload your online receipt from your store, if your product was not purchased using our platform. We ask for the receipt, so the drivers have no issue picking up your product. Which will allow you to receive your product with ease.`,
		},
		{
			question: 'How do I contact the driver, delivering my item?',
			answer:
				'Most of the times our customers don’t really have a need to contact the driver, however, the drivers contact will be provided to you just incase we have a situation or change of plans.',
		},
		{
			question: 'Are all your products new and unused? ',
			answer:
				'bouk merchants offer new products. However, some sellers do offer refurbished items for resell at a competitive price. In such a situation, the seller will clearly state the condition of the product.',
		},
		{
			question: 'Is there a line for elder to call to place order for them? ',
			answer:
				'We currently do not have designated lines specifically for elders and older people, but the web and app are very easy to navigate, and they might find it easy to use',
		},
		{
			question: 'Do we need to box everything before shipping with Bouk?',
			answer:
				'No, all your packages do not need to be box, but we do ask that they are well organize, smaller items that can be place in bags or box or your desire package should be place in such and recommend tagging them. For bigger items, we do recommend tagging them as well, for our driver may be carrying other customers packages as well. ',
		},
	];
	return (
		<div>
			<DrawerAppBar />
			<Box sx={{ height: '30vh', backgroundColor: '#3E236E' }}>
				<Typography
					variant='h3'
					gutterBottom
					sx={{
						paddingTop: { xs: '17%', sm: '5%', md: '5%' },
						position: 'relative',
						paddingLeft: '2%',
						color: '#fff',
						top: '10%',
					}}
				>
					FAQs
				</Typography>
			</Box>
			<Box sx={{ margin: '5%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='basic tabs example'
						textColor='secondary'
						indicatorColor='secondary'
					>
						<Tab label='Merchants' {...a11yProps(0)} />
						<Tab label='Boukers' {...a11yProps(1)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<SimpleAccordion data={merchantdata} />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<SimpleAccordion data={boukerdata} />
				</TabPanel>
			</Box>
			<ClientsSection />
			<Footer />
		</div>
	);
};

export default FAQs;

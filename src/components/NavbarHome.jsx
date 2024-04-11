import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Button } from './Button';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
	height: 60px;
	${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
	height: 60px;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: '5px 0px' })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: 'none' })}
`;
const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
	${mobile({ width: '50px' })}
`;
const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: '24px' })}
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;
const NavbarHome = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);
	return (
		<Container>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						<img
							src='images/svgs/logo.svg'
							alt=''
							style={{ width: '200px', height: '30px' }}
						/>
						<i class='fab fa-typo3' />
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						{/*<li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
           
            <li>
              <Link
                to="/register"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               Store
              </Link>
            </li> */}

						{/* <li  >
            <Link to="/cart"   className="nav-links">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
            </li> */}
					</ul>
					{button && (
						<div>
							<Link to='/login' className='signin'>
								<button
									style={{ cursor: 'pointer' }}
									className='btn--outline btn--medium'
								>
									Login
								</button>
							</Link>
							<Link to='/register' className='signup'>
								<button
									style={{
										cursor: 'pointer',
										marginRight: '10px',
										alignItems: 'center',
										justifyContent: 'center',
									}}
									className='btn--outline btn--medium'
								>
									Sign up
								</button>
							</Link>
						</div>
					)}
				</div>
			</nav>
		</Container>
	);
};

export default NavbarHome;

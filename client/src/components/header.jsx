import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
	// Extracting the current path using the useLocation hook
	const path = useLocation().pathname;

	return (
		<Navbar className='border-b-2'>
			<Link
				to='/'
				className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
			>
				<span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
					Blogosphere
				</span>
			</Link>

			{/*
			If screen size is big, the search box will be visible, in the search box, there is a search icon, if the screen size is small, the box will be hidden and a separate search icon will be visible which will stay hidden incase of a larger screen 
			 */}

			<form>
				<TextInput
					type='text'
					placeholder='Search'
					rightIcon={AiOutlineSearch}
					// Hidden if the screen is small else it will be displayed
					className='hidden lg:inline'
				/>
			</form>
			<Button className='w-12 h-10 lg:hidden' color='gray' pill>
				<AiOutlineSearch />
			</Button>
			<div className='flex gap-2 md:order-2'>
				<Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
					<FaMoon />
				</Button>
				<Link to='/sign-in'>
					<Button gradientDuoTone='purpleToBlue'>Sign in</Button>
				</Link>

				{/* 
				Navbar.Toggle: This component creates a "hamburger" menu button that appears on smaller screen sizes (typically mobile devices). When this button is clicked, it triggers the expansion or collapse of the navigation menu.
				Navbar.Collapse: This component contains the navigation links. On larger screens, these links are displayed horizontally across the navigation bar. On smaller screens, these links are hidden by default and only shown when the Navbar.Toggle button is clicked 
				*/}
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link active={path === '/'} as={'div'}>
					<Link to='/'>Home</Link>
				</Navbar.Link>
				<Navbar.Link active={path === '/about'} as={'div'}>
					<Link to='/about'>About</Link>
				</Navbar.Link>
				<Navbar.Link active={path === '/projects'} as={'div'}>
					<Link to='/projects'>Projects</Link>
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}

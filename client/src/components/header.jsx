// Importing necessary components and hooks from libraries
import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'; // Search icon
import { FaMoon } from 'react-icons/fa'; // Moon icon for dark mode

// Header component definition
export default function Header() {
	// Using the useLocation hook to get the current path
	const path = useLocation().pathname;

	// Rendering the Navbar component
	return (
		<Navbar className='border-b-2'>
			{/* Logo - redirects to home page when clicked */}
			<Link
				to='/'
				className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
			>
				<span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
					Blogosphere
				</span>
			</Link>

			{/* Search form - visible on large screens, hidden on small screens */}
			{/* If screen size is big, the search box will be visible, in the search box, there is a search icon, if the screen size is small, the box will be hidden and a separate search icon will be visible which will stay hidden incase of a larger screen */}
			<form>
				<TextInput
					type='text'
					placeholder='Search'
					rightIcon={AiOutlineSearch}
					className='hidden lg:inline' // Hidden on small screens
				/>
			</form>

			{/* Search button - visible on small screens, hidden on large screens */}
			<Button className='w-12 h-10 lg:hidden' color='gray' pill>
				<AiOutlineSearch />
			</Button>

			{/* Dark mode and sign-in buttons */}
			<div className='flex gap-2 md:order-2'>
				{/* Dark mode button - hidden on small screens */}
				<Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
					<FaMoon />
				</Button>

				{/* Sign-in button */}
				<Link to='/sign-in'>
					<Button gradientDuoTone='purpleToBlue'>Sign in</Button>
				</Link>

				{/* Hamburger menu button - visible on small screens */}
				<Navbar.Toggle />
			</div>

			{/* 
				Navbar.Toggle: This component creates a "hamburger" menu button that appears on smaller screen sizes (typically mobile devices). When this button is clicked, it triggers the expansion or collapse of the navigation menu.
				Navbar.Collapse: This component contains the navigation links. On larger screens, these links are displayed horizontally across the navigation bar. On smaller screens, these links are hidden by default and only shown when the Navbar.Toggle button is clicked 
			*/}

			{/* Navigation links - horizontal on large screens, vertical on small screens */}
			<Navbar.Collapse>
				{/* Home link */}
				<Navbar.Link active={path === '/'} as={'div'}>
					<Link to='/'>Home</Link>
				</Navbar.Link>

				{/* About link */}
				<Navbar.Link active={path === '/about'} as={'div'}>
					<Link to='/about'>About</Link>
				</Navbar.Link>

				{/* Projects link */}
				<Navbar.Link active={path === '/projects'} as={'div'}>
					<Link to='/projects'>Projects</Link>
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}

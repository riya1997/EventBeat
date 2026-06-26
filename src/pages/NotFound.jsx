import { Link } from 'react-router';

const NotFound = () => {
	return (
		<div className='flex flex-col items-center mt-50'>
			<h1 className='text-[7rem] font-extrabold lg:text-[10rem] text-transparent bg-linear-to-r from-[#6054e8] to-[#f8485e] bg-clip-text'>
				404
			</h1>
			<p className='text-2xl font-bold text-gray-700'>
				Page not found{' '}
			</p>
			<Link to='/' >
			<button className='mt-4 border-2 border-gray-600 p-3 rounded-full hover:bg-black hover:text-white hover:shadow-sm'>Go Back</button>
			</Link>
		</div>
	);
};

export default NotFound;

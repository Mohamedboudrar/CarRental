import React from 'react';

function Footer() {
  return (
    <div className='bg-gray-800 w-full h-auto py-8'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
        {/* Logo Section */}
        <div className='flex items-center mb-4 md:mb-0'>
          <img src='/path/to/logo.png' alt='Logo' className='h-12 mr-2' />
          <span className='text-white text-xl font-bold'>Your Company Name</span>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0'>
        <p className="text-white text-center">
        &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </p>
        </div>

        {/* Location Section */}
        <div className='flex items-center'>
          <span className='text-white mr-2'>Our Location:</span>
          <a
            href='https://www.google.com/maps?q=Your+Location'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-gray-400'
          >
            View on Map
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

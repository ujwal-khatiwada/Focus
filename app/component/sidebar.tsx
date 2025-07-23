import React from 'react';

const Sidebar= () => {
  return ( 
    <div className="card h-[calc(100dvh-10rem)] w-72 bg-gray-500 p-5 shadow-md shadow-purple-200/50 rounded-md flex flex-col">
      <ul className="w-full h-full flex-wrap flex flex-col">
        <div className="flex flex-col gap-2">
          {/* Services */}
          <li className="flex items-center gap-2 cursor-pointer font-semibold w-full whitespace-nowrap">
            <a
              href="#"
              className="flex items-center gap-4 p-4 w-full group rounded-full bg-cover bg-purple-100 shadow-inner hover:bg-purple-200 text-gray-700 transition-all ease-linear"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
              </svg>
              Services
            </a>
          </li>

          {/* About Us */}
          <li className="flex items-center cursor-pointer font-semibold w-full whitespace-nowrap">
            <a
              href="#"
              className="flex items-center gap-4 p-4 w-full group rounded-full bg-cover bg-purple-100 shadow-inner hover:bg-purple-200 text-gray-700 transition-all ease-linear"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              About Us
            </a>
          </li>

          {/* Contact */}
          <li className="flex items-center cursor-pointer font-semibold w-full whitespace-nowrap">
            <a
              href="https://www.material-tailwind.com/docs/react/installation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 w-full group rounded-full bg-cover bg-purple-100 shadow-inner hover:bg-purple-200 text-gray-700 transition-all ease-linear"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              Contact
            </a>
          </li>
        </div>

        {/* Logout at bottom */}
        <li className="flex items-center cursor-pointer font-semibold w-full whitespace-nowrap mt-auto">
          <button className="flex items-center gap-4 p-4 w-full group rounded-full bg-cover bg-purple-100 shadow-inner hover:bg-purple-200 focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear">
            <svg
              className="size-6 group-focus:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.2929 14.2929C16.9024 14.6834 16.9024 15.3166 17.2929 15.7071..."
              />
            </svg>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

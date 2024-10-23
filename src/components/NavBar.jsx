import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './componentStyles.css'

function NavBar() {
  const navigate = useNavigate()
  const [show, setshow] = useState(true)

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-around my-12"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div onClick={() => navigate('/')} className="cursor-pointer">
            <img
              className="h-20 lg:h-30 w-auto"
              src="https://inmobiliariabackend.shop/wp-content/uploads/2023/09/3e7a5dfa-8e23-43ac-85ee-be13d4b3a0a6-1.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              onClick={() => setshow(true)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="filtered/Venta"
            className="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
            style={({ isActive }) => ({
              color: isActive ? '#6AA843' : 'black',
            })}
          >
            VENTA
          </NavLink>
          <NavLink
            to="filtered/Alquiler"
            className="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
            style={({ isActive }) => ({
              color: isActive ? '#6AA843' : 'black',
            })}
          >
            RENTA
          </NavLink>
          <NavLink
            to="/nosotros"
            className="text-sm font-semibold leading-6 text-gray-900"
            style={({ isActive }) => ({
              color: isActive ? '#6AA843' : 'black',
            })}
          >
            SOBRE NOSOTROS
          </NavLink>
          <NavLink
            to="/contactus"
            className="text-sm font-semibold leading-6 text-gray-900"
            style={({ isActive }) => ({
              color: isActive ? '#6AA843' : 'black',
            })}
          >
            CONTACTENOS
          </NavLink>
        </div>
      </nav>
      {show && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://inmobiliariabackend.shop/wp-content/uploads/2023/09/3e7a5dfa-8e23-43ac-85ee-be13d4b3a0a6-1.png"
                  alt=""
                ></img>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  onClick={() => setshow(false)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <div className="mt-2 space-y-2" id="disclosure-1">
                      <NavLink
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        to="filtered/Venta"
                        style={({ isActive }) => ({
                          color: isActive ? '#6AA843' : 'black',
                        })}
                        onClick={() => setshow(false)}
                      >
                        VENTA
                      </NavLink>
                      <NavLink
                        to="filtered/Alquiler"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        style={({ isActive }) => ({
                          color: isActive ? '#6AA843' : 'black',
                        })}
                        onClick={() => setshow(false)}
                      >
                        RENTA
                      </NavLink>
                      <NavLink
                        to="/nosotros"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        style={({ isActive }) => ({
                          color: isActive ? '#6AA843' : 'black',
                        })}
                        onClick={() => setshow(false)}
                      >
                        SOBRE NOSOTROS
                      </NavLink>
                      <NavLink
                        to="/contactus"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        style={({ isActive }) => ({
                          color: isActive ? '#6AA843' : 'black',
                        })}
                        onClick={() => setshow(false)}
                      >
                        CONTACTENOS
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default NavBar

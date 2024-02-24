import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Post",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Create",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
   <div>
     <header className='py-7 font-bold shadow bg-green'>
    <Container>
      <nav className='flex text-cream p-2 '>
        <div className='mr-4'>
          <Link to='/'>
            <Logo/>
          </Link>
        </div>
        <ul className='flex ml-auto'>
          {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className='inline-block px-6 py-2 text-wrap text-justify rounded-full text-lg border border-gray-300 mr-4'
                >
                  {item.name}
                  </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <div>
                <LogoutBtn />
              </div>
            </li>
          )}
          
        </ul>
      </nav>
    </Container>
  </header>
   </div>
  
  )
}

export default Header
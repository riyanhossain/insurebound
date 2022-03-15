import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';

function Navbar() {
  return (
      <section className='flex justify-center'>
        <nav className='flex justify-center items-center w-[1492px]'>
        <div className='flex lg:w-4/5 md:w-5/6 w-11/12 items-center h-16 justify-between'>
            <p className='font-bold text-2xl mb-1' style={{color:'white'}}>BrandName</p>   
            <div className='hidden md:flex justify-center items-center'>
                <a className='w-16 text-white' href="/">Home</a>
                <a className='w-16 text-white' href="/">Product</a>
                <a className='w-16 text-white' href="/">Pricing</a>
                <a className='w-16 text-white' href="/">Contact</a>
            </div>
            <div className='hidden md:flex items-center'>
                <a href='/' className='w-16 font-bold text-sm text-white'>Login</a>
                <button className='bg-[#23A6F0] p-3 w-36 rounded text-white text-xs'>Become a member</button>
            </div>
            <div className='flex md:hidden'>
                <div className='w-8'>
                <SearchIcon/>               
                </div>
                <div className='w-8'>
                <ShoppingCartIcon/>
                </div>
                <div className='w-8'>
                <AlignHorizontalRightIcon/>
                </div>
            </div>
        </div>
    </nav>
      </section>

  )
}

export default Navbar
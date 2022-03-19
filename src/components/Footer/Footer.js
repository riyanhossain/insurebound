import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center'>
        <div className='h-[1567px] w-4/6 md:h-[488px] md:w-4/5'>
            <div className='h-[302px] flex flex-col justify-evenly items-start md:h-[142px] md:flex-row md:justify-between'>
                <div>
                <p className='font-bold text-3xl'>Consulting Agency For Your Business</p>
                <p className=''>the quick fox jumps over the lazy dog</p>
                </div>
                <button className='bg-[#23A6F0] text-white p-3 pl-6 pr-6 rounded'>Contact Us</button>
            </div>
            <div className='h-[1052.5px] flex flex-col justify-evenly items-start md:flex-row md:justify-between md:h-[272px]'>
                <div className='h-[170px] flex flex-col justify-between'>
                    <p className='font-bold '>Company Info</p> 
                    <a className='font-bold text-gray-400' href="/">About Us</a>
                    <a className='font-bold text-gray-400' href="/">Carrier</a>
                    <a className='font-bold text-gray-400' href="/">We are hiring</a>
                    <a className='font-bold text-gray-400' href="/">Blog</a>
                </div>
                <div className='h-[170px] flex flex-col justify-between'>
                    <p className='font-bold '>Company Info</p> 
                    <a className='font-bold text-gray-400' href="/">About Us</a>
                    <a className='font-bold text-gray-400' href="/">Carrier</a>
                    <a className='font-bold text-gray-400' href="/">We are hiring</a>
                    <a className='font-bold text-gray-400' href="/">Blog</a>
                </div>
                <div className='h-[170px] flex flex-col justify-between'>
                    <p className='font-bold '>Company Info</p> 
                    <a className='font-bold text-gray-400' href="/">About Us</a>
                    <a className='font-bold text-gray-400' href="/">Carrier</a>
                    <a className='font-bold text-gray-400' href="/">We are hiring</a>
                    <a className='font-bold text-gray-400' href="/">Blog</a>
                </div>
                <div className='h-[170px] flex flex-col justify-between'>
                    <p className='font-bold '>Company Info</p> 
                    <a className='font-bold text-gray-400' href="/">About Us</a>
                    <a className='font-bold text-gray-400' href="/">Carrier</a>
                    <a className='font-bold text-gray-400' href="/">We are hiring</a>
                    <a className='font-bold text-gray-400' href="/">Blog</a>
                </div>
                <div className='h-[170px] flex flex-col justify-between'>
                    <p className='font-bold '>Get In Touch</p> 
                    <a className='font-bold text-gray-400' href="/"><CallOutlinedIcon color={'primary'}/>(480) 555-0103</a>
                    <a className='font-bold text-gray-400' href="/"><LocationOnOutlinedIcon color={'primary'}/>4517 Washington Ave. </a>
                    <a className='font-bold text-gray-400' href="/"><SendOutlinedIcon color={'primary'} className='-rotate-45 mb-2'/>debra.holt@example.com</a>
                </div>

            </div>
            <div className='flex justify-between flex-col-reverse md:flex-row'>
                <p>Made With Love By mehrabriyan All Right Reserved </p>
                <div className=''>
                    <a className='pl-4 pr-4' href="/"><FacebookOutlinedIcon color='primary'/></a>
                    <a className='pl-4 pr-4' href="/"><InstagramIcon color='primary' /></a>
                    <a className='pl-4 pr-4' href="/"><TwitterIcon color='primary' /></a>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import logo from '../assets/images/magi-logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {

    const [isMobileMenu, setISMobileMenu] = useState(false);
    const [isScrolled, setisScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setisScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skill", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
    ];
    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500
         ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} border-none  z-50`}>
            <nav className='container mx-auto px-6 flex items-center justify-between'>
                <a href="#" className=''>
                    <img src={logo} alt="Magi POrtfolio" className="size-[45px] sm:size-[35px] md:size-[45px] lg:size-[50px] object-contain " />
                </a>

                {/* desktop navigation */}
                <div className='hidden md:flex items-center gap-1'>
                    <div className='flex justify-end items-center gap-1 glass rounded-full px-2 '>
                        {navLinks.map((e, index) => (
                            <a href={e.href} key={index} className='px-4 py-2 text-sm text-muted-foreground rounded-full hover:bg-surface hover:text-primary'>
                                {e.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className='hidden md:block'>
                    <Button className='cursor-pointer' size="sm">Contact Me</Button>
                </div>

                {/* MObile Menu Button*/}
                <button className='md:hidden p-2 text-foreground cursor-pointer animate-fade-in' onClick={() => setISMobileMenu((prev) => !prev)}>
                    {isMobileMenu ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenu && (<div className='md:hidden glass-strong animate-fade-in'>
                <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                    {navLinks.map((e, index) => (
                        <a href={e.href} key={index} onClick={()=>setISMobileMenu(false)} className='text-lg text-muted-foreground hover:text-foreground py-2 cursor-pointer'>
                            {e.label}
                        </a>
                    ))}
                    <Button className='cursor-pointer py-3' onClick={()=>setISMobileMenu(false)}>Contact Me</Button>
                </div>
            </div>)}
        </header>
    )
}

export default Navbar
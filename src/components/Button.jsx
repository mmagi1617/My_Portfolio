import React from 'react'

const Button = ({ className = "", size, children }) => {

    const baseClass =
        "relative  overflow-hidden rounded-full focus:outline-none focus-visible:ring-primary bg-primary text-secondery hover:bg-primary/90 shadow-primary/25";
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    }
    const classes = `${baseClass} ${sizeClasses[size]} ${className}`;

    return (
        <a href="#contact" className="h-full">
            <button className={classes}>
                <span className='relative flex items-center justify-center gap-2'>
                    {children}
                </span>
            </button>
        </a>
    )
}

export default Button
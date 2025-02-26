import React from 'react';

const Footer = () => {
    return (
        <div className='bg-blue-100 relative'>
            <div className="absolute inset-0 animate-neon-glow -z-10"></div>
            <footer className="footer text-base-content rounded p-10">
            <aside>
                <form>
                    <h6 className="footer-title">Contact Us</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered join-item" />
                            <button className="btn btn-success join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <img src="https://img.icons8.com/?size=48&id=13963&format=png" alt="Twitter icon!" />
                    </a>
                    <a>
                       <img src="https://img.icons8.com/?size=48&id=19318&format=png" alt="Youtube icon!" />
                    </a>
                    <a>
                       <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="Facebook icon!" />
                    </a>
                </div>
            </nav>
        </footer>
         <p className='flex justify-center items-center pb-5'>Copyright © {new Date().getFullYear()} - All right reserved by Lingo Bingo</p>
        </div>
    );
};





export default Footer;
import PropTypes from 'prop-types';

// import { useState } from 'react';

const Banner = ({ handleOnClick }) => {
    // console.log(data);
    // const [input, setInput] = useState('');


    return (
        <div className=" ">
            <div className="hero h-[600px]  mb-28">
                <img src='/banner.png' alt="" className="rounded-xl inset-0 w-full h-[80%] object-cover absolute" />
                <div
                    className="absolute top-0 left-0 w-full h-[80%] inset-0 bg-gray-200 bg-opacity-80 overflow-hidden rounded-xl">
                </div>
                <div className="hero-content text-center text-neutral-content z-50">
                    <div className="max-w-md flex flex-col md:flex-row items-center gap-2">

                        <form onSubmit={handleOnClick}>
                            <input name='name' type="text" placeholder="Search..."
                                
                                className="bg-zinc-300 text-pink-600 px-4 md:px-10 py-2 rounded border-2 border-stone-400" />

                            <button className="px-5 py-2 bg-pink-600 rounded border-2 border-pink-900 text-white" >Search</button>
                        </form>

                       
                    </div>


                </div>
            </div>

        </div>
    );
};
Banner.propTypes = {
    data: PropTypes.array.isRequired,
    handleOnClick: PropTypes.func.isRequired,
};

export default Banner;
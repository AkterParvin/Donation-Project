import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const DonationCard = ({ card }) => {
    // console.log(card);
    
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, price } = card;
    const divStyle = {
        backgroundColor: card_bg,
        
        color: category_bg,
    }
    const btnStyle = {
        backgroundColor: text_button_bg,
        color: category_bg,
    }
    
    return (
        
            <div style={divStyle} className="bg-zinc-200 rounded-xl  shadow-xl flex flex-col md:flex-row justify-between  mx-4">
               
                <div className=' flex-1'>
                    <img src={picture} alt="picture" className="rounded-t-xl md:rounded-l-xl h-full " />
                </div>
                <div className="pl-4 py-8 flex-1 ">

                    <button style={btnStyle} className="px-3 py-1 font-semibold rounded-lg mb-2">
                        {category}
                    </button>
                    <h2 className="text-xl text-black font-semibold mb-2">{title}</h2>
                    <p className='font-semibold text-base mb-6'>${price}</p>

                    <Link to={`/donationDetails/${id}`}>
                        <button style={btnStyle} className='text-lg font-semibold px-3 py-2 rounded-lg '>View Details</button>
                    </Link>
                </div>
            </div>
        
       
    );
};
DonationCard.propTypes = {
    card: PropTypes.object.isRequired,
}

export default DonationCard;
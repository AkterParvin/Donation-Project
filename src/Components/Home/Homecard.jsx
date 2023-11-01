import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Homecard = ({ card }) => {
   
    const { id, picture, title, category, category_bg, card_bg, text_button_bg } = card;
    
    const divStyle = {
        backgroundColor: card_bg,
        color: category_bg,
    }
    const btnStyle = {
        backgroundColor: text_button_bg,
        color: category_bg,
    }
    return (
        <div>
            <Link to={`donationDetails/${id}`}>
                <div style={divStyle} className=" card rounded-xl  shadow-xl ">
                    <figure><img src={picture} alt="picture" className="rounded-xl w-full h-[240px]" /></figure>
                    <div className="px-4 pt-8  h-[200px]">
                        <button style={btnStyle} className="px-5 py-2 font-semibold rounded-lg mb-2">{category}</button>
                        <h2 className="text-xl font-semibold">{title}</h2>

                    </div>
                </div>
            </Link>
        </div>
    );
};

Homecard.propTypes = {
    card:PropTypes.object.isRequired,
}
export default Homecard;
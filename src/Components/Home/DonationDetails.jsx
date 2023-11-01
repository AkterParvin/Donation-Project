/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { saveIdsInLoalStorage } from "../Utility/Function";


const DonationDetails = () => {
    const Donations = useLoaderData();
    const { id } = useParams();
    console.log(id);
    const idint = parseInt(id);
    const gectDonationID = Donations.find(donateId => donateId.id === idint);
    console.log(gectDonationID);

    const { picture, title, category, category_bg, card_bg, text_button_bg, description, price } = gectDonationID;
    
    
    const btnStyle = {
        backgroundColor: category_bg,
    }
    const handleOnClick = () => {
        saveIdsInLoalStorage(idint);
        Swal.fire({
            title: 'Successfully Donated $200!!!',
            text: title,
            imageUrl: picture,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })

    }
    return (
        <div className="mt-36 bg-slate-50 flex justify-center ">
            <div className="pt-6 md:px-8 lg:px-14 md:pt-5">

                <div className="w-[92%] md:w-[80%] mx-auto h-[60%] relative">
                    <img src={picture} alt="" className="w-full h-[98%] rounded-xl inset-0" />

                    <div className="absolute top-[78%]  left-0 w-full h-[20%] inset-0 bg-neutral-600 bg-opacity-80 overflow-hidden rounded-b-xl">

                        <button style={btnStyle} className=" px-4 py-2 rounded-lg text-xl font-semibold text-white top-[20%] absolute left-8"
                        onClick={handleOnClick}
                        >Donate ${price}</button>
                    </div>
                </div>

                <div className="w-[80%] mx-auto">
                    <h1 className="mt-8 md:mt-14 text-2xl md:text-4xl font-bold mb-6">{title} </h1>
                    <h2 className="text-[#0b0b0bb3] text-base font-medium">
                        {description}
                    </h2>
                </div>



            </div>
        </div>
    );
};

export default DonationDetails;
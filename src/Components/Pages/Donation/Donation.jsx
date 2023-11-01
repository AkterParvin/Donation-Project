import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocaleStorageID } from "../../Utility/Function";
import DonationCard from "./DonationCard";


const Donation = () => {
    const donation = useLoaderData();
    // console.log(donation);

    const [appliedId, setAppliedId] = useState([]);

    // console.log(appliedId);
    useEffect(() => {
        const donationGiven = getLocaleStorageID();
        console.log(donationGiven);
        if (donation.length > 0) {
            const donationId = donation.filter(donate => donationGiven.includes(donate.id));
            console.log(donationId);
            setAppliedId(donationId);
        }
    }, [donation])
    
    return (
        <div className="mt-52 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    appliedId.map(doId => <DonationCard key={doId.id} card={doId}></DonationCard>)
                }
           </div>
           
        </div>
    );
};

export default Donation;
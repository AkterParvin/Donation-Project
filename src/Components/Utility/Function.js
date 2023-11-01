const getLocaleStorageID = () => {
    const getIds = localStorage.getItem('Donation-Details');
    if (getIds) {
        return JSON.parse(getIds);
    }
    return [];
}

const saveIdsInLoalStorage = id => {
    const saveDonation = getLocaleStorageID();
    const ifExist = saveDonation.find(donateId => donateId === id);
    if (!ifExist) {
        saveDonation.push(id);
        localStorage.setItem('Donation-Details', JSON.stringify(saveDonation));
    }
}


export {getLocaleStorageID, saveIdsInLoalStorage}

// const [searchedDonation, setSearchedDonation] = useState(null);
// const [error, setError] = useState(null);

// const handleSearch = () => {
//     const searchCategory = document.getElementById("category-input").value;

//     if (searchCategory === "") {
//         setError("Please enter a category name for the search.");
//         setSearchedDonation(null);
//     } else {
//         const foundDonations = donations?.filter(
//             (donation) => donation.category === searchCategory
//         );

//         if (foundDonations.length > 0) {
//             setError(null);
//             setSearchedDonation(foundDonations);
//         } else {
//             setError("No donation found for the entered category.");
//             setSearchedDonation(null);
//         }
//     }
// }
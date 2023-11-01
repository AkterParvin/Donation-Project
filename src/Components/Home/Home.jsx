import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Homecard from "./Homecard";
import { useState } from "react";
 




const Home = () => {
    const data = useLoaderData();
    console.log(data);

    const [displayCategory, setCategory] = useState([]);
    // const [error, setError] = useState(null);
    
    console.log(displayCategory);
   
    const handleOnClick = (e) => {

        e.preventDefault();
        const inputValue = (e.target.name.value).toLowerCase();
        console.log(inputValue);
        const search = data.filter(item => inputValue === (item.category).toLowerCase());
        setCategory(search);

        
        // if (filter.toLowerCase().includes('education'))
        // {const educationDivs = data.filter(item => item.category === "Education");
        //         setCategory(educationDivs);
        // } else if (filter.toLowerCase().includes('health'))
        // {const healthDivs = data.filter(item => item.category === "Health");
        //         setCategory(healthDivs);
        // } else if (filter.toLowerCase().includes('food'))
        // {const foodDivs = data.filter(item => item.category === "Food");
        //         setCategory(foodDivs);
        // } else if (filter.toLowerCase().includes('clothing'))
        // { const clothingDivs = data.filter(item => item.category === 'Clothing');
        //         setCategory(clothingDivs);
        //    } else {
        //        setCategory(data);
        //    }
    }
    
    return (
        <div>
            <div className="lg:mb-36">
                <Banner data={data}
                    handleOnClick={handleOnClick}
                ></Banner>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 mt-10">

            {
             data.map((card, idx) =><Homecard key={idx}card={card}></Homecard>)
            }
            
                
            </div>
           
        </div>
    );
};

export default Home;
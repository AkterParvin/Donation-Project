/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocaleStorageID } from "../../Utility/Function";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip,  } from 'recharts';




const Statistics = () => {
    const data = useLoaderData();
    console.log(data)
    const [appliedId, setAppliedId] = useState([]);

    console.log(appliedId);
    useEffect(() => {
        const donationGiven = getLocaleStorageID();
        console.log(donationGiven);
        if (data.length > 0) {
            const donationId = data.filter(donate => donationGiven.includes(donate.id));
            console.log(donationId);
            setAppliedId(donationId);
        }
    }, [data]);

    const given = appliedId.length;
    const total = data.length;
    const calculate = (given / total) * 100;
    const givenDonation = calculate.toFixed(2)
    const existDonation=(100-givenDonation).toFixed(2)
    console.log(givenDonation);
    const data01 = [
        { name: 'Total donation', value: existDonation },
        { name: 'my donation', value: givenDonation },
    ];





    return (
        <div className="mt-44">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-10">Statistical Data of Donation:{appliedId.length}</h2>

            <div className="mb-10">
                <PieChart width={200} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
                

            </div>

            <div className=" flex flex-col md:flex-row gap-8 justify-center items-center ">
                <span className="flex justify-center items-center gap-2">
                    <h2>Total Donation</h2>
                    <h1 className="h-[10px] w-28 bg-teal-500 border-1 border-teal-100 rounded-lg">
                    </h1>
                </span>
                <span className="flex justify-center items-center gap-2">
                    <h2>Total Donation</h2>
                    <h1 className="h-[10px] w-28 bg-orange-500 border-1 border-teal-100 rounded-lg">
                    </h1>
                </span>
            </div>
        </div>
    );
};

export default Statistics;
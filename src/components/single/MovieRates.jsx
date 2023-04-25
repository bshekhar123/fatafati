// import React, { useState } from 'react'
import Title from '../home/Title';
import { BsBookmarkStarFill } from "react-icons/bs"
// import { Message, Select } from '../home/UsedInputs';

// const MovieRates = (movie) => {
//   const Ratings = [
// {
//   titles: "0-Poor",
//   value: 0,
// },
// {
//   titles: "1-Fair",
//   value: 1,
// },
// {
//   titles: "2-Good",
//   value: 2,
// },
// {
//   titles: "3-Very Good",
//   value: 3,
// },
// {
//   titles: "4-Excellent",
//   value: 4,
// },
// {
//   titles: "5-MasterPiece",
//   value: 5,
// },
//   ];

//   const[rating , setRating]= useState();
//   return (
//     <div className='my-2'>
//     <Title title="Reviews" Icon={BsBookmarkStarFill}></Title>
//     <div className='mt-10 xl:grid  flex-colo grid-cols-5 gap-12 bg-gray-900 xs:p-10 py-10 sm:p-20 rounded '>
//       <div className='xl:col-span-2 w-full flex flex-col gap-8 '>
//         <h3 className='text-xl text-zinc-200 font-semibold '>  Review {movie?.name} </h3>
//         <p className='text-sm leading-7 font-medium text-zinc-400'>
//           Write a review for this movie. lorem lorem lorem lorem lore lorem lorem lore
//         </p>
//         <div className='text-sm w-full'>
//         <Select label="Select Rating" options={Ratings} value={rating} onChange={(e)=> setRating(e.target.value)}/>

//         </div>
//         <Message label="Message" placeholder="Write your review"/>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default MovieRates;

import React, { useState } from "react";
import Select from "react-select";
import Star from '../home/Star';
import { Message } from '../home/UsedInputs';


const options = [
  {
    label: "0 - Poor",
    value: 0,
  },
  {
    label: "1 - Fair",
    value: 1,
  },
  {
    label: "2 - Good",
    value: 2,
  },
  {
    label: "3 - Very Good",
    value: 3,
  },
  {
    label: "4 - Excellent",
    value: 4,
  },
  {
    label: "5 - MasterPiece",
    value: 5,
  },
];

const MovieRates = ({ movie }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='my-2'>
      <Title title="Reviews" Icon={BsBookmarkStarFill}></Title>
      <div className='mt-10 xl:grid  flex-colo grid-cols-5 gap-20 bg-gray-900 xs:p-10 py-10 sm:p-20 rounded '>
        <div className='xl:col-span-2 w-full flex flex-col gap-8 '>
          <h3 className='text-xl text-zinc-200 font-semibold '>  Review  <br />"{movie?.title}" </h3>
          <p className='text-sm leading-7 font-medium text-zinc-400'>
            Write a review for this movie. lorem lorem lorem lorem lore lorem lorem lore
          </p>
          <div className=" sm:w-auto">
            <Select
             label="Message"
              className="w-full mt-2 px-6 py-4  rounded text-gray-900 "
              value={selectedOption}
              onChange={handleChange}
              options={options}
            />

          </div>
        </div>
        <div className="text-white xl:col-span-2 w-full flex flex-col gap-8">
        <Message className="" label="Message" placeholder="Write your review" />
        <button className="bg-[#FF0000] text-white py-3 w-full flex-colo rounded">SUBMIT</button>
        </div>

      </div>
    </div>

  );
};

export default MovieRates;

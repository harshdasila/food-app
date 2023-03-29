import {IMG_CDN_URL} from '../constants';

const Card = ({name,area,totalRatingsString,cuisines,cloudinaryImageId}) => {
    return (
      <div className='w-[220px] p-2 m-2 shadow-sm bg-pink-100'>
        <img alt='cardImage' className='card-img' src={IMG_CDN_URL+cloudinaryImageId}></img>
       <h2 className='font-bold'>{name} </h2> 
       <h3> {area}</h3> 
       <h4>{totalRatingsString} Stars</h4> 
       <h4>{cuisines.join(', ')}</h4>
      </div>
    )
  };
  export default Card;
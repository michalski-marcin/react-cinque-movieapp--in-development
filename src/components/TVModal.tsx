import tmdbTypes from "../interfaces/tmdbTypes";

const TVModal = ( details: tmdbTypes) => {
    // const releaseDate = details.release_date.split('-');
    return (
        <div className='p-8 max-sm:p-4'>
        <div className='text-xl font-semibold'>{details.name}</div>
        <div>
          {details.origin_country}
          {/* {releaseDate[0]}{details.runtime}{voteText} */}
        </div>
        <div>{details.overview}</div>
      </div>
    )
}

export default TVModal;
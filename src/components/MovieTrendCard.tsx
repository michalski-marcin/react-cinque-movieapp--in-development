interface MovieTrendResult {
    vote_average: number;
    poster_path: string;
    title: string;
  }
  
  const MovieTrendCard = (result: MovieTrendResult) => {
    const voteText = result.vote_average ? result.vote_average.toFixed(1) : 'N/A';
    return (
      <div className='w-[175px] relative text-sm'>
        <img
          src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
          alt='poster'
        />
        <div className='h-[30px] w-[100%] absolute bottom-[0] bg-opacity-55 bg-slate-900 flex items-center justify-between text-indigo-200'>
          <p className="px-1 overflow-hidden text-ellipsis whitespace-nowrap">{result.title}</p>
          <p className="px-1">{voteText}</p>
        </div>
      </div>
    );
  };
  
  export default MovieTrendCard;
  
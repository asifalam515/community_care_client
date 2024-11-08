const VolunteerNCard = ({ post }) => {
  const { thumbnail, title, category, deadline } = post;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={thumbnail} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title} </h2>
          <button className="btn btn-sm btn-error"> {category} </button>
          <h1>{deadline}</h1>
          <div className="card-actions">
            <button className="btn btn-primary">View Details </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNCard;

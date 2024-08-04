import reviews from "../datas/reviews";
const Comments = () => {
  return (
    <>
      <div className="bg-dark py-2 sticky-top">
        <h4 className="p-2">Customer FeedBack</h4>
      </div>
      <div className="p-3">
        {reviews.map((data) => (
          <div key={data.id} className="row">
            <img src={data.img} alt={data.name} className="img-photo" />
            <h5>{data.name}</h5>
            <img src={data.star} alt={data.name} className="img-star" />
            <small className="mb-5">{data.saying}</small>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;

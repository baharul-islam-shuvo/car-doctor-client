import { MdOutlineArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, } = service;
    return (
        <div className="card bg-base-100 w-96 border-2 rounded-lg mt-8">
            <div>
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt=""
                        className="rounded-lg" />
                </figure>
            </div>
            <div className="card-body flex flex-col">
                <h2 className="card-title font-bold flex-grow">{title}</h2>
                <div className="mt-2 flex justify-between">
                    <p className="font-semibold text-[#FF3811]">Price: ${price}</p>
                    <Link to={`/book/${_id}`}>
                        <button className="text-2xl text-[#FF3811]">
                            <MdOutlineArrowForward />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
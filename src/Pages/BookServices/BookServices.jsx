import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookServices = () => {
    const service = useLoaderData();
    const { title, _id, price: servicePrice } = service;
    const { user } = useContext(AuthContext);
    if (!service) {
        return <div>Loading...</div>;
    }

    const handleBookService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const price = form.price.value;
        const email = form.email.value;

        const order = {
            name,
            email,
            date,
            price,
            service: _id,
        };
        console.log("Order:", JSON.stringify(order, null, 2));
    };

    return (
        <div>
            <h2 className="text-4xl">Title: {title}</h2>
            <div className="bg-[#F3F3F3] rounded-lg mb-32 py-16 px-24">
                <form onSubmit={handleBookService} className="card-body">
                    <div className="flex gap-4">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={user?.displayName || ""}
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                defaultValue={user?.email || ""}
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input
                                type="text"
                                name="price"
                                defaultValue={servicePrice}
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input
                            className="btn text-white bg-[#FF3811]"
                            type="submit"
                            value="Order Confirm"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookServices;

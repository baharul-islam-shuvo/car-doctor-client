import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero mt-16 mb-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img
                        src={person}
                        className="w-3/4 rounded-lg shadow-2xl" />
                    <img
                        src={parts}
                        className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 p-4">
                    <h3 className="text-2xl font-bold text-[#FF3811]">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable.
                    </p>
                    <p className="py-6 font-semibold">
                        The majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable.
                    </p>
                    <button className="btn text-white bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
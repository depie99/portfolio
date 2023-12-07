import React from "react";

const About = () => {
    const shoot = () => {
        alert("Great Shot!");
    }
    return (
        <div
            name="about"
            id="about"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >

            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p id='add' className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                About
                            </p>
                            <button className="mx-2 border-2 rounded px-2" onClick={shoot}>
                                Take the shot!
                            </button>

                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold">
                            <p>
                                Hi. I'm Sanaz Baghban, a girl with passion in web world!
                            </p>
                        </div>
                        <div>
                            <p>
                                {" "}
                                A software developer with experience in building Responsive and
                                Scalable Web apps. I am well-knowledged in UI/UX principles and
                                practices. I'm Committed to staying up-to-date
                                with the latest technology trends and
                                delivering projects on time.
                                I Believe in the power of technology
                                to make a positive impact on society,
                                a tool to expand the vision to the
                                world and enjoy collaborating with
                                cross-functional teams to exceed
                                client expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
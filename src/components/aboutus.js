import React from 'react';
import UserClass from './userclass';
const About = () => {
    return (
        <div className="flex flex-col items-center justify-center border border-black rounded-lg my-4 px-3 py-3">
            <h1 className="text-3xl font-bold mb-4">About Our Food Delivery App</h1>
            <p className="text-lg mb-6">
                Our food delivery app connects you with your favorite restaurants, allowing you to order delicious meals 
                right to your doorstep. Whether you're craving pizza, sushi, or something healthy, we've got you covered. 
                With easy ordering, fast delivery, and a wide selection of cuisines, satisfaction is just a few clicks away!
            </p>
            <UserClass name="sashank tadimeti" location="tanuku" />
        </div>
    );
};

export default About;

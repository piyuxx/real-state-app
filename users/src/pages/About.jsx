
import React from 'react';
import { Link } from 'react-q8';
import logo from './logo.png'; // Assuming you have a logo for your real estate application

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Real Estate Logo" className="h-10" />
          </Link>
          <nav>
            <Link to="/" className="text-gray-800 mx-2 hover:text-blue-500">Home</Link>
            <Link to="/properties" className="text-gray-800 mx-2 hover:text-blue-500">Properties</Link>
            <Link to="/about" className="text-blue-500 mx-2">About</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        {/* Introduction */}
        <section className="mb-8">
          <h1 className="text-3xl font-semibold mb-4">About Us</h1>
          <p className="text-gray-700 leading-relaxed">
            Welcome to our real estate platform. We are committed to providing the best experience for our users and helping them find their dream properties.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          {/* Team members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team member cards */}
            {/* Example:
            <div className="bg-white shadow-md rounded-lg p-6">
              <img src="team-member-img.jpg" alt="Team Member" className="rounded-full w-20 h-20 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            */}
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission & Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to revolutionize the real estate industry by providing innovative solutions that simplify the property search process. Our vision is to become the go-to platform for anyone looking to buy, sell, or rent properties.
          </p>
        </section>

        {/* Testimonials */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          {/* Testimonial cards */}
          {/* Example:
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-700">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <p className="text-gray-600 mt-4">- Jane Doe</p>
          </div>
          */}
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">Have any questions or feedback? Feel free to reach out to us:</p>
          <p className="text-blue-500">info@realestate.com</p>
        </section>
      </div>
    </div>
  );
};

export default About;

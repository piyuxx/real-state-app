import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

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
            {/* Piyush Sharma */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <img src="https://media.licdn.com/dms/image/D4D03AQHyaV_YKhIWDw/profile-displayphoto-shrink_400_400/0/1672075946854?e=1718841600&v=beta&t=5sf9FnVniEwcM1eX6sJf1vfjZj_DV8-OfSGMPUA5RW0" alt="Piyush Sharma" className="rounded-full w-20 h-20 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Piyush Sharma</h3>
              <p className="text-gray-600">Real Estate Expert</p>
              <a href="https://www.linkedin.com/in/piyush-sharma-72256022b/" className="text-blue-500 hover:underline block mt-2">LinkedIn Profile</a>
            </div>

            {/* Adarsh Singh */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <img src="https://media.licdn.com/dms/image/C5103AQEt3pjo5L44Bw/profile-displayphoto-shrink_800_800/0/1567187649105?e=1718841600&v=beta&t=_gYnVJOZeOmO1UWnFWLpOhMY62qegkNTBJ3-cLs0b2Y" alt="Adarsh Singh" className="rounded-full w-20 h-20 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Adarsh Singh</h3>
              <p className="text-gray-600">Real Estate Consultant</p>
              <a href="https://www.linkedin.com/in/aadarsh--singh/" className="text-blue-500 hover:underline block mt-2">LinkedIn Profile</a>
            </div>
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
          <p className="text-blue-500">info@e-state.com</p>
        </section>
      </div>
    </div>
  );
};

export default About;

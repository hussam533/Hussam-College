import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center h-screen flex items-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2l0eSUyMGNhbXB1cyUyMGhkfGVufDB8fDB8fHww')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Hussam College</h1>
          <p className="text-xl mb-8 drop-shadow-md">Empowering minds, shaping futures</p>
          <Link
            to="/programs"
            className="bg-secondary text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary hover:text-secondary transition duration-300"
          >
            Explore Our Programs
          </Link>
        </div>
      </motion.section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Hussam College?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Excellence in Education</h3>
              <p>Our world-class faculty and cutting-edge facilities ensure you receive the best education possible.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Diverse Community</h3>
              <p>Join a vibrant and inclusive community of students from all walks of life and corners of the world.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Career Success</h3>
              <p>Our strong industry connections and career services set you up for success in your chosen field.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eSUyMGxlY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="News 1" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">New Research Breakthrough</h3>
              <p>Our scientists have made a groundbreaking discovery in the field of renewable energy.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDB8fDB8fHww" alt="News 2" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">Graduation Ceremony 2023</h3>
              <p>Celebrating the achievements of our latest graduates as they embark on their new journeys.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img src="https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D" alt="News 3" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">Sports Team Wins Championship</h3>
              <p>Our college basketball team brings home the national championship trophy.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
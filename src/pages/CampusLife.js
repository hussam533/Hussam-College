import React from 'react';
import { motion } from 'framer-motion';

export default function CampusLife() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Campus Life at Hussam College
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMHN0dWRlbnRzfGVufDB8fDB8fHww" alt="Campus Life" className="w-full h-auto rounded-lg shadow-md" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-semibold mb-4">A Vibrant Community</h2>
            <p className="mb-4">
              At Hussam College, campus life is an integral part of your educational experience. Our vibrant community offers countless opportunities for personal growth, cultural enrichment, and lifelong friendships.
            </p>
            <p>
              From student organizations and clubs to athletic events and cultural celebrations, there's always something happening on campus. Immerse yourself in a diverse and inclusive environment that fosters creativity, leadership, and social responsibility.
            </p>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Student Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Academic Clubs</h3>
              <p>Join clubs related to your major or explore new academic interests.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Cultural Organizations</h3>
              <p>Celebrate diversity and learn about different cultures on campus.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Service Groups</h3>
              <p>Give back to the community through various volunteer opportunities.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://images.unsplash.com/photo-1568667256549-094345857637?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D" alt="Library" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Library</h3>
              <p>State-of-the-art research facilities and study spaces.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww" alt="Fitness Center" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fitness Center</h3>
              <p>Modern equipment and fitness classes for all students.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9ybWl0b3J5fGVufDB8fDB8fHww" alt="Residence Halls" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Residence Halls</h3>
              <p>Comfortable and safe on-campus living options.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXRlcmlhfGVufDB8fDB8fHww" alt="Dining Hall" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dining Hall</h3>
              <p>Diverse meal options catering to all dietary needs.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
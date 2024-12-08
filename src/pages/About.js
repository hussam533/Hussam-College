import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          About Hussam College
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img  src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D" alt="Hussam College Campus" className="w-full h-auto rounded-lg shadow-md" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At Hussam College, our mission is to empower students with knowledge, skills, and experiences that prepare them for success in a rapidly changing world. We are committed to fostering a diverse and inclusive community that encourages intellectual curiosity, critical thinking, and personal growth.
            </p>
            <p>
              Through innovative teaching methods, cutting-edge research opportunities, and strong industry partnerships, we aim to cultivate the next generation of leaders, thinkers, and problem-solvers who will make a positive impact on society.
            </p>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <p className="mb-4">
              Founded in 1950, Hussam College has a rich history of academic excellence and innovation. What began as a small liberal arts college has grown into a comprehensive institution offering a wide range of programs across various disciplines.
            </p>
            <p className="mb-4">
              Over the decades, we have continuously adapted to meet the changing needs of our students and society. We've expanded our campus, introduced cutting-edge technology, and developed new programs to stay at the forefront of higher education.
            </p>
            <p>
              Today, Hussam College stands as a beacon of learning, attracting students and faculty from around the world. Our commitment to quality education, groundbreaking research, and community engagement has earned us a reputation as one of the leading institutions in the region.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww" alt="Dr. John Doe" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-2">Dr. John Doe</h3>
              <p className="text-gray-600">President</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D" alt="Dr. Jane Smith" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-2">Dr. Jane Smith</h3>
              <p className="text-gray-600">Provost</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="Dr. Alex Johnson" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-2">Dr. Alex Johnson</h3>
              <p className="text-gray-600">Dean of Students</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
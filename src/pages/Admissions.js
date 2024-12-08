import React from 'react';
import { motion } from 'framer-motion';

export default function Admissions() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Admissions at Hussam College
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-primary">Application Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="flex items-center">
                <span className="mr-2">📝</span>
                Complete the online application form
              </li>
              <li className="flex items-center">
                <span className="mr-2">📚</span>
                Submit official high school transcripts
              </li>
              <li className="flex items-center">
                <span className="mr-2">📊</span>
                Provide SAT or ACT scores
              </li>
              <li className="flex items-center">
                <span className="mr-2">✍️</span>
                Write a personal statement
              </li>
              <li className="flex items-center">
                <span className="mr-2">📨</span>
                Obtain letters of recommendation
              </li>
              <li className="flex items-center">
                <span className="mr-2">💳</span>
                Pay the application fee
              </li>
            </ol>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Graduation Ceremony" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Important Dates</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">Nov 1</div>
                <div className="text-lg">Early Decision Deadline</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">Jan 15</div>
                <div className="text-lg">Regular Decision Deadline</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">Mar 1</div>
                <div className="text-lg">Financial Aid Deadline</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">Apr 1</div>
                <div className="text-lg">Admission Decisions Released</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">May 1</div>
                <div className="text-lg">Enrollment Deposit Due</div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Financial Aid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="mb-4">
                Hussam College is committed to making education accessible to all qualified students. We offer a variety of financial aid options, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Merit-based scholarships</li>
                <li>Need-based grants</li>
                <li>Work-study programs</li>
                <li>Student loans</li>
              </ul>
              <p className="mt-4">
                To apply for financial aid, please complete the Free Application for Federal Student Aid (FAFSA) and the Hussam College Financial Aid Application.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jaWFsJTIwYWlkfGVufDB8fDB8fHww" 
                alt="Financial Aid" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Contact Admissions</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-lg">(123) 456-7890</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-lg">admissions@hussamcollege.edu</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                <p className="text-lg">Monday - Friday: 9am - 5pm</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-primary text-white p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Hussam College</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/about" className="hover:text-secondary">About</Link></li>
            <li><Link to="/programs" className="hover:text-secondary">Programs</Link></li>
            <li><Link to="/admissions" className="hover:text-secondary">Admissions</Link></li>
            <li><Link to="/campus-life" className="hover:text-secondary">Campus Life</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
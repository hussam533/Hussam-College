import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Hussam College</h3>
          <p>Empowering minds, shaping futures.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-secondary">Programs</Link></li>
            <li><Link to="/admissions" className="hover:text-secondary">Admissions</Link></li>
            <li><Link to="/campus-life" className="hover:text-secondary">Campus Life</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>123 College Street</p>
          <p>Ottawa, Ontario 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@hussamcollege.edu</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary">Facebook</a>
            <a href="#" className="hover:text-secondary">Twitter</a>
            <a href="#" className="hover:text-secondary">Instagram</a>
            <a href="#" className="hover:text-secondary">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Hussam College. All rights reserved.</p>
      </div>
    </footer>
  );
}
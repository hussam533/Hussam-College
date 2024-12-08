import React, { useState } from 'react';
import { motion } from 'framer-motion';

const programCategories = {
  "Arts and Humanities": [
    {
      name: "English Literature",
      description: "Analyze classic and contemporary literature from around the world.",
      duration: "4 years",
      degree: "Bachelor of Arts",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW5nbGlzaCUyMGxpdGVyYXR1cmV8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "History",
      description: "Study past events, cultures, and their impact on the present.",
      duration: "4 years",
      degree: "Bachelor of Arts",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Philosophy",
      description: "Explore fundamental questions about existence, knowledge, and ethics.",
      duration: "4 years",
      degree: "Bachelor of Arts",
      image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9zb3BoeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Linguistics",
      description: "Analyze the structure, acquisition, and use of language.",
      duration: "4 years",
      degree: "Bachelor of Arts",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZ3Vpc3RpY3N8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Art History",
      description: "Study the development of visual arts through different periods and cultures.",
      duration: "4 years",
      degree: "Bachelor of Arts",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwaGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
  "Social Sciences": [
    {
      name: "Psychology",
      description: "Explore the human mind, behavior, and mental processes.",
      duration: "4 years",
      degree: "Bachelor of Arts",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHN5Y2hvbG9neXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Sociology",
      description: "Examine social behavior, structures, and institutions.",
      duration: "4 years",
      degree: "Bachelor of Arts",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaW9sb2d5fGVufDB8fDB8fHww"
    },
    {
      name: "Anthropology",
      description: "Study human cultures, evolution, and diversity.",
      duration: "4 years",
      degree: "Bachelor of Arts",
      image: "https://images.unsplash.com/photo-1693166757354-7eda7c5e9609?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW50aHJvcG9sb2d5fGVufDB8fDB8fHww"
    },
    {
      name: "Political Science",
      description: "Analyze political systems, theories, and international relations.",
      duration: "4 years",
      degree: "Bachelor of Arts",
      image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9saXRpY2FsJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Economics",
      description: "Study the production, distribution, and consumption of goods and services.",
      duration: "4 years",
      degree: "Bachelor of Arts",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbm9taWNzfGVufDB8fDB8fHww"
    }
  ],
  "Natural Sciences": [
    {
      name: "Biology",
      description: "Study living organisms, their structure, function, and evolution.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Chemistry",
      description: "Explore the composition, structure, and properties of matter.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWlzdHJ5fGVufDB8fDB8fHww"
    },
    {
      name: "Physics",
      description: "Investigate the fundamental principles governing the natural world.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Environmental Science",
      description: "Study the environment and learn about sustainability and conservation.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW52aXJvbm1lbnRhbCUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Astronomy",
      description: "Study celestial objects, phenomena, and the universe.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0cm9ub215fGVufDB8fDB8fHww"
    }
  ],
  "Engineering and Technology": [
    {
      name: "Computer Science",
      description: "Learn the fundamentals of programming, algorithms, and software development.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww"
    },
    {
      name: "Mechanical Engineering",
      description: "Design and analyze mechanical systems and products.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fHww"
    },
    {
      name: "Electrical Engineering",
      description: "Design and develop electrical systems and technologies.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fHww"
    },
    {
      name: "Civil Engineering",
      description: "Design, construct, and maintain infrastructure and buildings.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l2aWwlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Biomedical Engineering",
      description: "Apply engineering principles to medicine and healthcare.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbWVkaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fHww"
    }
  ],
  "Business and Management": [
    {
      name: "Business Administration",
      description: "Develop skills in management, finance, marketing, and entrepreneurship.",
      duration: "4 years",
      degree: "Bachelor of Business Administration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBhZG1pbmlzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Marketing",
      description: "Learn strategies for promoting products, services, and brands.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nfGVufDB8fDB8fHww"
    },
    {
      name: "Finance",
      description: "Study financial markets, investments, and corporate finance.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image:  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Accounting",
      description: "Learn to prepare and analyze financial records for organizations.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNjb3VudGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "International Business",
      description: "Study global business practices, trade, and cross-cultural management.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJuYXRpb25hbCUyMGJ1c2luZXNzfGVufDB8fDB8fHww"
    }
  ],
  "Health Sciences": [
    {
      name: "Nursing",
      description: "Prepare for a career in healthcare with hands-on clinical experience.",
      duration: "4 years",
      degree: "Bachelor of Science in Nursing",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnVyc2luZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Public Health",
      description: "Study health promotion, disease prevention, and community health.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVibGljJTIwaGVhbHRofGVufDB8fDB8fHww"
    },
    {
      name: "Nutrition and Dietetics",
      description: "Learn about food science, nutrition, and dietary planning.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnV0cml0aW9ufGVufDB8fDB8fHww"
    },
    {
      name: "Pharmacy",
      description: "Study drug development, dispensing, and patient care.",
      duration: "6 years",
      degree: "Doctor of Pharmacy",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Occupational Therapy",
      description: "Help people overcome physical and cognitive challenges in daily life.",
      duration: "4 years",
      degree: "Bachelor of Science",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2NjdXBhdGlvbmFsJTIwdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ]
};

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(programCategories)[0]);
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Programs
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(programCategories).map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programCategories[selectedCategory].map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => setSelectedProgram(program)}
            >
              <img src={program.image} alt={program.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{program.name}</h2>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Duration: {program.duration}</span>
                  <span>Degree: {program.degree}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold mb-4">{selectedProgram.name}</h2>
              <img src={selectedProgram.image} alt={selectedProgram.name} className="w-full h-64 object-cover rounded-lg mb-6" />
              <p className="text-gray-600 mb-4">{selectedProgram.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Degree</h3>
                  <p>{selectedProgram.degree}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Duration</h3>
                  <p>{selectedProgram.duration}</p>
                </div>
              </div>
              <button
                className="mt-6 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300"
                onClick={() => setSelectedProgram(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
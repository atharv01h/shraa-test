import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Calendar, FileText, MessageCircle, Library, GraduationCap, 
  Sparkles, ExternalLink, Zap, Bus, Coffee, Users, Award, Book, 
  Laptop, Phone, Mail, MapPin
} from 'lucide-react';

function App() {
  const events = [
    { title: 'Annual Tech Fest', date: '2024-04-15', status: 'upcoming' },
    { title: 'Cultural Night', date: '2024-03-30', status: 'upcoming' },
    { title: 'Sports Week', date: '2024-03-10', status: 'completed' }
  ];

  const documents = [
    { name: 'Transcripts', timing: '10:00 AM - 2:00 PM', location: 'Admin Block' },
    { name: 'Bonafide Certificate', timing: '11:00 AM - 3:00 PM', location: 'Academic Section' },
    { name: 'ID Card', timing: '9:00 AM - 4:00 PM', location: 'Student Services' }
  ];

  const facilities = [
    { name: 'Computer Lab', timing: '8:00 AM - 6:00 PM', location: 'Tech Block' },
    { name: 'Cafeteria', timing: '8:00 AM - 5:00 PM', location: 'Central Block' },
    { name: 'Sports Complex', timing: '6:00 AM - 8:00 PM', location: 'Sports Block' }
  ];

  const transportSchedule = [
    { route: 'City Route 1', departure: '7:30 AM', return: '5:30 PM' },
    { route: 'City Route 2', departure: '8:00 AM', return: '6:00 PM' },
    { route: 'Express Route', departure: '7:00 AM', return: '4:30 PM' }
  ];

  const contacts = {
    emergency: '(55 123-4567',
    adminOffice: '(555) 234-5678',
    email: 'info@college.edu',
    address: '123 College Avenue, Education City, pune'
  };

  const academicResources = [
    { name: 'Digital Library Access', description: '24/7 online access to research papers and e-books' },
    { name: 'Learning Management System', description: 'Access course materials and assignments' },
    { name: 'Research Databases', description: 'Access to academic journals and publications' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
      {/* Header - Same as before */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-black/20 backdrop-blur-lg border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <GraduationCap className="w-10 h-10 text-indigo-400" />
              </motion.div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Shraa Hub
              </h1>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
       
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-white text-center relative overflow-hidden border border-white/20"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
            key={i}
            className="absolute w-64 h-64 bg-white/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
                />
              ))}

              <motion.div
                animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
                }}
                transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
                }}
                className="absolute top-6 right-6"
              >
                <Sparkles className="w-10 h-10 text-yellow-300" />
              </motion.div>
              
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold mb-6 relative"
              >
                <span className="relative">
            Chat with Shraa
            <motion.span
              className="absolute -right-8 top-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            >
              <Zap className="w-6 h-6 text-yellow-300" />
            </motion.span>
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl mb-8 text-indigo-100"
              >
                Get instant answers
              </motion.p>
              
              <motion.a
                href="http://localhost:5174/"
                target="_self"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-white text-indigo-600 px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Start Chatting Now</span>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white/0"
            animate={{
              x: ["0%", "100%"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ opacity: 0.2 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Library Hours */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/10 text-white"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Library className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-semibold">Library Hours</h2>
            </div>
            <div className="space-y-2">
              <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-indigo-400" /> Weekdays: 8:00 AM - 9:00 PM</p>
              <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-indigo-400" /> Weekends: 9:00 AM - 6:00 PM</p>
            </div>
          </motion.div>

          {/* Events */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/10 text-white"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-semibold">Events</h2>
            </div>
            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-indigo-200">{event.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    event.status === 'upcoming' ? 'bg-indigo-500/50 text-indigo-100' : 'bg-gray-500/50 text-gray-200'
                  }`}>
                    {event.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Transport Schedule - New Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/10 text-white"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Bus className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-semibold">Transport Schedule</h2>
            </div>
            <div className="space-y-4">
              {transportSchedule.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 rounded-lg bg-white/5"
                >
                  <p className="font-medium">{route.route}</p>
                  <div className="text-sm text-indigo-200">
                    <p>Departure: {route.departure}</p>
                    <p>Return: {route.return}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Facilities - New Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/10 text-white"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-semibold">Campus Facilities</h2>
            </div>
            <div className="space-y-4">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 rounded-lg bg-white/5"
                >
                  <p className="font-medium">{facility.name}</p>
                  <p className="text-sm text-indigo-200">{facility.timing}</p>
                  <p className="text-sm text-indigo-200">{facility.location}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Resources - New Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/10 text-white md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Book className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-semibold">Academic Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {academicResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  className="p-4 rounded-lg border border-white/10 transition-all"
                >
                  <h3 className="font-medium flex items-center">
                    <Laptop className="w-4 h-4 mr-2 text-indigo-400" />
                    {resource.name}
                  </h3>
                  <p className="text-sm text-indigo-200 mt-2">{resource.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/10 text-white md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-semibold">Document Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  className="p-4 rounded-lg border border-white/10 transition-all"
                >
                  <h3 className="font-medium">{doc.name}</h3>
                  <p className="text-sm text-indigo-200">{doc.timing}</p>
                  <p className="text-sm text-indigo-200">{doc.location}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information - New Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/10 text-white md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Phone className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-semibold">Contact Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-white/5"
              >
                <p className="flex items-center text-indigo-200">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency: {contacts.emergency}
                </p>
                <p className="flex items-center text-indigo-200 mt-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Admin Office: {contacts.adminOffice}
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-white/5"
              >
                <p className="flex items-center text-indigo-200">
                  <Mail className="w-4 h-4 mr-2" />
                  {contacts.email}
                </p>
                <p className="flex items-center text-indigo-200 mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {contacts.address}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t border-white/10 mt-12 py-6"
      >
        <div className="container mx-auto px-4 text-center text-indigo-200">
          Created by Birajdar Shraddha Dilip
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
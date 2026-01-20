

// import { Button } from '../components/ui/button';
// import { motion } from 'framer-motion';
// import { Globe, Users, Award, TrendingUp } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import Navbar from "../components/Navbar"
// import { Link } from 'react-router-dom';
// import Footer from '../components/Footer';

// const Home = () => {
//   const [connections, setConnections] = useState([]);

//   useEffect(() => {
//     const generateConnections = () => {
//       const newConnections = [];
//       for (let i = 0; i < 20; i++) {
//         newConnections.push({
//           id: i,
//           x1: Math.random() * 100,
//           y1: Math.random() * 100,
//           x2: Math.random() * 100,
//           y2: Math.random() * 100,
//           delay: Math.random() * 2
//         });
//       }
//       setConnections(newConnections);
//     };
//     generateConnections();
//   }, []);

//   return (<>
//   <Navbar />
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
//       <div className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="z-10"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-6"
//               >
//                 <Award className="w-4 h-4 text-red-500" />
//                 <span className="text-sm font-semibold text-red-600">#1 Alumni Network Worldwide</span>
//               </motion.div>

//               <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//                 <span className="text-gray-900">Dil Se</span>
//                 <br />
//                 <span className="text-red-500">Connect</span>
//               </h1>

//               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                 Join the world's most vibrant alumni community. Connect with peers, 
//                 mentors, and opportunities across the globe with genuine connections 
//                 that last a lifetime.
//               </p>

//               <div className="grid grid-cols-3 gap-6 mb-10">
//                 <div>
//                   <div className="text-3xl font-bold text-red-500">10M+</div>
//                   <div className="text-sm text-gray-600">Alumni</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-red-500">150+</div>
//                   <div className="text-sm text-gray-600">Countries</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-red-500">50K+</div>
//                   <div className="text-sm text-gray-600">Events</div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-4">
//                <Link to="/signup"><Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
//                   Get Started Free
//                 </Button></Link>
//                 <Button variant="outline" className="border-2 border-gray-300 px-8 py-6 text-lg font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-300">
//                   Learn More
//                 </Button>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="relative h-[600px] flex items-center justify-center"
//             >
//               <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
//                 {connections.map((conn) => (
//                   <motion.line
//                     key={conn.id}
//                     x1={`${conn.x1}%`}
//                     y1={`${conn.y1}%`}
//                     x2={`${conn.x2}%`}
//                     y2={`${conn.y2}%`}
//                     stroke="rgba(239, 68, 68, 0.2)"
//                     strokeWidth="1"
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={{ pathLength: 1, opacity: 1 }}
//                     transition={{
//                       duration: 2,
//                       delay: conn.delay,
//                       repeat: Infinity,
//                       repeatType: "reverse",
//                       repeatDelay: 1
//                     }}
//                   />
//                 ))}
//               </svg>

//               <div className="relative z-10">
//                 <motion.div
//                   className="absolute inset-0 rounded-full border-2 border-red-300"
//                   animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                 />
//                 <motion.div
//                   className="absolute inset-0 rounded-full border-2 border-red-400"
//                   animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
//                   transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
//                 />

//                 <div className="relative w-80 h-80 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-2xl flex items-center justify-center">
//                   <Globe className="w-40 h-40 text-white" strokeWidth={1.5} />
                  
//                   {[...Array(8)].map((_, i) => {
//                     const angle = (i * 360) / 8;
//                     const radius = 160;
//                     const x = Math.cos((angle * Math.PI) / 180) * radius;
//                     const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
//                     return (
//                       <motion.div
//                         key={i}
//                         className="absolute w-4 h-4 bg-white rounded-full shadow-lg"
//                         style={{
//                           left: '50%',
//                           top: '50%',
//                           marginLeft: `${x}px`,
//                           marginTop: `${y}px`,
//                           transform: 'translate(-50%, -50%)'
//                         }}
//                         animate={{
//                           scale: [1, 1.5, 1],
//                           opacity: [0.5, 1, 0.5]
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                           delay: i * 0.2
//                         }}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 1 }}
//                 className="absolute top-10 right-10 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
//               >
//                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
//                   <Users className="w-6 h-6 text-red-500" />
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-900">2.5M</div>
//                   <div className="text-xs text-gray-600">Active Today</div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 1.2 }}
//                 className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
//               >
//                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                   <TrendingUp className="w-6 h-6 text-green-500" />
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-900">+156%</div>
//                   <div className="text-xs text-gray-600">Growth Rate</div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Home;


import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { Globe, Users, Award, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

const Home = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const generateConnections = () => {
      const newConnections = [];
      for (let i = 0; i < 20; i++) {
        newConnections.push({
          id: i,
          x1: Math.random() * 100,
          y1: Math.random() * 100,
          x2: Math.random() * 100,
          y2: Math.random() * 100,
          delay: Math.random() * 2
        });
      }
      setConnections(newConnections);
    };
    generateConnections();
  }, []);

  return (<>
  <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-6"
              >
                <Award className="w-4 h-4 text-red-500" />
                <span className="text-sm font-semibold text-red-600">#1 Alumni Network Worldwide</span>
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Dil Se</span>
                <br />
                <span className="text-red-500">Connect</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join the world's most vibrant alumni community. Connect with peers, 
                mentors, and opportunities across the globe with genuine connections 
                that last a lifetime.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                <div>
                  <div className="text-3xl font-bold text-red-500">500+</div>
                  <div className="text-sm text-gray-600">Alumni</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500">25+</div>
                  <div className="text-sm text-gray-600">Cities in India</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500">50+</div>
                  <div className="text-sm text-gray-600">Events</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to='/signup'><Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started Free
                </Button></Link>
                {/* Link to Learn More */}
                <Button variant="outline" className="border-2 border-gray-300 px-8 py-6 text-lg font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[600px] flex items-center justify-center"
            >
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                {connections.map((conn) => (
                  <motion.line
                    key={conn.id}
                    x1={`${conn.x1}%`}
                    y1={`${conn.y1}%`}
                    x2={`${conn.x2}%`}
                    y2={`${conn.y2}%`}
                    stroke="rgba(239, 68, 68, 0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 2,
                      delay: conn.delay,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1
                    }}
                  />
                ))}
              </svg>

              <div className="relative z-10">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-red-300"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-red-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />

                <div className="relative w-80 h-80 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-2xl flex items-center justify-center">
                  <Globe className="w-40 h-40 text-white" strokeWidth={1.5} />
                  
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 360) / 8;
                    const radius = 160;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-white rounded-full shadow-lg"
                        style={{
                          left: '50%',
                          top: '50%',
                          marginLeft: `${x}px`,
                          marginTop: `${y}px`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute top-10 right-10 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-xs text-gray-600">Active Today</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">+85%</div>
                  <div className="text-xs text-gray-600">Growth Rate</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
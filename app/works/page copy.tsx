// 'use client';

// import { useState } from 'react';
// import Lightbox from 'yet-another-react-lightbox';
// import Zoom from 'yet-another-react-lightbox/plugins/zoom';
// import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// import 'yet-another-react-lightbox/styles.css';
// import 'yet-another-react-lightbox/plugins/thumbnails.css';
// import { Eye, MapPin, Hammer, DollarSign, Calendar, X, Star, Award, CheckCircle, Clock, Users, ArrowLeft } from 'lucide-react';

// export default function PortfolioPage() {
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [lightboxIndex, setLightboxIndex] = useState(0);
//   const [currentProjectImages, setCurrentProjectImages] = useState([]);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: 'Modern Living Room Suite',
//       category: 'house',
//       location: 'Palm Grove Residence, Miami',
//       date: 'March 2024',
//       duration: '3 weeks',
//       woodType: 'Premium Teak & Oak',
//       quality: 'Premium',
//       costRate: '$$$',
//       client: 'Mr. Johnson',
//       rating: 5,
//       description: 'Complete living room furniture including sectional sofa frame, coffee table, and entertainment unit with custom carved details.',
//       detailedDescription: 'This project involved creating a complete living room set for a modern home. We used premium teak wood for the main structure and oak for decorative elements. The design features clean lines with subtle traditional carvings that add character without overwhelming the modern aesthetic. All pieces were finished with eco-friendly varnish for durability.',
//       specifications: [
//         'Hand-carved decorative panels',
//         'Mortise and tenon joinery',
//         'Natural oil finish',
//         'Custom dimensions to fit space',
//         'Soft-close drawers and doors'
//       ],
//       testimonial: 'The craftsmanship is outstanding! Every detail was perfect and the team was professional throughout.',
//       images: [
//         'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
//         'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
//         'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800'
//       ]
//     },
//     {
//       id: 2,
//       title: 'Boutique Hotel Lobby',
//       category: 'commercial',
//       location: 'Seaside Resort, California',
//       date: 'January 2024',
//       duration: '6 weeks',
//       woodType: 'Mahogany & Walnut',
//       quality: 'Luxury',
//       costRate: '$$$$',
//       client: 'Seaside Resorts Inc.',
//       rating: 5,
//       description: 'Elegant reception desk, seating arrangements, and decorative panels for a 5-star boutique hotel.',
//       detailedDescription: 'A prestigious project for a luxury hotel requiring the highest quality materials and craftsmanship. We created a stunning reception desk with intricate inlay work, comfortable seating for the lobby area, and decorative wall panels. The mahogany was sourced from sustainable forests and finished to highlight its natural grain.',
//       specifications: [
//         'Commercial-grade finish',
//         'Inlay work with contrasting woods',
//         'Heavy-duty construction',
//         'Waterproof sealed surfaces',
//         'Custom upholstery coordination'
//       ],
//       testimonial: 'Transformed our lobby into a statement piece. Guests constantly compliment the furniture!',
//       images: [
//         'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
//         'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800',
//         'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=800'
//       ]
//     },
//     {
//       id: 3,
//       title: 'Custom Home Office',
//       category: 'custom',
//       location: 'Private Residence, Boston',
//       date: 'December 2023',
//       duration: '4 weeks',
//       woodType: 'Cherry Wood',
//       quality: 'Premium',
//       costRate: '$$$',
//       client: 'Dr. Sarah Mitchell',
//       rating: 5,
//       description: 'Bespoke home office featuring built-in shelving, executive desk, and ergonomic storage solutions.',
//       detailedDescription: 'Designed and built a complete home office solution with custom measurements to maximize the available space. The cherry wood provides a warm, professional atmosphere. Features include hidden cable management, adjustable shelving, and a spacious desk with integrated storage.',
//       specifications: [
//         'Built-in cable management',
//         'Adjustable shelf system',
//         'Ergonomic desk height',
//         'Soft-close mechanisms',
//         'Matching wood grain throughout'
//       ],
//       testimonial: 'My productivity has doubled! The space is both beautiful and incredibly functional.',
//       images: [
//         'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
//         'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
//         'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800'
//       ]
//     },
//     {
//       id: 4,
//       title: 'Restaurant Interior',
//       category: 'commercial',
//       location: 'Downtown Bistro, Portland',
//       date: 'November 2023',
//       duration: '5 weeks',
//       woodType: 'Reclaimed Pine',
//       quality: 'Standard',
//       costRate: '$$',
//       client: 'Urban Bistro LLC',
//       rating: 4,
//       description: 'Rustic dining tables, chairs, and bar counter crafted from sustainably sourced reclaimed wood.',
//       detailedDescription: 'An eco-friendly project using reclaimed pine to create a rustic yet refined dining space. Each piece of wood was carefully selected and treated to ensure durability while maintaining its weathered character. The furniture can withstand heavy commercial use while providing a unique, warm ambiance.',
//       specifications: [
//         'Reclaimed wood restoration',
//         'Heavy-duty commercial construction',
//         'Food-safe finish',
//         'Wobble-free leveling feet',
//         'Easy maintenance surface'
//       ],
//       testimonial: 'Customers love the rustic charm. The furniture has held up perfectly despite heavy daily use.',
//       images: [
//         'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
//         'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
//         'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800'
//       ]
//     },
//     {
//       id: 5,
//       title: 'Master Bedroom Set',
//       category: 'house',
//       location: 'Hillside Villa, Austin',
//       date: 'October 2023',
//       duration: '4 weeks',
//       woodType: 'Maple & Ash',
//       quality: 'Premium',
//       costRate: '$$$',
//       client: 'The Anderson Family',
//       rating: 5,
//       description: 'Complete bedroom furniture including king-size bed frame, nightstands, dresser, and wardrobe.',
//       detailedDescription: 'A cohesive bedroom set designed to create a peaceful, elegant sleeping environment. The combination of maple and ash provides beautiful contrast while maintaining a unified look. All pieces feature dovetail drawer construction and solid wood panels.',
//       specifications: [
//         'Solid wood construction',
//         'Dovetail drawer joinery',
//         'Full-extension drawer slides',
//         'Matching hardware throughout',
//         'Low-VOC finish for safety'
//       ],
//       testimonial: 'Waking up in this bedroom feels like being in a luxury hotel. Worth every penny!',
//       images: [
//         'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800',
//         'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800',
//         'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800'
//       ]
//     },
//     {
//       id: 6,
//       title: 'Custom Wine Cellar',
//       category: 'custom',
//       location: 'Estate Home, Napa Valley',
//       date: 'September 2023',
//       duration: '8 weeks',
//       woodType: 'Redwood',
//       quality: 'Luxury',
//       costRate: '$$$$',
//       client: 'Mr. & Mrs. Thompson',
//       rating: 5,
//       description: 'Temperature-controlled wine cellar with custom racking system for 500+ bottles and tasting table.',
//       detailedDescription: 'An ambitious project creating a climate-controlled wine cellar with capacity for over 500 bottles. The redwood was chosen for its natural resistance to moisture and its beautiful aging properties. The design includes individual bottle storage, display shelving, and a custom tasting table with integrated lighting.',
//       specifications: [
//         'Climate-resistant construction',
//         'Individual bottle slots',
//         'LED accent lighting',
//         'Custom tasting table',
//         'Display case with glass doors'
//       ],
//       testimonial: 'This cellar is a work of art. Our wine collection has never looked better!',
//       images: [
//         'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
//         'https://images.unsplash.com/photo-1568213816046-0ee1c42bd2559?w=800',
//         'https://images.unsplash.com/photo-1547516508-4c1f9c7c4ec3?w=800'
//       ]
//     }
//   ];

//   const categories = [
//     { id: 'all', label: 'All Projects' },
//     { id: 'house', label: 'Residential' },
//     { id: 'commercial', label: 'Commercial' },
//     { id: 'custom', label: 'Custom Works' }
//   ];

//   const filteredProjects = activeFilter === 'all'
//     ? projects
//     : projects.filter(p => p.category === activeFilter);

//   const openLightbox = (images, index) => {
//     setCurrentProjectImages(images.map(src => ({ src })));
//     setLightboxIndex(index);
//     setLightboxOpen(true);
//   };

//   const getQualityColor = (quality) => {
//     switch (quality) {
//       case 'Luxury': return 'text-purple-600 bg-purple-50 border-purple-200';
//       case 'Premium': return 'text-blue-600 bg-blue-50 border-blue-200';
//       default: return 'text-green-600 bg-green-50 border-green-200';
//     }
//   };

//   if (selectedProject) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         {/* Details Header */}
//         <div className="bg-gradient-to-r from-amber-900 to-orange-800 text-white py-8 px-4 sticky top-0 z-20 shadow-lg">
//           <div className="max-w-7xl mx-auto">
//             <button
//               onClick={() => setSelectedProject(null)}
//               className="flex items-center gap-2 text-amber-100 hover:text-white mb-4 transition-colors"
//             >
//               <ArrowLeft size={20} />
//               Back to Portfolio
//             </button>
//             <h1 className="text-3xl font-bold">{selectedProject.title}</h1>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 py-8">
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Main Content */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* Image Gallery */}
//               <div className="bg-white rounded-xl shadow-md overflow-hidden">
//                 <div className="relative h-96 bg-gray-200">
//                   <img
//                     src={selectedProject.images[0]}
//                     alt={selectedProject.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <button
//                     onClick={() => openLightbox(selectedProject.images, 0)}
//                     className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center group"
//                   >
//                     <span className="opacity-0 group-hover:opacity-100 bg-white text-amber-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2">
//                       <Eye size={20} />
//                       View Full Gallery
//                     </span>
//                   </button>
//                 </div>
//                 <div className="grid grid-cols-3 gap-2 p-4">
//                   {selectedProject.images.map((img, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => openLightbox(selectedProject.images, idx)}
//                       className="relative h-24 rounded-lg overflow-hidden hover:ring-2 ring-amber-500 transition-all"
//                     >
//                       <img src={img} alt="" className="w-full h-full object-cover" />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Description */}
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
//                 <p className="text-gray-700 leading-relaxed mb-4">{selectedProject.detailedDescription}</p>

//                 <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Specifications</h3>
//                 <ul className="space-y-2">
//                   {selectedProject.specifications.map((spec, idx) => (
//                     <li key={idx} className="flex items-start gap-2 text-gray-700">
//                       <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
//                       <span>{spec}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Client Testimonial */}
//               <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-md p-6 border-l-4 border-amber-500">
//                 <div className="flex items-center gap-2 mb-3">
//                   <Award className="text-amber-600" size={24} />
//                   <h3 className="text-xl font-bold text-gray-800">Client Testimonial</h3>
//                 </div>
//                 <div className="flex gap-1 mb-3">
//                   {[...Array(selectedProject.rating)].map((_, i) => (
//                     <Star key={i} size={18} className="fill-amber-500 text-amber-500" />
//                   ))}
//                 </div>
//                 <p className="text-gray-700 italic">"{selectedProject.testimonial}"</p>
//                 <p className="text-gray-600 mt-2 font-semibold">- {selectedProject.client}</p>
//               </div>
//             </div>

//             {/* Sidebar */}
//             <div className="space-y-6">
//               {/* Project Info Card */}
//               <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Project Details</h3>

//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <MapPin size={20} className="text-amber-600 flex-shrink-0 mt-1" />
//                     <div>
//                       <div className="text-xs text-gray-500 mb-1">Location</div>
//                       <div className="font-semibold text-gray-800">{selectedProject.location}</div>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <Calendar size={20} className="text-amber-600 flex-shrink-0 mt-1" />
//                     <div>
//                       <div className="text-xs text-gray-500 mb-1">Completed</div>
//                       <div className="font-semibold text-gray-800">{selectedProject.date}</div>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <Clock size={20} className="text-amber-600 flex-shrink-0 mt-1" />
//                     <div>
//                       <div className="text-xs text-gray-500 mb-1">Duration</div>
//                       <div className="font-semibold text-gray-800">{selectedProject.duration}</div>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <Hammer size={20} className="text-amber-600 flex-shrink-0 mt-1" />
//                     <div>
//                       <div className="text-xs text-gray-500 mb-1">Wood Type</div>
//                       <div className="font-semibold text-gray-800">{selectedProject.woodType}</div>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <Award size={20} className="text-amber-600 flex-shrink-0 mt-1" />
//                     <div>
//                       <div className="text-xs text-gray-500 mb-1">Quality Level</div>
//                       <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getQualityColor(selectedProject.quality)}`}>
//                         {selectedProject.quality}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <DollarSign size={20} className="text-amber-600 flex-shrink-0 mt-1" />
//                     <div>
//                       <div className="text-xs text-gray-500 mb-1">Cost Range</div>
//                       <div className="font-semibold text-gray-800">{selectedProject.costRate}</div>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <Users size={20} className="text-amber-600 flex-shrink-0 mt-1" />
//                     <div>
//                       <div className="text-xs text-gray-500 mb-1">Client</div>
//                       <div className="font-semibold text-gray-800">{selectedProject.client}</div>
//                     </div>
//                   </div>
//                 </div>

//                 <button className="w-full mt-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-md">
//                   Request Similar Project
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Lightbox
//           open={lightboxOpen}
//           close={() => setLightboxOpen(false)}
//           slides={currentProjectImages}
//           index={lightboxIndex}
//           plugins={[Zoom, Thumbnails]}
//           zoom={{
//             maxZoomPixelRatio: 3,
//             scrollToZoom: true
//           }}
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-amber-900 to-orange-800 text-white py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl font-bold mb-3">Our Portfolio</h1>
//           <p className="text-lg text-amber-100">
//             Expert craftsmanship and quality woodwork since 2015
//           </p>
//         </div>
//       </div>

//       {/* Stats Bar */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-amber-600">150+</div>
//               <div className="text-sm text-gray-600">Projects Completed</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-amber-600">98%</div>
//               <div className="text-sm text-gray-600">Client Satisfaction</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-amber-600">8+</div>
//               <div className="text-sm text-gray-600">Years Experience</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-amber-600">25+</div>
//               <div className="text-sm text-gray-600">Wood Varieties</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filter Tabs */}
//       <div className="sticky top-0 bg-white shadow-sm z-10 border-b">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex gap-2 overflow-x-auto">
//             {categories.map(cat => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveFilter(cat.id)}
//                 className={`px-5 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${activeFilter === cat.id
//                   ? 'bg-amber-600 text-white shadow-md'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//               >
//                 {cat.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Projects Grid */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProjects.map(project => (
//             <div
//               key={project.id}
//               className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group cursor-pointer"
//               onClick={() => setSelectedProject(project)}
//             >
//               {/* Image */}
//               <div className="relative h-48 bg-gray-200 overflow-hidden">
//                 <img
//                   src={project.images[0]}
//                   alt={project.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute top-2 right-2">
//                   <span className={`px-2 py-1 rounded-lg text-xs font-semibold border ${getQualityColor(project.quality)}`}>
//                     {project.quality}
//                   </span>
//                 </div>
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
//                   <span className="opacity-0 group-hover:opacity-100 bg-white text-amber-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
//                     <Eye size={16} />
//                     View Details
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-4">
//                 <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{project.title}</h3>

//                 <div className="flex items-center gap-1 mb-2">
//                   {[...Array(project.rating)].map((_, i) => (
//                     <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
//                   ))}
//                   <span className="text-xs text-gray-500 ml-1">({project.rating}.0)</span>
//                 </div>

//                 <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>

//                 <div className="space-y-2 text-xs">
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <MapPin size={14} className="text-amber-600" />
//                     <span className="line-clamp-1">{project.location}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2 text-gray-600">
//                       <Hammer size={14} className="text-amber-600" />
//                       <span>{project.woodType.split('&')[0].trim()}</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-gray-600">
//                       <DollarSign size={14} className="text-amber-600" />
//                       <span className="font-semibold">{project.costRate}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Trust Building Section */}
//       <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 mt-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-white rounded-xl p-6 shadow-md text-center">
//               <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Award className="text-amber-600" size={32} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Guaranteed</h3>
//               <p className="text-gray-600">Premium materials and expert craftsmanship on every project</p>
//             </div>
//             <div className="bg-white rounded-xl p-6 shadow-md text-center">
//               <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <CheckCircle className="text-amber-600" size={32} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">On-Time Delivery</h3>
//               <p className="text-gray-600">We respect your time and always meet deadlines</p>
//             </div>
//             <div className="bg-white rounded-xl p-6 shadow-md text-center">
//               <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Users className="text-amber-600" size={32} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Happy Clients</h3>
//               <p className="text-gray-600">98% satisfaction rate from over 150 completed projects</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="bg-gradient-to-r from-amber-800 to-orange-700 text-white py-12 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-3">Ready to Start Your Project?</h2>
//           <p className="text-lg text-amber-100 mb-6">
//             Get a free consultation and quote for your custom furniture needs
//           </p>
//           <button className="bg-white text-amber-800 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-50 transform hover:scale-105 transition-all shadow-lg">
//             Get Free Quote
//           </button>
//         </div>
//       </div>

//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         slides={currentProjectImages}
//         index={lightboxIndex}
//         plugins={[Zoom, Thumbnails]}
//         zoom={{
//           maxZoomPixelRatio: 3,
//           scrollToZoom: true
//         }}
//       />
//     </div>
//   );
// }
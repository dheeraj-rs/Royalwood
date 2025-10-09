'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Calendar, MapPin, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { GalleryHeader } from './GalleryHeader';
import { FilterBar } from './FilterBar';
import Footer from '@/components/Footer';
import SubHeader from '@/components/SubHeader';
// import './index.css';

interface Project {
    id: number;
    title: string;
    client: string;
    location: string;
    date: string;
    category: string;
    description: string;
    images: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Modern Living Room Suite',
        client: 'The Anderson Family',
        location: 'Beverly Hills, CA',
        date: 'September 2024',
        category: 'Residential',
        description: 'Complete custom furniture set featuring a handcrafted walnut entertainment center, matching coffee table, and bespoke shelving units. Designed to complement mid-century modern aesthetics.',
        images: [
            'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ]
    },
    {
        id: 2,
        title: 'Executive Office Collection',
        client: 'TechCorp HQ',
        location: 'San Francisco, CA',
        date: 'August 2024',
        category: 'Commercial',
        description: 'Premium executive desks and conference tables crafted from sustainable oak. Features include integrated cable management and custom dimensions for modern office spaces.',
        images: [
            'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/2451544/pexels-photo-2451544.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ]
    },
    {
        id: 3,
        title: 'Rustic Dining Experience',
        client: 'The Harvest Restaurant',
        location: 'Portland, OR',
        date: 'July 2024',
        category: 'Commercial',
        description: 'Farm-to-table dining furniture featuring reclaimed barn wood tables with live edges, custom bench seating, and vintage-inspired chairs. Perfect for creating an authentic rustic atmosphere.',
        images: [
            'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/6489086/pexels-photo-6489086.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ]
    },
    {
        id: 4,
        title: 'Minimalist Bedroom Set',
        client: 'Studio Apartment Project',
        location: 'New York, NY',
        date: 'June 2024',
        category: 'Residential',
        description: 'Space-efficient bedroom furniture with clean lines and hidden storage solutions. Platform bed with integrated nightstands and a floating wardrobe system.',
        images: [
            'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ]
    },
    {
        id: 5,
        title: 'Boutique Hotel Lobby',
        client: 'The Grand Vista Hotel',
        location: 'Miami, FL',
        date: 'May 2024',
        category: 'Hospitality',
        description: 'Luxurious lobby furniture including reception desk, lounge seating, and decorative console tables. Features exotic veneers and brass accents for a sophisticated tropical aesthetic.',
        images: [
            'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ]
    },
    {
        id: 6,
        title: 'Home Library & Study',
        client: 'Private Collector',
        location: 'Boston, MA',
        date: 'April 2024',
        category: 'Residential',
        description: 'Floor-to-ceiling custom bookcases in cherry wood with rolling library ladder. Includes a built-in reading nook and antique-inspired writing desk with leather inlay.',
        images: [
            'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ]
    },
];

export default function GalleryPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState<string>('All');

    const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const openLightbox = (project: Project, imageIndex: number) => {
        setSelectedProject(project);
        setPhotoIndex(imageIndex);
        setLightboxOpen(true);
    };

    const slides = selectedProject?.images.map(src => ({ src })) || [];

    return (
        <div className="min-h-screen bg-white">
            <SubHeader />
            <GalleryHeader />

            <FilterBar categories={categories} selectedCategory={filter} onCategoryChange={setFilter} />

            <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {filteredProjects.map((project) => (
                        <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-stone-200">
                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-stone-100">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    width={800}
                                    height={600}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4">
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            onClick={() => openLightbox(project, 0)}
                                            className="w-full text-xs sm:text-sm py-1.5 sm:py-2"
                                        >
                                            View Gallery ({project.images.length} photos)
                                        </Button>
                                    </div>
                                </div>
                                <Badge className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-white text-stone-900 hover:bg-white text-xs sm:text-sm">
                                    {project.category}
                                </Badge>
                            </div>

                            <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-stone-900 mb-2 sm:mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
                                    {project.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-stone-600 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-stone-500">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span className="truncate">{project.client}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span className="truncate">{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span>{project.date}</span>
                                    </div>
                                </div>

                                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-stone-200">
                                    <div className="flex gap-1.5 sm:gap-2">
                                        {project.images.slice(0, 3).map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => openLightbox(project, idx)}
                                                className="flex-1 h-12 sm:h-14 md:h-16 rounded-md overflow-hidden hover:ring-2 hover:ring-amber-500 transition-all active:scale-95"
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                    width={800}
                                                    height={600}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-8 sm:py-12">
                        <p className="text-stone-500 text-sm sm:text-base md:text-lg">No projects found in this category.</p>
                    </div>
                )}
            </main>

            <Footer />

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={slides}
                index={photoIndex}
                plugins={[Zoom, Thumbnails, Fullscreen, Slideshow]}
                on={{
                    view: ({ index }) => setPhotoIndex(index),
                }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    zoomInMultiplier: 2,
                    doubleTapDelay: 300,
                    doubleClickDelay: 300,
                    doubleClickMaxStops: 2,
                    keyboardMoveDistance: 50,
                    wheelZoomDistanceFactor: 100,
                    pinchZoomDistanceFactor: 100,
                    scrollToZoom: true,
                }}
                thumbnails={{
                    position: 'bottom',
                    width: 120,
                    height: 80,
                    border: 2,
                    borderRadius: 8,
                    padding: 0,
                    gap: 12,
                    imageFit: 'cover',
                    vignette: true,
                    showToggle: false,
                }}
                slideshow={{
                    autoplay: false,
                    delay: 3000,
                }}
                animation={{
                    fade: 250,
                    swipe: 250,
                }}
                carousel={{
                    finite: false,
                    preload: 2,
                    padding: '16px',
                    spacing: '30%',
                    imageFit: 'contain',
                }}
                render={{
                    buttonPrev: () => null,
                    buttonNext: () => null,
                }}
                controller={{
                    closeOnBackdropClick: true,
                    closeOnPullDown: true,
                    closeOnPullUp: false,
                }}
            />
        </div>
    );
}

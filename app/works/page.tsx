'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Calendar, MapPin, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { GalleryHeader } from './GalleryHeader';
import { FilterBar } from './FilterBar';
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
        <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50">
            <GalleryHeader />
            {/* <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-stone-900 tracking-tight">Artisan Furniture Gallery</h1>
                            <p className="text-stone-600 mt-1">Handcrafted Excellence Since 1995</p>
                        </div>
                        <Button variant="outline" className="hidden sm:flex items-center gap-2">
                            Get a Quote
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </header> */}

            <FilterBar categories={categories} selectedCategory={filter} onCategoryChange={setFilter} />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-stone-900 mb-4">Our Portfolio</h2>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Explore our collection of custom furniture projects, each piece meticulously crafted to bring our clients&apos; visions to life.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={filter === category ? 'default' : 'outline'}
                            onClick={() => setFilter(category)}
                            className="min-w-[120px]"
                        >
                            {category}
                        </Button>
                    ))}
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-stone-200">
                            <div className="relative h-64 overflow-hidden bg-stone-100">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    width={800}
                                    height={600}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            onClick={() => openLightbox(project, 0)}
                                            className="w-full"
                                        >
                                            View Gallery ({project.images.length} photos)
                                        </Button>
                                    </div>
                                </div>
                                <Badge className="absolute top-4 right-4 bg-white text-stone-900 hover:bg-white">
                                    {project.category}
                                </Badge>
                            </div>

                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-stone-600 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="space-y-2 text-sm text-stone-500">
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>{project.client}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{project.date}</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-stone-200">
                                    <div className="flex gap-2">
                                        {project.images.slice(0, 3).map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => openLightbox(project, idx)}
                                                className="flex-1 h-16 rounded-md overflow-hidden hover:ring-2 hover:ring-amber-500 transition-all"
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
                    <div className="text-center py-12">
                        <p className="text-stone-500 text-lg">No projects found in this category.</p>
                    </div>
                )}
            </main>

            <footer className="border-t bg-stone-900 text-stone-300 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Project?</h3>
                        <p className="text-stone-400 mb-6">Let&apos;s create something beautiful together.</p>
                        <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                            Contact Us Today
                        </Button>
                    </div>
                </div>
            </footer>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={slides}
                index={photoIndex}
                on={{
                    view: ({ index }) => setPhotoIndex(index),
                }}
            />
        </div>
    );
}

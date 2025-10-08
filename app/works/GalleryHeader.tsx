import { Armchair } from 'lucide-react';

export function GalleryHeader() {
    return (
        <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <Armchair className="w-12 h-12" />
                    <h1 className="text-5xl font-bold">Artisan Furniture Gallery</h1>
                </div>
                <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto">
                    Discover our portfolio of bespoke furniture creations. Each piece tells a story of craftsmanship,
                    quality materials, and timeless design tailored to our clients&apos; unique visions.
                </p>
            </div>
        </header>
    );
}

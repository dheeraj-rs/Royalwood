import { Crown } from 'lucide-react';

export function GalleryHeader() {
    return (
        <header className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzkyNDAwZCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
                <div className="text-center">
                    <div className="mb-4 sm:mb-6">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                            <Crown className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-amber-700 drop-shadow-lg" />
                            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-20 font-bold bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 bg-clip-text text-transparent drop-shadow-sm">
                                Royalwood
                            </h1>
                        </div>
                        <div className="inline-block px-4 py-1 bg-amber-800/10 rounded-full border border-amber-700/30">
                            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-900">
                                Since 1969
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 my-5 sm:my-7">
                        <div className="h-0.5 w-16 sm:w-20 bg-gradient-to-r from-transparent via-amber-700 to-amber-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-amber-700 rounded-full shadow-md"></div>
                        <div className="h-0.5 w-16 sm:w-20 bg-gradient-to-l from-transparent via-amber-700 to-amber-700 rounded-full"></div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-950 mb-4 sm:mb-5 tracking-tight leading-tight">
                            Previous Works Gallery
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-amber-900/80 max-w-2xl mx-auto leading-relaxed px-2 font-medium">
                            Explore our portfolio of bespoke furniture creations. Each piece showcases our commitment to quality craftsmanship and timeless design.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

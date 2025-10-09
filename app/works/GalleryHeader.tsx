import { Crown } from 'lucide-react';

export function GalleryHeader() {
    return (
        <header className="relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C4 50%, #D4C4B0 100%)',
        }}>
            {/* Wood grain texture overlay */}
            <div className="absolute inset-0 opacity-[0.08]" style={{
                backgroundImage: `
                    linear-gradient(90deg, transparent 0%, rgba(139, 90, 43, 0.1) 50%, transparent 100%),
                    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 90, 43, 0.03) 2px, rgba(139, 90, 43, 0.03) 4px)
                `,
                backgroundSize: '100% 100%, 100% 8px'
            }}></div>

            {/* Subtle wood knot pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(ellipse at 20% 30%, rgba(101, 67, 33, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(101, 67, 33, 0.15) 0%, transparent 50%)',
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14 pb-10 sm:pb-12 lg:pb-16">
                <div className="text-center">
                    {/* Brand Section */}
                    <div className="mb-4 sm:mb-5">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                            <Crown className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 drop-shadow-lg" style={{
                                color: '#8B5A2B',
                                filter: 'drop-shadow(0 2px 4px rgba(139, 90, 43, 0.3))'
                            }} />
                            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" style={{
                                fontFamily: 'var(--font-playfair)',
                                background: 'linear-gradient(135deg, #8B5A2B 0%, #A0522D 25%, #CD853F 50%, #8B5A2B 75%, #654321 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '2px 2px 4px rgba(139, 90, 43, 0.1)',
                                filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
                            }}>
                                Royalwood
                            </h1>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] uppercase" style={{
                            color: '#654321',
                            textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
                        }}>
                            Since 1969
                        </p>
                    </div>

                    {/* Decorative wood divider */}
                    <div className="flex items-center justify-center gap-3 sm:gap-4 my-5 sm:my-6">
                        <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{
                            background: 'linear-gradient(to right, transparent, #8B5A2B, transparent)',
                            boxShadow: '0 1px 2px rgba(139, 90, 43, 0.2)'
                        }}></div>
                        <div className="w-2 h-2 rounded-full" style={{
                            background: 'radial-gradient(circle, #CD853F, #8B5A2B)',
                            boxShadow: '0 2px 4px rgba(139, 90, 43, 0.3)'
                        }}></div>
                        <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{
                            background: 'linear-gradient(to left, transparent, #8B5A2B, transparent)',
                            boxShadow: '0 1px 2px rgba(139, 90, 43, 0.2)'
                        }}></div>
                    </div>

                    {/* Page Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-tight" style={{
                        color: '#3E2723',
                        textShadow: '0 1px 3px rgba(255, 255, 255, 0.5)'
                    }}>
                        Previous Works Gallery
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2 pb-2" style={{
                        color: '#5D4037',
                        textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)'
                    }}>
                        Explore our portfolio of bespoke furniture creations. Each piece showcases our commitment to quality craftsmanship and timeless design.
                    </p>
                </div>
            </div>

            {/* Bottom wood grain edge */}
            <div className="absolute bottom-0 left-0 right-0 h-1" style={{
                background: 'linear-gradient(to bottom, transparent, rgba(139, 90, 43, 0.15))'
            }}></div>
        </header>
    );
}

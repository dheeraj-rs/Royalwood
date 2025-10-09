import { Filter } from 'lucide-react';

interface FilterBarProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export function FilterBar({ categories, selectedCategory, onCategoryChange }: FilterBarProps) {
    return (
        <div className="sticky top-0 z-10 shadow-md" style={{
            background: 'linear-gradient(to bottom, #FAF3E0 0%, #F5E6D3 100%)',
            borderBottom: '2px solid rgba(139, 90, 43, 0.2)'
        }}>
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
                <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-1">
                    <div className="flex items-center gap-1.5 sm:gap-2 font-semibold whitespace-nowrap flex-shrink-0" style={{ color: '#654321' }}>
                        <Filter className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#8B5A2B' }} />
                        <span className="text-sm sm:text-base">Filter:</span>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2">
                        <button
                            onClick={() => onCategoryChange('All')}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                            style={selectedCategory === 'All' ? {
                                background: 'linear-gradient(135deg, #8B5A2B 0%, #A0522D 50%, #8B5A2B 100%)',
                                color: '#FFF8DC',
                                boxShadow: '0 2px 8px rgba(139, 90, 43, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                            } : {
                                background: 'linear-gradient(to bottom, #F5E6D3, #E8D5C4)',
                                color: '#654321',
                                border: '1px solid rgba(139, 90, 43, 0.3)',
                                boxShadow: '0 1px 3px rgba(139, 90, 43, 0.1)'
                            }}
                            onMouseEnter={(e) => {
                                if (selectedCategory !== 'All') {
                                    e.currentTarget.style.background = 'linear-gradient(to bottom, #E8D5C4, #D4C4B0)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectedCategory !== 'All') {
                                    e.currentTarget.style.background = 'linear-gradient(to bottom, #F5E6D3, #E8D5C4)';
                                }
                            }}
                        >
                            All Projects
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                                style={selectedCategory === category ? {
                                    background: 'linear-gradient(135deg, #8B5A2B 0%, #A0522D 50%, #8B5A2B 100%)',
                                    color: '#FFF8DC',
                                    boxShadow: '0 2px 8px rgba(139, 90, 43, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                                } : {
                                    background: 'linear-gradient(to bottom, #F5E6D3, #E8D5C4)',
                                    color: '#654321',
                                    border: '1px solid rgba(139, 90, 43, 0.3)',
                                    boxShadow: '0 1px 3px rgba(139, 90, 43, 0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedCategory !== category) {
                                        e.currentTarget.style.background = 'linear-gradient(to bottom, #E8D5C4, #D4C4B0)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedCategory !== category) {
                                        e.currentTarget.style.background = 'linear-gradient(to bottom, #F5E6D3, #E8D5C4)';
                                    }
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

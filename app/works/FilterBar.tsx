import { Filter } from 'lucide-react';

interface FilterBarProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export function FilterBar({ categories, selectedCategory, onCategoryChange }: FilterBarProps) {
    return (
        <div className="sticky top-0 z-10 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
                <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-1">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-700 font-medium whitespace-nowrap flex-shrink-0">
                        <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                        <span className="text-sm sm:text-base">Filter:</span>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2">
                        <button
                            onClick={() => onCategoryChange('All')}
                            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full cursor-pointer text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${selectedCategory === 'All'
                                ? 'bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 text-white shadow-md hover:opacity-90'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 border border-gray-300'
                                }`}
                        >
                            All Projects
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full cursor-pointer text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 text-white shadow-md hover:opacity-90'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 border border-gray-300'
                                    }`}
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

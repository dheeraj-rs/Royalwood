import { Filter } from 'lucide-react';

interface FilterBarProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export function FilterBar({ categories, selectedCategory, onCategoryChange }: FilterBarProps) {
    return (
        <div className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center gap-4 overflow-x-auto scroll-smooth scrollbar-hide">
                    <div className="flex items-center gap-2 text-slate-700 font-medium whitespace-nowrap">
                        <Filter className="w-5 h-5" />
                        <span>Filter by:</span>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onCategoryChange('All')}
                            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${selectedCategory === 'All'
                                ? 'bg-slate-900 text-white shadow-lg'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            All Projects
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${selectedCategory === category
                                    ? 'bg-slate-900 text-white shadow-lg'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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

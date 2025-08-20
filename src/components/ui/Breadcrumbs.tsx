import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  url: string;
  isActive: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (url: string) => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  onNavigate,
  className = ""
}) => {
  const handleClick = (url: string, isActive: boolean) => {
    if (!isActive && onNavigate) {
      onNavigate(url);
    }
  };

  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
          
          <div className="flex items-center">
            {index === 0 && (
              <Home className="w-4 h-4 mr-1 text-gray-400" />
            )}
            
            {item.isActive ? (
              <span className="text-gray-900 font-medium">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => handleClick(item.url, item.isActive)}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {item.label}
              </button>
            )}
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
};

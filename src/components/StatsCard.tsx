import type { LucideIcon } from 'lucide-react';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon?: LucideIcon;
    description?: string;
}

export default function StatsCard({ title, value, icon: Icon, description }: StatsCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
            {Icon && (
                <div className="p-3 bg-[#2b6765]/10 rounded-lg">
                    <Icon className="text-[#2b6765]" size={24} />
                </div>
            )}
            <div>
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
                {description && (
                    <p className="text-xs text-gray-400 mt-1">{description}</p>
                )}
            </div>
        </div>
    );
}

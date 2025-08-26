import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const TreatmentCard = ({ treatment }) => {
    return (
        <Card>
            <img
                src={treatment.imageUrl || 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
                alt={treatment.name}
                className="w-full h-48 object-cover"
                loading="lazy"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {treatment.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {treatment.summary}
                </p>
                <div className="flex items-center justify-between">
                    {treatment.duration && (
                        <span className="text-sm text-gray-500">
                            Süre: {treatment.duration}
                        </span>
                    )}
                    {treatment.slug && (
                        <Link
                            to={`/treatments/${treatment.slug}`}
                            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                            Detaylar →
                        </Link>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default TreatmentCard;

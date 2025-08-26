import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import parse from "html-react-parser"

const TeamCard = ({ member }) => {
    return (
        <Card>
            <img
                src={member.imageUrl || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
                alt={member.name}
                className="w-full h-64 object-cover"
                loading="lazy"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                    {member.title}
                </p>
                <div className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {parse(member.bio)}
                </div>
                {member.id && (
                    <Link
                        to={`/team/${member.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                        Detayları Görüntüle →
                    </Link>
                )}
            </div>
        </Card>
    );
};

export default TeamCard;

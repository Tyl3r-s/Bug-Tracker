import React from 'react';
import Card from '../../Components/Dashboard/card.jsx';

export default () => {
    return (
        <div className="page-container">
        <Card priority="1" count="10" />
        <Card priority="2" count="6" />
        <Card priority="3" count="7" />
        </div>
    )
}
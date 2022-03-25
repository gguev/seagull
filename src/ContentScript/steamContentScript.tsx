import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsContainer from '../components/ReviewsContainer/ReviewsContainer';
import ReviewsPreviewCard from '../components/ReviewsPreviewCard/ReviewsPreviewCard';

// inject ReviewsPreviewCard into DOM
const steamAvgUserRatings = document.getElementById('userReviews');
const root1 = document.createElement('div');
steamAvgUserRatings.appendChild(root1);
ReactDOM.render(<ReviewsPreviewCard />, root1);

// inject ReviewsContainer into DOM
const steamReviewSection = document.getElementById('app_reviews_hash');
const root2 = document.createElement('div');
steamReviewSection.insertAdjacentElement('beforebegin', root2);
ReactDOM.render(<ReviewsContainer />, root2);

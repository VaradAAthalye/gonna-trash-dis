import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './StoriesPage.css';

const MOCK_STORIES = [
  {
    artisanId: '1',
    name: 'Ramesh',
    craft: 'Block Printing',
    location: 'Jaipur',
    slides: [
      { id: 's1', type: 'image', src: '/artisans 1.jpg', text: 'Meet Ramesh, a master of Bagru Block Printing.' },
      { id: 's2', type: 'image', src: 'https://images.unsplash.com/photo-1583391733958-d1507001bb05?q=80&w=800&auto=format&fit=crop', text: 'Every block is carved by hand.' },
    ]
  },
  {
    artisanId: '2',
    name: 'Sita',
    craft: 'Terracotta',
    location: 'Bishnupur',
    slides: [
      { id: 's4', type: 'image', src: '/artisan 2.jpg', text: 'Sita has been molding clay for 15 years.' },
    ]
  },
  {
    artisanId: '3',
    name: 'Mohan',
    craft: 'Wood Carving',
    location: 'Saharanpur',
    slides: [
      { id: 's5', type: 'image', src: '/artisan3.jpg', text: 'Mohan carries a 200 year old wood carving legacy.' },
    ]
  },
  {
    artisanId: '4',
    name: 'Anjali',
    craft: 'Pattachitra',
    location: 'Puri',
    slides: [
      { id: 's6', type: 'image', src: '/artisan 4.jpg', text: 'Anjali paints divine stories with colors of the earth.' },
    ]
  }
];

const StoriesPage = () => {
  const navigate = useNavigate();
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const currentStory = MOCK_STORIES[activeStoryIdx];
  const currentSlide = currentStory.slides[activeSlideIdx];

  const nextSlide = () => {
    if (activeSlideIdx < currentStory.slides.length - 1) {
      setActiveSlideIdx(prev => prev + 1);
    } else if (activeStoryIdx < MOCK_STORIES.length - 1) {
      setActiveStoryIdx(prev => prev + 1);
      setActiveSlideIdx(0);
    } else {
      navigate('/'); // end of stories
    }
  };

  const prevSlide = () => {
    if (activeSlideIdx > 0) {
      setActiveSlideIdx(prev => prev - 1);
    } else if (activeStoryIdx > 0) {
      setActiveStoryIdx(prev => prev - 1);
      setActiveSlideIdx(MOCK_STORIES[activeStoryIdx - 1].slides.length - 1);
    }
  };

  return (
    <div className="stories-page">
      <div className="stories-container">
        {/* Progress Bars */}
        <div className="progress-container">
          {currentStory.slides.map((slide, idx) => (
            <div key={slide.id} className="progress-segment">
              <div 
                className="progress-fill" 
                style={{ 
                  width: idx < activeSlideIdx ? '100%' : idx === activeSlideIdx ? '50%' : '0%',
                  transition: 'width 0.3s'
                }} 
              />
            </div>
          ))}
        </div>

        {/* Header (Close) */}
        <div className="story-header">
          <div className="artisan-min-profile">
            <span className="story-artisan-name">{currentStory.name}</span>
            <span className="story-artisan-craft">{currentStory.craft} • {currentStory.location}</span>
          </div>
          <button className="close-btn" onClick={() => navigate('/')}>
            <X size={28} color="var(--text-main)" />
          </button>
        </div>

        {/* Story Content */}
        <div className="story-content-wrapper">
          <img src={currentSlide.src} alt="Story content" className="story-media animate-fade-in" key={currentSlide.id} />
          <div className="story-overlay"></div>
          
          <div className="story-text-container">
            <h2 className="story-text">{currentSlide.text}</h2>
          </div>

          {/* Navigation Tap Zones */}
          <div className="tap-zone left-zone" onClick={prevSlide}></div>
          <div className="tap-zone right-zone" onClick={nextSlide}></div>
        </div>

        {/* Bottom CTA */}
        <div className="story-footer">
          <button 
            className="btn-primary w-full"
            onClick={() => navigate(`/profile/${currentStory.artisanId}`)}
          >
            Visit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;


import React from 'react';

const Photography: React.FC = () => {
  const images = [
    'IMG_0063.jpg', 'IMG_1732.JPG', 'IMG_0225.JPG', 'IMG_0227.JPG', 
    'IMG_0231.JPG', 'IMG_0232.JPG', 'IMG_0237.jpg', 'IMG_8370.jpg', 
    'IMG_2787.JPG', 'IMG_8382.JPG', 'IMG_5329.JPG', 'IMG_4810.JPG', 
    'IMG_9351.JPG', 'IMG_9731.JPG', 'DSCF1291.jpg', 'IMG_8383.jpg'
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <header className="py-20 text-center">
        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4 block">The Gallery</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Photography</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Beyond proficiently using Adobe software for graphic creation, the lens is another way I express myself. I enjoy capturing every moment through my camera.
        </p>
      </header>

      <div className="masonry-grid">
        {images.map((img, i) => (
          <div key={i} className="masonry-item apple-transition group relative">
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-100">
              <img 
                src={`images/Photography/${img}`} 
                alt={`Photo ${i}`} 
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" 
                loading="lazy"
              />
            </div>
            {/* Minimal Caption on Hover */}
            <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/60 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-bold tracking-widest uppercase text-gray-900 pointer-events-none">
              Shot on {img.startsWith('DSCF') ? 'Fujifilm' : 'Canon'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;

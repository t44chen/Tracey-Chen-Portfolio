import React from 'react';

const Photography: React.FC = () => {
  const images = [
    'IMG_0063.jpg', 'IMG_1732.JPG', 'IMG_0225.JPG', 'IMG_0227.JPG', 
    'IMG_0231.JPG', 'IMG_0232.JPG', 'IMG_0237.jpg', 
    'IMG_2787.JPG', 'IMG_8382.JPG', 'IMG_5329.JPG', 'IMG_4810.JPG', 
    'IMG_9351.JPG', 'IMG_9731.JPG', 'DSCF1291.jpg', 'IMG_8383.jpg',
    'IMG_8688.JPG', 'IMG_8699.JPG', 'IMG_8370.jpg'
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <header className="py-20 text-center">
        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4 block">The Gallery</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Photography</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
          Beyond proficiently using Adobe software for graphic creation, the lens is another way I express myself. I enjoy capturing every moment through my camera.
        </p>
      </header>

      {/* Masonry Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid group relative">
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-gray-50">
              <img 
                src={`/Tracey-Chen-Portfolio/Photography/${img}`} 
                alt={`Photo ${i}`} 
                className="w-full h-auto block hover:scale-[1.03] transition-transform duration-1000" 
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>
          </div>
        ))}
      </div>
      
      {/* 底部部分：保留图片和文字，删除了标题 */}
      <div className="mt-32 border-t border-gray-100 pt-20">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* 左侧：图片 IMG_8051.jpg */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
            <img 
              src="/Tracey-Chen-Portfolio/Photography/IMG_8051.jpg" 
              alt="Photography philosophy" 
              className="relative w-full h-auto rounded-3xl shadow-lg object-cover transform transition-transform duration-500"
            />
          </div>

          {/* 右侧：纯文案，已移除标题 */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              Photography is my medium for documenting the world. I am particularly drawn to the telephoto perspective, using it to capture everything from the moon to natural landscapes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              For me, these are not just images, but treasured memories.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Photography;

import React from 'react';

const Photography: React.FC = () => {
  const images = [
    'IMG_0063.jpg', 'IMG_1732.JPG', 'IMG_0225.JPG', 'IMG_0227.JPG', 
    'IMG_0231.JPG', 'IMG_0232.JPG', 'IMG_0237.jpg', 'IMG_8370.jpg', 
    'IMG_2787.JPG', 'IMG_8382.JPG', 'IMG_5329.JPG', 'IMG_4810.JPG', 
    'IMG_9351.JPG', 'IMG_9731.JPG', 'DSCF1291.jpg', 'IMG_8383.jpg',
    'IMG_8688.JPG', 'IMG_8699.JPG'
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

      {/* Masonry Layout Implementation:
        columns-1: 手机端单列
        md:columns-2: 平板端双列
        lg:columns-3: 电脑端三列
        gap-8: 列与列之间的间距
        space-y-8: 同一列中图片之间的垂直间距
      */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((img, i) => (
          // break-inside-avoid 是关键，防止图片被分割在两列之间
          <div key={i} className="break-inside-avoid group relative">
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-gray-50">
              <img 
                src={`/Tracey-Chen-Portfolio/Photography/${img}`} 
                alt={`Photo ${i}`} 
                // w-full h-auto 确保宽度填满列，高度自适应（保持原始比例）
                className="w-full h-auto block hover:scale-[1.03] transition-transform duration-1000" 
                loading="lazy"
              />
              
              {/* Overlay: 鼠标悬停时显示的渐变遮罩 */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Minimal Caption on Hover */}
            <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center pointer-events-none">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-900">
                  {img.toUpperCase().startsWith('DSCF') ? 'Fujifilm' : 'Canon'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer hint */}
      <div className="mt-20 text-center border-t border-gray-100 pt-10">
        <p className="text-gray-400 font-light text-sm">
          More moments captured on my journey.
        </p>
      </div>
    </div>
  );
};

export default Photography;


import { Image } from "./image";

export function DynamicGallery() {
  // Import all images from assets directory
  const images = import.meta.glob('@/assets/*.{png,jpg,jpeg,gif}', { eager: true });
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(images).map(([path, image]: [string, any]) => (
        <Image
          key={path}
          src={image.default}
          alt={path.split('/').pop()?.split('.')[0] ?? ''}
          className="w-full h-64 object-cover"
        />
      ))}
    </div>
  );
}

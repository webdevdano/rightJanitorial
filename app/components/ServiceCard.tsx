import React from 'react'
import Image from 'next/image'

function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl shadow-md text-center pt-9 pb-6 px-4 flex flex-col items-center">
      <Image className="mb-4" src={icon} alt={title} width={48} height={48} />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700 text-base">{desc}</p>
    </div>
  );
}
export default ServiceCard;

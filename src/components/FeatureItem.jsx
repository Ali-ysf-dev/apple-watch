function FeatureItem({ title, description }) {
  return (
    <div className="animate-in flex items-start gap-4">
      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0" aria-hidden />
      <div>
        <p className="text-black font-medium mb-1">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;

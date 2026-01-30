import { forwardRef } from "react";

const ContentCard = forwardRef(function ContentCard({ children, contentOnLeft = true, className = "", style }, ref) {
  const orderClass = contentOnLeft ? "" : "order-1";
  return (
    <div
      ref={ref}
      className={`content-shadow w-[50%] p-8 lg:p-12 xl:p-16 flex flex-col justify-center space-y-8 rounded-2xl mx-4 ${orderClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
});

export default ContentCard;

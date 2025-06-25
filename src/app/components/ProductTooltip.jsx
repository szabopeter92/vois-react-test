"use client";
import { useEffect, useRef, useState } from "react";

export default function ProductTooltip({ product }) {
  const tooltipRef = useRef(null);
  const [alignLeft, setAlignLeft] = useState(false);

  useEffect(() => {
    const tooltip = tooltipRef.current;
    if (tooltip) {
      const rect = tooltip.getBoundingClientRect();
      const shouldAlignLeft = rect.right > window.innerWidth;
      if (rect.right > window.innerWidth) {
        setAlignLeft(shouldAlignLeft);
      } else {
        setAlignLeft(false);
      }
    }
  }, [product]);

  return (
    <div ref={tooltipRef}
      className={`absolute bg-amber-100 p-3 shadow-lg border rounded w-100 z-50 top-12 ${
        alignLeft ? "right-1.5" : "left-0"
      } flex flex-col md:flex-row`}>
      <div>
        <img src={product.image} alt={product.name} className="mb-2 w-sm" />
      </div>
      <div>
        <h4 className="font-bold mb-1">Description</h4>
        <p>{product.description}</p>
        <h5 className="font-bold mt-2">Key Features</h5>
        <ul className="text-sm list-disc pl-5">
            {product.features.map((f, idx) => (
            <li key={idx}>{f}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

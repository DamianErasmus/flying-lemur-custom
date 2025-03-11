import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({
  title,
  price,
  features,
  isPopular = false,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg ${
        isPopular ? "border-2 border-lapis relative" : "border border-gray-200"
      }`}
    >
      {isPopular && (
        <div className="bg-lapis text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check
                size={20}
                className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
              />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="text-center mt-auto">
          <div className="text-3xl font-bold text-lapis mb-2">{price}</div>
          <div className="text-sm text-gray-500">per project</div>
        </div>
      </div>
    </div>
  );
}

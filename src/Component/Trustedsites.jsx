import React from "react";
import { Music, Mic2, Trophy, Palette, UtensilsCrossed } from "lucide-react";

const Trustedsites = () => {
  const categories = [
    { name: "Music", icon: Music },
    { name: "Conferences", icon: Mic2 },
    { name: "Sports", icon: Trophy },
    { name: "Arts", icon: Palette },
    { name: "Food & Drink", icon: UtensilsCrossed },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-6 pt-15">
      <div className="flex justify-center">
        <p className="text-[#2B7FFF] text-[13px] lg:text-[18px] font-medium">
          Explore events across popular categories
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee flex justify-center lg:gap-13 gap-5 pb-6">
          {categories.map(({ name, icon: Icon }, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center gap-2 lg:gap-3 py-8 px-4 text-slate-600"
            >
              <Icon className="h-6 w-6 text-[#2B7FFF]" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trustedsites;

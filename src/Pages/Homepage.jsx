import React, { useState } from "react";
import Navbar from "../Component/Navbar.jsx";
import Herosection from "../Component/Herosection.jsx";
import Category from "../Component/Category.jsx";
import Createevent from "../Component/Createevent.jsx";
import Trustedsites from "../Component/Trustedsites.jsx";
import Footer from "../Component/Footer.jsx";
import Cards from "../Component/Cards.jsx";
import Email from "../Component/Email.jsx";
import { eventsData } from "../Component/EventsDatas.jsx";
import Categorymap from "../Component/Categorymap.jsx";
import { CategoryData } from "../Component/CategoriesData.jsx";

const Homepage = () => {
  const [search, setSearch] = useState("");

  const searchFilter = eventsData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto lg:pt-15 pt-21 md:pt-25">
      <Navbar />
      <Herosection
        search={search}
        setSearch={setSearch}
        eventsData={eventsData}
      />
      <h3 className="font-extrabold text-[20px] px-5 pb-3  pt-11">
        Popular Events
      </h3>
      <Cards events={searchFilter} limit={6} />
      <Category />
      <Trustedsites />
      <Categorymap data={CategoryData} limit={4} />
      <Createevent />

      <Cards events={eventsData} limit={3} />

      <Email />

      <Footer />
    </div>
  );
};

export default Homepage;

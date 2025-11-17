import React, { useState } from "react";
import DevItems from "./DevItems";
// Mobile icons
import mob1 from "../../assets/mob1.png";
import mob2 from "../../assets/mob2.png";
import mob3 from "../../assets/mob3.png";
import mob4 from "../../assets/mob4.png";
import mob5 from "../../assets/mob5.png";
import mob6 from "../../assets/mob6.png";
import mob7 from "../../assets/mob7.png";
import mob8 from "../../assets/mob8.png";
import mob9 from "../../assets/mob9.png";
import mob10 from "../../assets/mob10.png";
import mob11 from "../../assets/mob11.png";
// front end icons
import front1 from "../../assets/front1.png";
import front2 from "../../assets/front2.png";
import front3 from "../../assets/front3.png";
import front4 from "../../assets/front4.png";
import front5 from "../../assets/front5.png";
import front6 from "../../assets/front6.png";
// Database icons
import data1 from "../../assets/data1.png";
import data2 from "../../assets/data2.png";
import data3 from "../../assets/data3.png";
import data4 from "../../assets/data4.png";
import data5 from "../../assets/data5.png";
import data6 from "../../assets/data6.png";
import data7 from "../../assets/data7.png";
import data8 from "../../assets/data8.png";
import data9 from "../../assets/data9.png";
import data10 from "../../assets/data10.png";
// Backend Icons
import back from "../../assets/back.png";
import back1 from "../../assets/back1.png";
import back4 from "../../assets/back4.png";
import back5 from "../../assets/back5.png";
import back6 from "../../assets/back6.png";
// CMS icons
import cms1 from "../../assets/cms1.png";
import cms2 from "../../assets/cms2.png";
import cms3 from "../../assets/cms3.png";
import cms4 from "../../assets/cms4.png";
import cms5 from "../../assets/cms5.png";
// DevOps Icons
import ops1 from "../../assets/ops1.png";
import ops2 from "../../assets/ops2.png";
import ops3 from "../../assets/ops3.png";
import ops4 from "../../assets/ops4.png";
import ops5 from "../../assets/ops5.png";
const Dev = () => {
  const [activeTab, setActiveTab] = useState("Mobile");
  return (
    <div className="mt-16 sm:mt-20 md:mt-25 items-center flex flex-col px-2 sm:px-4">
      <h5 className="uppercase text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center px-2">build your apps for any platform</h5>
      <div className="mt-4 sm:mt-6 w-full items-center max-w-[1400px]">
        <ul className="border-b border-zinc-700 px-2 sm:px-4 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 flex flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 justify-center">
          <li className="relative" onClick={() => setActiveTab("Mobile")}>
            <div
              className={`rounded-full px-6 py-[0.6rem] cursor-pointer transition-all duration-300 group border
      ${activeTab === "Mobile" ? "bg-gradient-to-r from-[#58a6ff] to-[#238636] border-[#58a6ff]" : "bg-transparent border-[#30363d] hover:border-[#58a6ff]/50"}`}
            >
              <span
                className={`block text-md uppercase transition-all duration-300
        ${activeTab === "Mobile" ? "text-white" : "text-white"}`}
              >
                Mobile
              </span>
            </div>
          </li>
          <li className="relative" onClick={() => setActiveTab("Front End")}>
            <div
              className={`rounded-full px-6 py-[0.6rem] cursor-pointer transition-all duration-300 group border
      ${activeTab === "Front End" ? "bg-gradient-to-r from-[#58a6ff] to-[#238636] border-[#58a6ff]" : "bg-transparent border-[#30363d] hover:border-[#58a6ff]/50"}`}
            >
              <span
                className={`block text-md uppercase transition-all duration-300
        ${activeTab === "Front End" ? "text-white" : "text-white"}`}
              >
                Front End
              </span>
            </div>
          </li>
          <li className="relative" onClick={() => setActiveTab("Database")}>
            <div
              className={`rounded-full px-6 py-[0.6rem] cursor-pointer transition-all duration-300 group border
      ${activeTab === "Database" ? "bg-gradient-to-r from-[#58a6ff] to-[#238636] border-[#58a6ff]" : "bg-transparent border-[#30363d] hover:border-[#58a6ff]/50"}`}
            >
              <span
                className={`block text-md uppercase transition-all duration-300
        ${activeTab === "Database" ? "text-white" : "text-white"}`}
              >
                Database
              </span>
            </div>
          </li>
          <li className="relative" onClick={() => setActiveTab("BackEnd")}>
            <div
              className={`rounded-full px-6 py-[0.6rem] cursor-pointer transition-all duration-300 group border
      ${activeTab === "BackEnd" ? "bg-gradient-to-r from-[#58a6ff] to-[#238636] border-[#58a6ff]" : "bg-transparent border-[#30363d] hover:border-[#58a6ff]/50"}`}
            >
              <span
                className={`block text-md uppercase transition-all duration-300
        ${activeTab === "BackEnd" ? "text-white" : "text-white"}`}
              >
                Backend
              </span>
            </div>
          </li>
          <li className="relative" onClick={() => setActiveTab("CMS")}>
            <div
              className={`rounded-full px-6 py-[0.6rem] cursor-pointer transition-all duration-300 group border
      ${activeTab === "CMS" ? "bg-gradient-to-r from-[#58a6ff] to-[#238636] border-[#58a6ff]" : "bg-transparent border-[#30363d] hover:border-[#58a6ff]/50"}`}
            >
              <span
                className={`block text-md uppercase transition-all duration-300
        ${activeTab === "CMS" ? "text-white" : "text-white"}`}
              >
                CMS
              </span>
            </div>
          </li>
          <li className="relative" onClick={() => setActiveTab("ops")}>
            <div
              className={`rounded-full px-6 py-[0.6rem] cursor-pointer transition-all duration-300 group border
      ${activeTab === "ops" ? "bg-gradient-to-r from-[#58a6ff] to-[#238636] border-[#58a6ff]" : "bg-transparent border-[#30363d] hover:border-[#58a6ff]/50"}`}
            >
              <span
                className={`block text-md transition-all duration-300
        ${activeTab === "ops" ? "text-white" : "text-white"}`}
              >
                Infra and DevOps
              </span>
            </div>
          </li>
        </ul>
      </div>
      {/* yaha nichy saray icons ayengy */}
      <div>
        {activeTab === "Mobile" && (
          <div className="mt-13 flex flex-wrap gap-13 sm:gap-15 lg:w-[75rem] sm:px-10 justify-center">
            <DevItems icons={mob1} name="android" />
            <DevItems icons={mob2} name="iOS" />
            <DevItems icons={mob3} name="react native" />
            <DevItems icons={mob4} name="flutter" />
            <DevItems icons={mob5} name="ionic" />
            <DevItems icons={mob6} name="kotlin" />
            <DevItems icons={mob7} name="swift" />
            <DevItems icons={mob8} name="objectiveC" />
            <DevItems icons={mob9} name="titanium" />
            <DevItems icons={mob10} name="phone gap" />
            <DevItems icons={mob11} name="xamarin" />
          </div>
        )}

        {activeTab === "Front End" && (
          <div className="mt-13 flex flex-wrap gap-13 sm:gap-15 sm:px-10 justify-center">
            <DevItems icons={front1} name="angular js" />
            <DevItems icons={front2} name="react.js" />
            <DevItems icons={front3} name="typescript" />
            <DevItems icons={front4} name="vue" />
            <DevItems icons={front5} name="WPF" />
            <DevItems icons={front6} name="HTML5" />
          </div>
        )}
        {activeTab === "Database" && (
          <div className="mt-13 flex flex-wrap gap-13 sm:gap-15 sm:px-10 justify-center">
            <DevItems icons={data1} name="Mongo DB" />
            <DevItems icons={data2} name="mySQL" />
            <DevItems icons={data3} name="MsSQL" />
            <DevItems icons={data4} name="Firebase" />
            <DevItems icons={data5} name="Realm" />
            <DevItems icons={data6} name="DynamoDB" />
            <DevItems icons={data7} name="Oracle" />
            <DevItems icons={data8} name="PostgreSQL" />
            <DevItems icons={data9} name="Redis" />
          </div>
        )}
        {activeTab === "BackEnd" && (
          <div className="mt-13 flex flex-wrap gap-13 sm:gap-15 sm:px-10 justify-center">
            <DevItems icons={back} name="PHP" />
            <DevItems icons={back1} name="Java" />
            <DevItems icons={back4} name="Node.js" />
            <DevItems icons={back5} name="Rails" />
            <DevItems icons={back6} name="Python" />
          </div>
        )}
        {activeTab === "CMS" && (
          <div className="mt-13 flex flex-wrap gap-13 sm:gap-15 sm:px-10 justify-center">
            <DevItems icons={cms1} name="Drupal" />
            <DevItems icons={cms2} name="Joomla" />
            <DevItems icons={cms3} name="Wordpress" />
            <DevItems icons={cms4} name="Magento" />
            <DevItems icons={cms5} name="Shopify" />
          </div>
        )}
        {activeTab === "ops" && (
          <div className="mt-13 flex flex-wrap gap-13 sm:gap-15 sm:px-10 justify-center">
            <DevItems icons={ops1} name="AWS" />
            <DevItems icons={ops2} name="Google Cloud" />
            <DevItems icons={ops3} name="Gradle" />
            <DevItems icons={ops4} name="Jenkins" />
            <DevItems icons={ops5} name="Appium" />
          </div>
        )}
      </div>
      <div className="mt-18 flex flex-col lg:w-full lg:justify-center gap-10 md:flex-row md:gap-30 lg:gap-20 ">
        <div className="flex flex-col gap-15 md:justify-between lg:flex-row lg:gap-20">
            <div className="flex flex-col items-center ">
                <h1 className="text-[3.2em] lg:text-[3.5rem] font-semibold">50 +</h1>
                <h6 className="text-lg lg:text-xl">Engineers</h6>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-[3.2rem] lg:text-[3.5rem] font-semibold">309+</h1>
                <h6 className="text-lg lg:text-xl">Project Delivered to Clients</h6>
            </div>
        </div>
        <div className="flex flex-col gap-15 md:justify-between lg:flex-row lg:gap-20">
            <div className="flex flex-col items-center">
                <h1 className="text-[3.2rem] lg:text-[3.5rem] font-semibold">655 +</h1>
                <h6 className="text-lg lg:text-xl">Customers worldwide</h6>
            </div>
            <div className="bg-black px-6 py-7 -skew-x-12 hover:skew-x-22 hover:bg-[#ff6b35] transition-all duration-300 group lg:items-center lg:flex">
                <h2 className="text-white text-2xl skew-x-12 will-change-transform leading-none group-hover:-skew-x-22 transition-all duration-300">Inspired By Our Vision</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dev;

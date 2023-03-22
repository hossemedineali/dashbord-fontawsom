import { type NextPage } from "next";
import Head from "next/head";

import { useRef } from "react";
import { useSlideMenuToggle } from "@/store/useMenu";
import { HomeSvg, MenuSvg ,FlagSvg,ChartPieSvg,EmailSvg,ImagesSvg,CelendatSvg,UserSvg,SettingSvg,TeamSvg,Payments } from "@/components/svgs/svgs";

const Home: NextPage = () => {
const {colapsedMenu}=useSlideMenuToggle()

console.log(colapsedMenu)
  
  const x=[HomeSvg ,FlagSvg,ChartPieSvg,EmailSvg,ImagesSvg,CelendatSvg,UserSvg,SettingSvg,TeamSvg,Payments]
  const text=['Home','Flag','Charts','Inbox','Galery','Calendar','Account','Setting','Team','Payment']

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <main className=" flex w-full  ">
      <div    className={` ${colapsedMenu=="leftMenu"?"w-44 ":"w-0 md:w-16"} flex flex-col gap-10  pt-10 transition-all duration-100 ease-in-out  overflow-hidden  min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-104px)] max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-104px)]  overflow-y-auto bg-[#ebebeb]`}>
         {x.map((item,index)=>{
          return  <div key={index} className="  gap-5 text-2xl flex  bg-white border hover:scale-105 hover:cursor-pointer ">
         {  index==0&& <div>
             <HomeSvg/>
            </div>}
         {  index==1&& <div>
             <FlagSvg/>
            </div>}
         {  index==2&& <div>
             <ChartPieSvg/>
            </div>}
         {  index==3&& <div>
             <EmailSvg/>
            </div>}
         {  index==4&& <div>
             <ImagesSvg/>
            </div>}
         {  index==5&& <div>
             <CelendatSvg/>
            </div>}
         {  index==6&& <div>
             <UserSvg/>
            </div>}
         {  index==7&& <div>
             <SettingSvg/>
            </div>}
         {  index==8&& <div>
             <TeamSvg/>
            </div>}
         {  index==9&& <div>
             <Payments/>
            </div>}
        
         <p className="text-xl ">{text[index]}</p>
        </div>
              
         }) }
      </div>


      <div className=' flex-grow min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-104px)] max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-104px)]'>

      </div>
      
      
      <div className="md:w-16 w-12 flex flex-col   min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-104px)] max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-104px)] bg-[#ebebeb]">
         <div className="flex md:w-10 w-8 mx-auto md:py-10 py-2  h-full  border flex-col">
            <MenuSvg/>
         </div>
      </div>
  </main>
    </>
  );
};

export default Home;
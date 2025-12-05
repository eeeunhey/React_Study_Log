import { ChartNoAxesCombined, ChevronDown, CodeXml, DraftingCompass, Footprints, Goal, Lightbulb, List, Rocket } from "lucide-react";
import { AppFooter, AppHeader } from "./components/common";
import { ThemeProvider } from "./components/theme-providar";
import { Button } from "./components/ui";

const CLASS_CATEGORY =[
  {id: 1 ,label:"전체" ,category:"", icon:<List />},
  {id: 2 ,label:"인문학" ,category:"humanity", icon:<Lightbulb />},
  {id: 3 ,label:"스타트업" ,category:"start-up", icon:<Rocket />},
  {id: 4 ,label:"IT 프로그램" ,category:"programing", icon:<CodeXml />},
  {id: 5 ,label:"서비스 전략 기획" ,category:"planning", icon:<Goal />},
  {id: 6 ,label:"마케팅" ,category:"marketing", icon:<ChartNoAxesCombined />},
  {id: 7 ,label:"디자인 일러스트" ,category:"design", icon:<DraftingCompass />},
  {id: 8 ,label:"자기계발" ,category:"self-development", icon:<Footprints />},


]

const App = () => { 
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container">
        <main className="w-full h-full min-w-[720px] flex p-6 gap-6">
        <aside className="min-w-60 w-60 flex flex-col gap-6">
          <div className="flex items-center gap-2" >
            <h4 className="scroll-m-20 text-xl text-semibold tracking-tight">
              카테고리
            </h4>
            <ChevronDown className="mt-2"/>
          </div>
        </aside>
        <div className="w-full h-full flex flex-col gap-2 ">
          {CLASS_CATEGORY.map((menu)=>{
            return(
              <Button key={menu.id} variant="ghost">
                {menu.icon}
                {menu.label}
              </Button>
            )
          })}
        </div>
        </main>

        </div>
        <AppFooter />
      </div>
    </ThemeProvider>
  );
};

export default App;

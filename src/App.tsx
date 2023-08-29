import Header from "@/components/Header/Header";
import Text from "@/components/Text/Text";
import Link from "@/components/Link/Link";
import Navigation from '@/components/Navigation';
import { useSessionStorage } from './components/hooks/useSessionStorage';
import { Router } from './interface/props';
import { v4 } from "uuid"

const initalState:Router[]=[{id:v4(),title:"Home"}]

export default function App() {
  const [router,setState]=useSessionStorage({key:"router",initalState})

  const handleRouterPushState=(title:string)=>{
    
    setState((prev:Router[])=>[...prev,{title,id:v4()}])
  }

  const handleRouterGo=(tempId:string)=>{
    const idx=router.findIndex((item:Router)=>item.id===tempId);
    setState((prev:Router[])=>[...prev.slice(0,idx)])
  }

  const handleRouterBack=()=>{
    setState((prev:Router[])=>[...prev.slice(0,prev.length-1)])
  }

  return (
    <>
      <Header backgroundColor="gray">
            <div>
            {router.length > 1 && 
            (
              <Link onClick={handleRouterBack}>
                  <>
                  <span className="material-symbols-outlined">
                    arrow_back_ios
                  </span>
                  <Text block={true} size="1.5rem" color="white">{router[router.length-1].title}</Text>
                  </>
              </Link>
            )
            }
            </div>
          <Text block={true} size="1.5rem" color="white">
            Home
          </Text>
            <ul style={{overflowY:"scroll"}}>
            {router.length >1 && 
              router.map(({id,title}:Router)=>
              <li key={id}>
                <Link onClick={()=>handleRouterGo(id)} color="black"  >{title}</Link>
              </li>
              )
            }
            </ul>
      </Header>
      <Navigation router={router[router.length-1]} handleRouterPushState={(title:string)=>handleRouterPushState(title)}/>
    </> 
  );
}


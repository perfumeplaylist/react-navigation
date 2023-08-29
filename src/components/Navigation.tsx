import HomePage from '@/page/HomePage';
import DetailPage from '@/page/DetailPage';
import { Router } from '@/interface/props';

export default function Navigation({router,handleRouterPushState}:{router:Router,handleRouterPushState:()=>void}) {
    const page={
        home:(
            <HomePage handleRouterPushState={(title:string)=>handleRouterPushState(title)}/>
        ),
        Detail:(
            <DetailPage />
        )
    }
    return (
        <main>
            {page[router.title] ?? <HomePage handleRouterPushState={(title:string)=>handleRouterPushState(title)}/>}
        </main>
    );
}


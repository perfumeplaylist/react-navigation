import {useContext} from "react";
import { RouterContext } from '@/components/hooks/useRouterContext';
import { Router } from '@/interface/props';
import Link from '@/components/Link/Link';

export default function List() {
    const {router,handleRouter}=useContext(RouterContext);

    return (
        <ul style={{overflowY:"scroll"}}>
          {router.map(({id,title}:Router)=>
            <li key={id}>
                <Link onClick={()=>handleRouter({type:"go",action:{tempId:id}})} color="black">
                    {title}
                </Link>
            </li>
          )}
        </ul>
    );
}


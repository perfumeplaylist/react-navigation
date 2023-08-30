import { useContext } from 'react';
import { RouterContext } from '@/components/hooks/useRouterContext';
import Link from '@/components/Link/Link';
import Text from "@/components/Text/Text";

export default function HomePage() {
    const {handleRouter}=useContext(RouterContext);
    return (
        <section>
            <Link onClick={()=>handleRouter({type:'pushState',action:{title:'Home'}})}>Go To Home</Link>
            <Link onClick={()=>handleRouter({type:'pushState',action:{title:'Detail'}})}>Go To Detail</Link>
            <Text block={true} size="4rem" color="black">Home</Text>
        </section>
    );
}


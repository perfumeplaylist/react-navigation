import Link from '@/components/Link/Link';
import Text from "@/components/Text/Text";

export default function HomePage({handleRouterPushState}:{handleRouterPushState:(vule:string)=>void}) {
    return (
        <section>
            <Link onClick={()=>handleRouterPushState('home')}>Go To Home</Link>
            <Link onClick={()=>handleRouterPushState("Detail")}>Go To Detail</Link>
            <Text block={true} size="4rem" color="black">Home</Text>
        </section>
    );
}


import { RouterContextProvider } from '@/components/hooks/useRouterContext';
import Header from "@/components/Header/Header";
import Navigation from '@/components/Navigation/Navigation.tsx';


export default function App() {

  return (
      <RouterContextProvider>
        <Header backgroundColor="gray"/>         
        <Navigation /> 
      </RouterContextProvider>
  );
}


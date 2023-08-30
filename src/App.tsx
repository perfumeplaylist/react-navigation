import { RouterContextProvider } from '@/components/hooks/useRouterContext';
import Header from "@/components/Header/Header";
import Navigation from '@/components/Navigation/Navigation.tsx';
import classes from "@/App.module.css";

export default function App() {

  return (
      <RouterContextProvider>
        <div className={`${classes.container} ${classes.center}`}>
        <Header backgroundColor="gray"/>         
        <Navigation /> 
        </div>
      </RouterContextProvider>
  );
}


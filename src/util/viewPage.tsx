import HomePage from '@/page/HomePage.tsx'
import DetailPage from '@/page/DetailPage.tsx'


export const viewPage=(title:string)=>{
    const page={
        home:(
            <HomePage />
        ),
        Detail:(
            <DetailPage />
        )
    }
    return page[title]
}
import MainNavigation from "../components/MainNavigation"
import PageContent from "../components/UI/PageContent"


const ErrorPage = () =>{
  return (
    <>
      <MainNavigation />
      <PageContent title="Error occured">
        Something is wrong
      </PageContent>
    </>
  )
}
export default ErrorPage
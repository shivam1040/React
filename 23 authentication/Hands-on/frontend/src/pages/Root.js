import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getDuration } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();
  //not using rootloaderdata since we are already in root
  const token=useLoaderData()
  const submit=useSubmit()
  //way to automatically logout after an hour but suboptimal if somebody refreshes the page
  //apt way is to use expiration state in form of date time when token is first created
  useEffect(()=>{
    if(!token)
      return
    if(token==="EXPIRED"){
      submit(null, {action:"/logout", method:"post"})
      return
    }
    setTimeout(()=>{
      submit(null, {action:"/logout", method:"post"})
    }, getDuration)
  }, [token, submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

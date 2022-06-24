import React, { useState } from 'react';

import { Footer } from '~/features/Footer';
import { Header } from '~/features/Header';
import { Auth } from '~/features/Login';
import { Search } from '~/features/Search';
import { SocialServices } from '~/features/SocialServices';
import { PageTemplate } from '~/ui/templates';


export const RootPage: React.FC = () => {

  const [user, setUser] = useState(false);

  if(!user){
    return <Auth setUser={setUser} />;
  }
  return <SocialServices setUser={setUser}/>; 
  // <PageTemplate
  //   content={<Search />}
  //   footer={<Footer />}
  //   header={<Header />}
  // />;
  
 
};




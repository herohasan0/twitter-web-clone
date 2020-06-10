import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

import CONST from '../constants';
import Layout from '../components/layout';

import Main from '../components/col-main';
import Sidebar from '../components/col-sidebar';
import Extra from '../components/col-extra';

function HomePage() {
  const size = useWindowSize();

  console.log(size);

  return (
    <Layout>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE} className="">
        sidebar
      </Sidebar>
      <Main className="">main</Main>
      {size.width > CONST.TABLET_SIZE && <Extra className="">extra</Extra>}
    </Layout>
  );
}

export default HomePage;

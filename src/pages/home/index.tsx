import React from 'react';
import Banner from './banner';
import MainCard from './main-card';
import ProjectManagement from './project-manage';
import CodeHosting from './code-hosting';
import TestManage from './test-manage';
import CiCd from './ci-cd';
import Monitor from './monitor';
import LogAnalysis from './log-analysis';
import PageContent from '~/components/common/page-content';
import { CopmFadeInUp } from 'pages/component/animate-comp'
import { Link } from 'react-router-dom';
import './index.scss'


const Home = () => {
  return (
    <div className="erda-home pt0">
      <Banner/>
      <MainCard/>
      <ProjectManagement/>
      <CodeHosting/>
      <TestManage/>
      <CiCd/>
      <Monitor/>
      <LogAnalysis/>
      <div className="contact-trial">
        <PageContent>
          <CopmFadeInUp>
            <p className="title">您的团队在应用研发过程中还有什么困难？</p>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <div className="center-flex-box btns mt36">
              <div className="btn-item free-trial center-flex-box" onClick={() => {
                window.open('/login-dice')
              }}>免费试用
              </div>
              <Link className="btn-item contact center-flex-box" to='/contact'>联系我们</Link>
            </div>
          </CopmFadeInUp>
        </PageContent>
      </div>
    </div>
  )
}

export default Home

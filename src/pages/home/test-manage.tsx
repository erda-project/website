import React from 'react';
import PageContent from '~/components/common/page-content';
import {  SpriteIcons } from '~/common';
import { CopmFadeInUp } from 'pages/component/animate-comp'

const config: {title: string; icon: string; description: string}[] = [{
  icon: 'bug-manage',
  title: '全方位用例和缺陷管理',
  description: '支持手工用例、接口用例、用例计划、测试报告以及缺陷的全测试过程管理'
},{
  icon: 'auto-test',
  title: '接口自动化测试',
  description: '支持测试用例和测试场景的拖拽式图形化编排，并且提供多能力的断言和 Mock 能力'
},{
  icon: 'data-bank',
  title: '数据银行',
  description: '平台在测试数据源的管理基础之上，通过配置单可以通过 sql 大批量进行测试数据准备工作，配置单、接口测试用例可以通过图形化编排流水线无缝对接工作。'
},{
  icon: 'full-link',
  title: '全链路管理',
  description: '平台内置功能无缝对接，让开发者从接口设计、接口测试、接口发布一站式完成'
}];
const TestManage = () => {
  return (
    <div className="erda-home-test-manage">
      <PageContent>
        <CopmFadeInUp>
          <div className="card-title">
            全程护航研发质量的<span className="card-title-height-light">测试管理</span>
          </div>
        </CopmFadeInUp>
        <CopmFadeInUp>
          <div className="card-desc mt20">
            提供包含代码单元测试、代码安全测试、手工测试用例管理和接口自动化测试的全方位的测试管理能力
          </div>
        </CopmFadeInUp>
        <div className="erda-home-test-manage-body flex-box v-align-start">
          {
            config.map(item=>{
              const {icon, description, title} = item;
              return (
                <CopmFadeInUp key={title}>
                  <div key={title} className="item">
                    <SpriteIcons path="home" className={`icon ${icon}`}/>
                    <div className="title mt36">{title}</div>
                    <div className="desc mt8">{description}</div>
                  </div>
                </CopmFadeInUp>
              )
            })
          }
        </div>
      </PageContent>
    </div>
  );
};

export default TestManage;

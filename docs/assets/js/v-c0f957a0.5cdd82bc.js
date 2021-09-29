"use strict";(self.webpackChunkeurynome_cloud_document=self.webpackChunkeurynome_cloud_document||[]).push([[781],{3597:(e,a,t)=>{t.r(a),t.d(a,{data:()=>r});const r={key:"v-c0f957a0",path:"/documents/",title:"介绍",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"总体架构",slug:"总体架构",children:[]},{level:2,title:"功能演示",slug:"功能演示",children:[{level:3,title:"[1]、基于URL的方法级动态权限配置",slug:"_1-、基于url的方法级动态权限配置",children:[]},{level:3,title:"[2]、服务调用链监控",slug:"_2-、服务调用链监控",children:[]}]},{level:2,title:"版本号说明",slug:"版本号说明",children:[]},{level:2,title:"交流反馈",slug:"交流反馈",children:[]}],filePathRelative:"documents/README.md",git:{updatedTime:1632731086e3,contributors:[{name:"herodotus",email:"pointer_v@qq.com",commits:6}]}}},7076:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var r=t(6252);const i=(0,r.uE)('<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><h1 align="center">Eurynome Cloud 微服务架构</h1><hr><p align="center"><a href="https://www.oracle.com/java/technologies/javase-downloads.html" target="_blank"><img src="https://img.shields.io/badge/JDK-1.8%2B-green" alt="JDK 1.8+"></a>  <a href="https://spring.io/projects/spring-boot" target="_blank"><img src="https://img.shields.io/badge/Spring%20Boot-2.5.5-blue" alt="Spring Boot 2.5.5"></a>  <a href="https://spring.io/projects/spring-cloud" target="_blank"><img src="https://img.shields.io/badge/Spring%20Cloud-2020.0.4-blue" alt="Spring Cloud 2020.0.4"></a>  <a href="https://github.com/alibaba/spring-cloud-alibaba" target="_blank"><img src="https://img.shields.io/badge/Spring%20Cloud%20Alibaba-2021.1-blue" alt="Spring Cloud Alibaba 2021.1"></a>  <a href="https://nacos.io/zh-cn/index.html" target="_blank"><img src="https://img.shields.io/badge/Nacos-2.0.3-brightgreen" alt="Nacos 2.0.3"></a>  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-Apache--2.0-blue" alt="License Apache 2.0"></a>  <a href="https://blog.csdn.net/Pointer_v" target="_blank"><img src="https://img.shields.io/badge/Author-%E7%A0%81%E5%8C%A0%E5%90%9B-orange" alt="码匠君"></a>  <a href="#" target="_blank"><img src="https://img.shields.io/badge/Version-2.5.5.10-red" alt="Version 2.5.5.10"></a>  <a href="https://gitee.com/herodotus/eurynome-cloud"><img src="https://gitee.com/herodotus/eurynome-cloud/badge/star.svg?theme=dark" alt="Gitee star"></a>  <a href="https://gitee.com/herodotus/eurynome-cloud"><img src="https://gitee.com/herodotus/eurynome-cloud/badge/fork.svg?theme=dark" alt="Gitee fork"></a></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>有幸负责过一个“中台”项目，彻底告别了SSH。随着微服务以及相关架构使用和研究深入，发现很多方面都不能满足需求。研究过很多优秀的开源项目，感觉都不太适合自己。所以就想自己做一套属于自己的微服务架构，因此就有了Eurynome-Cloud</p></div><p><strong>Eurynome Cloud</strong> 是一款企业级微服务架构和服务能力开发平台。基于 <code>Spring Boot 2.5.5</code>、<code>Spring Cloud 2020.0.4</code>、<code>Spring Cloud Alibaba 2021.1</code>、<code>Nacos 2.0.3</code> 等最新版本开发，遵循 <code>Spring Boot</code> 编程思想，高度模块化和可配置化。具备服务发现、配置、熔断、限流、降级、监控、多级缓存、分布式事务、工作流等功能，代码简洁，架构清晰，非常适合学习和企业作为基础框架使用</p><h2 id="总体架构" tabindex="-1"><a class="header-anchor" href="#总体架构" aria-hidden="true">#</a> 总体架构</h2><p><img src="/eurynome-cloud/images/main/architecture.jpg" alt="架构图"></p><h2 id="功能演示" tabindex="-1"><a class="header-anchor" href="#功能演示" aria-hidden="true">#</a> 功能演示</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>有特点的功能，正在逐步添加。</p></div><h3 id="_1-、基于url的方法级动态权限配置" tabindex="-1"><a class="header-anchor" href="#_1-、基于url的方法级动态权限配置" aria-hidden="true">#</a> [1]、基于URL的方法级动态权限配置</h3><p><img src="/eurynome-cloud/images/main/oauth2expression.gif" alt="架构图"></p><h3 id="_2-、服务调用链监控" tabindex="-1"><a class="header-anchor" href="#_2-、服务调用链监控" aria-hidden="true">#</a> [2]、服务调用链监控</h3><p><img src="/eurynome-cloud/images/main/skywalking.gif" alt="架构图"></p><h2 id="版本号说明" tabindex="-1"><a class="header-anchor" href="#版本号说明" aria-hidden="true">#</a> 版本号说明</h2><p>本系统版本号，分为四段。</p><ul><li>第一段和第二段，与 <code>Spring Boot</code> 版本对应，根据采用的 <code>Spring Boot</code> 版本变更。例如，当前采用 Spring Boot 2.4.6 版本，那么就以2.4.X.X开头</li><li>第三段，表示系统功能的变化</li><li>第四段，表示系统功能维护及优化情况</li></ul><h2 id="交流反馈" tabindex="-1"><a class="header-anchor" href="#交流反馈" aria-hidden="true">#</a> 交流反馈</h2>',18),o=(0,r.Uk)("有问题欢迎提交"),l={href:"https://gitee.com/herodotus/eurynome-cloud/issues",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("ISSUS"),n=(0,r.Uk)(" ，请写清楚问题的具体原因，重现步骤和环境(上下文)。Gitee评论中有字数限制，稍微复杂的内容不太便于回复。"),d=(0,r._)("li",null,"邮箱：herodotus@aliyun.com",-1),h=(0,r.Uk)("QQ群："),c={href:"https://jq.qq.com/?_wv=1027&k=bIerJVy8",target:"_blank",rel:"noopener noreferrer"},u=(0,r.Uk)("922565573"),g={render:function(e,a){const t=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r._)("ul",null,[(0,r._)("li",null,[o,(0,r._)("a",l,[s,(0,r.Wm)(t)]),n]),d,(0,r._)("li",null,[h,(0,r._)("a",c,[u,(0,r.Wm)(t)])])])],64)}}}}]);
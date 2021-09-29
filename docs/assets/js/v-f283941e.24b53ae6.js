"use strict";(self.webpackChunkeurynome_cloud_document=self.webpackChunkeurynome_cloud_document||[]).push([[658],{5517:(e,d,t)=>{t.r(d),t.d(d,{data:()=>o});const o={key:"v-f283941e",path:"/documents/%E6%95%B0%E6%8D%AE%E5%88%9D%E5%A7%8B%E5%8C%96.html",title:"数据初始化",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"知识铺垫",slug:"知识铺垫",children:[{level:3,title:"基础原理",slug:"基础原理",children:[]},{level:3,title:"Spring Data JPA 更换数据库",slug:"spring-data-jpa-更换数据库",children:[]},{level:3,title:"Spring Data JPA 初始化数据库",slug:"spring-data-jpa-初始化数据库",children:[]},{level:3,title:"特别说明",slug:"特别说明",children:[]}]},{level:2,title:"操作步骤",slug:"操作步骤",children:[{level:3,title:"步骤一：创建数据表",slug:"步骤一-创建数据表",children:[]},{level:3,title:"步骤二：初始默认数据",slug:"步骤二-初始默认数据",children:[]},{level:3,title:"步骤三：回置配置",slug:"步骤三-回置配置",children:[]},{level:3,title:"总结",slug:"总结",children:[]}]},{level:2,title:"配置参数对应关系",slug:"配置参数对应关系",children:[]}],filePathRelative:"documents/数据初始化.md",git:{updatedTime:163265271e4,contributors:[{name:"herodotus",email:"pointer_v@qq.com",commits:3}]}}},784:(e,d,t)=>{t.r(d),t.d(d,{default:()=>ee});var o=t(6252);const a=(0,o.uE)('<h1 id="数据初始化" tabindex="-1"><a class="header-anchor" href="#数据初始化" aria-hidden="true">#</a> 数据初始化</h1><h2 id="知识铺垫" tabindex="-1"><a class="header-anchor" href="#知识铺垫" aria-hidden="true">#</a> 知识铺垫</h2><h3 id="基础原理" tabindex="-1"><a class="header-anchor" href="#基础原理" aria-hidden="true">#</a> 基础原理</h3><p><strong>Eurynome Cloud</strong> 核心数据访问层使用Spring Boot生态中的<code>spring-boot-starter-data-jpa</code>组件，<code>spring-boot-starter-data-jpa</code> 核心依赖是 <code>Spring Data JPA</code>。</p>',4),r=(0,o._)("code",null,"JPA",-1),c=(0,o.Uk)("("),l=(0,o._)("code",null,"Java Persistence API",-1),i=(0,o.Uk)(")意即Java持久化API，是Sun官方在JDK5.0后提出的Java持久化规范。"),n=(0,o._)("code",null,"Spring Data JPA",-1),s=(0,o.Uk)(" 默认使用 "),p=(0,o._)("code",null,"Hibernate",-1),u=(0,o.Uk)(" 作为 "),h=(0,o._)("code",null,"JPA",-1),m=(0,o.Uk)(" 实现。参阅："),b=(0,o.Uk)("Spring Data JPA"),g=(0,o.uE)('<p><code>Spring Data JPA</code> 利用 <code>Hibernate</code> 多数据库支持能力实现不同类型数据库的支持，同时使用 <code>Hibernate</code> 的 <code>hbm2ddl</code> 机制 实现数据库表的自动创建。除此以外，<code>Spring Data JPA</code> 提供了数据库SQL脚本自动执行机制，实现了数据脚本的初始化和表结构等创建功能。</p><h3 id="spring-data-jpa-更换数据库" tabindex="-1"><a class="header-anchor" href="#spring-data-jpa-更换数据库" aria-hidden="true">#</a> Spring Data JPA 更换数据库</h3><p>通过修改<code>spring-boot-starter-data-jpa</code>对应的配置参数就可以达成更换数据库的目的。主要涉及需要修改的配置参数如下表所示：</p><table><thead><tr><th>配置</th><th>说明</th></tr></thead><tbody><tr><td>spring.datasource.driver-class-name</td><td>数据库Driver Class，不同的数据库驱动不同</td></tr><tr><td>spring.datasource.url</td><td>数据库访问连接，不同数据连接格式也不同</td></tr><tr><td>spring.datasource.username</td><td>数据库访问用户名，如果相同可以不用修改</td></tr><tr><td>spring.datasource.password</td><td>数据库访问密码，如果相同可以不用修改</td></tr><tr><td>spring.jpa.database</td><td>选择数据库类型，具体类型与枚举<code>org.springframework.orm.jpa.vendor.Database</code>中的值对应，使用小写值即可</td></tr><tr><td>spring.jpa.properties.hibernate.dialect</td><td>选择数据库类型对应的dialect，在 <code>org.hibernate.dialect</code> 包下可以找到具体数据库对应的dialect</td></tr><tr><td>spring.jpa.hibernate.ddl-auto</td><td>设置hibernate初始化操作的类型，具体参见下表</td></tr></tbody></table><p>这里要特别注意 <code>spring.jpa.hibernate.ddl-auto</code> 参数。</p><p><code>spring.jpa.hibernate.ddl-auto</code> 参数包含以下几个值，具体含义见下表：</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td><code>create</code></td><td>每次加载hibernate时都会删除上一次的生成的表，再重新根据model(与数据库表对应的实体)生成表，因此可能会导致数据丢失。</td></tr><tr><td><code>create-drop</code></td><td>每次加载hibernate时根据model类生成表，服务一关闭，表就自动删除。该设置适用于演示环境等特殊场景使用</td></tr><tr><td><code>update</code></td><td>最常用的属性，第一次加载hibernate时根据model类会自动建立起表的结构，再次使用时自动更新表结构，原有数据不会清空。</td></tr><tr><td><code>validate</code></td><td>每次加载hibernate时，会校验数据与数据库的字段类型是否相同，字段不同会报错。</td></tr><tr><td><code>none</code></td><td>不进行任何操作</td></tr></tbody></table><p>如果想要使用<code>spring-boot-starter-data-jpa</code>提供SQL自动初始化机制，那么还需要额外修改以下配置：</p><blockquote><p>通过以上配置参数的修改就可以进行数据库的切换，以及数据库表的创建.</p></blockquote><h3 id="spring-data-jpa-初始化数据库" tabindex="-1"><a class="header-anchor" href="#spring-data-jpa-初始化数据库" aria-hidden="true">#</a> Spring Data JPA 初始化数据库</h3><p><code>Spring Data JPA</code> 还提供的数据库SQL脚本的执行机制。将已生成好的数据库SQL脚本，放入到代码工程的<code>resources</code>目录下，按照指定格式命名，通过修改配置就可以实现SQL脚本的自动执行。</p><p>具体SQL文件名的格式为：<code>schema-${platform}.sql</code> 和 <code>data-${platform}.sql</code>。<code>platform</code> 是用来指定不同的数据库类型，以此来实现不同数据库脚本的切换。</p><ul><li><code>schema-${platform}.sql</code>：主要放置数据库定义语言(<code>DDL</code>)SQL脚本，例如：数据库表、视图、存储过程等。</li><li><code>data-${platform}.sql</code>：主要放置数据操纵语言(<code>DML</code>)SQL脚本，例如：最经常用到的 SELECT、UPDATE、INSERT、DELETE。</li></ul><blockquote><p>由此可见，<code>schema-${platform}.sql</code> 是先于 <code>data-${platform}.sql</code> 执行的。</p></blockquote><p>主要涉及需要修改的配置参数如下表所示：</p><table><thead><tr><th>配置</th><th>说明</th></tr></thead><tbody><tr><td>spring.sql.init.mode</td><td>用于控制脚本执行状态。</td></tr><tr><td>spring.sql.init.platform</td><td>数据库类型，主要用于在data-locations 和 schema-locations 中定位不同数据库的脚本</td></tr><tr><td>spring.sql.init.data-locations</td><td>DML SQL文件路径</td></tr><tr><td>spring.sql.init.data-locations</td><td>DDL SQL文件路径</td></tr></tbody></table><p>这里要特别注意 <code>spring.sql.init.mode</code> 参数。</p><p><code>spring.sql.init.mode</code> 参数包含以下几个值，具体含义见下表：</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>always</td><td>总是执行，相当于开启</td></tr><tr><td>never</td><td>不执行，相当于关闭</td></tr><tr><td>embedded</td><td>仅初始化嵌入式数据库，特殊需求和设计会用到</td></tr></tbody></table><h3 id="特别说明" tabindex="-1"><a class="header-anchor" href="#特别说明" aria-hidden="true">#</a> 特别说明</h3><div class="custom-container danger"><p class="custom-container-title">说明：</p><p><code>Spring Data JPA</code> 既可以通过 <code>Hibernate</code> 的机制进行数据库表的创建，也可以通过<code>sql.init</code>的方式进行数据库表以及数据初始化的创建。这两者是各自独立的、没有任何必然联系的。具体如何使用就要看设计者的考虑。</p><p>两者的执行顺序不同，如果要两者同时使用一定要注意执行顺序，否则很容易导致运行出错。具体的顺序是：</p><p><code>schema-${platform}.sql</code> &gt; <code>data-${platform}.sql</code> &gt; <code>hbm2ddl</code>。</p></div><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h2><p><strong>Eurynome Cloud</strong> 数据库表创建和默认数据的初始化，就是使用 <code>Spring Data JPA</code> 自身的机制实现。</p><p>在 <strong>Eurynome Cloud</strong> 数据库表创建和默认数据的初始化过程中, 主要会进行以下几项操作。</p><ul><li>创建核心业务表</li><li>扫描已运行服务中所有的<code>RestController</code>接口，将接口数据转换为权限数据，并汇总至用户中心服务统一存储和管理。</li><li>系统默认数据，如用户、角色等数据的初始化。</li></ul>',25),_={class:"custom-container danger"},y=(0,o._)("p",{class:"custom-container-title"},"注意",-1),v=(0,o.Uk)("具体开始之前，一定要确保所有前序工作已经完成。参阅："),k=(0,o.Uk)("数据库初始化前序工作"),U=(0,o._)("h3",{id:"步骤一-创建数据表",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#步骤一-创建数据表","aria-hidden":"true"},"#"),(0,o.Uk)(" 步骤一：创建数据表")],-1),f=(0,o.Uk)("进入Nacos管理界面。找到您所使用的对应 "),E=(0,o._)("code",null,"多环境",-1),S=(0,o.Uk)(" 下的 "),A=(0,o._)("code",null,"eurynome-cloud-environment.yaml",-1),D=(0,o.Uk)(" 配置文件。例如，您当前使用的是 "),q=(0,o._)("code",null,"development",-1),w=(0,o.Uk)(" 环境，那么在Nacos后台管理中，找到 "),L=(0,o._)("code",null,"Group",-1),P=(0,o.Uk)(" 是 "),j=(0,o._)("code",null,"development",-1),Q=(0,o.Uk)(" 的 "),J=(0,o._)("code",null,"eurynome-cloud-environment.yaml",-1),x=(0,o.Uk)(" 配置。多环境配置，参阅："),C=(0,o.Uk)("多环境配置"),$=(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Uk)("设置 "),(0,o._)("code",null,"eurynome-cloud-environment.yaml"),(0,o.Uk)("配置文件中属性 "),(0,o._)("code",null,"herodotus.switch.database.ddl-auto"),(0,o.Uk)(" 的值为 "),(0,o._)("code",null,"create"),(0,o.Uk)(" 或 "),(0,o._)("code",null,"update")])],-1),B=(0,o.uE)('<div class="custom-container tip"><p class="custom-container-title">说明</p><ul><li>如果是初次部署，或者想将已有表重新创建，那么将 <code>herodotus.switch.database.ddl-auto</code> 的值设置为 <code>create</code>。</li><li>如果是已经开始使用系统了，想保留已有的数据，只做更新，那么将 <code>herodotus.switch.database.ddl-auto</code> 的值设置为 <code>update</code>。</li></ul></div><ol start="3"><li>点击<code>发布</code>按钮，发布配置，让配置生效。</li></ol>',2),H={class:"custom-container danger"},M=(0,o._)("p",{class:"custom-container-title"},"注意",-1),N=(0,o._)("li",null,[(0,o._)("p",null,[(0,o._)("strong",null,"正式环境一定要提前做好数据备份"),(0,o.Uk)("。")])],-1),T=(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Uk)("如果是"),(0,o._)("code",null,"MySQL"),(0,o.Uk)("数据库的初次部署，那么最好将 "),(0,o._)("code",null,"herodotus.switch.database.ddl-auto"),(0,o.Uk)(" 的值设置为 "),(0,o._)("code",null,"update"),(0,o.Uk)("，否则就会出错。")])],-1),F=(0,o._)("code",null,"herodotus.switch.database.ddl-auto",-1),I=(0,o.Uk)(" 的值设置为 "),R=(0,o._)("code",null,"update",-1),W=(0,o.Uk)(", 再次运行服务，由于 "),G=(0,o._)("code",null,"Hibernate",-1),z=(0,o.Uk)(" 不同方言实现逻辑的不同，在有些数据库下运行，例如："),K=(0,o._)("code",null,"PostgreSQL",-1),Y=(0,o.Uk)(", 对于某些兼容性问题，只是输出告警；在某些数据库下运行，例如 MySQL，对于某些兼容性问题，会直接抛出Exception。所以出现这种情况，只要服务继续在运行就不是系统BUG；如果出错直接导致服务运行停止，那么请报 "),O=(0,o._)("code",null,"ISSUE",-1),V=(0,o.Uk)("。参阅："),X=(0,o.Uk)("MySQL常见问题"),Z=(0,o.uE)('<ol><li>运行 <code>UpmsApplication</code> 服务。</li></ol><p><code>UpmsApplication</code> 服务第一次正常运行之后，所有核心业务表都已经创建，<code>UpmsApplication</code> 服务中所有接口都已经转换为权限数据存入<code>sys_authority</code>表中。</p><blockquote><p>如果看到有数据库表创建，同时<code>sys_authority</code>表中有数据，证明数据库表创建成功。</p></blockquote><h3 id="步骤二-初始默认数据" tabindex="-1"><a class="header-anchor" href="#步骤二-初始默认数据" aria-hidden="true">#</a> 步骤二：初始默认数据</h3><h4 id="方式一-自动初始化" tabindex="-1"><a class="header-anchor" href="#方式一-自动初始化" aria-hidden="true">#</a> 方式一：自动初始化</h4><ol><li><p>停止<code>UpmsApplication</code> 服务</p></li><li><p>进入Nacos管理界面。找到您所使用的对应 <code>多环境</code> 下的 <code>eurynome-cloud-environment.yaml</code> 配置文件。</p></li><li><p>设置 <code>eurynome-cloud-environment.yaml</code> 配置文件中属性 <code>herodotus.switch.database.ddl-auto</code> 的值为 <code>update</code> 或 <code>none</code></p></li><li><p>设置 <code>eurynome-cloud-environment.yaml</code> 配置文件中属性 <code>herodotus.switch.database.init-mode</code> 的值为 <code>always</code></p></li><li><p>点击<code>发布</code>按钮，发布配置，让配置生效。</p></li><li><p>如果默认使用的不是 <code>PostgreSQL</code> 数据库，需要修改<code>${project_home}/services/eurynome-cloud-upms-ability/resources/bootstrap.yml</code> 中 <code>spring.sql.init.data-locations</code> 配置，放开您所使用数据库对应的SQL脚本。注释掉其它SQL脚本</p></li><li><p>再次运行 <code>UpmsApplication</code> 服务。</p></li></ol><p><code>UpmsApplication</code> 服务再一次正常运行之后，如果<code>sys_user</code>、<code>sys_role</code>、<code>sys_role_authority</code>等表中都都已经有数据了，证明数据初始化成功。</p><h4 id="方式二-手动初始化" tabindex="-1"><a class="header-anchor" href="#方式二-手动初始化" aria-hidden="true">#</a> 方式二：手动初始化</h4><ol><li><p>设置 <code>eurynome-cloud-environment.yaml</code> 配置文件中属性 <code>herodotus.switch.database.ddl-auto</code> 的值为 <code>update</code> 或 <code>none</code>。</p></li><li><p>在工程<code>${project_home}/services/eurynome-cloud-upms-ability/resources/sqls</code>目录下，可以找到对应数据库数据初始化脚本。可以用你喜欢的方式导入数据库。</p></li></ol><blockquote><p>采用手动初始化方式，下一步可以跳过忽略</p></blockquote><h3 id="步骤三-回置配置" tabindex="-1"><a class="header-anchor" href="#步骤三-回置配置" aria-hidden="true">#</a> 步骤三：回置配置</h3><ol><li><p>停止<code>UpmsApplication</code> 服务</p></li><li><p>进入Nacos管理界面。找到您所使用的对应 <code>多环境</code> 下的 <code>eurynome-cloud-environment.yaml</code> 配置文件。</p></li><li><p>设置 <code>eurynome-cloud-environment.yaml</code> 配置文件中属性 <code>herodotus.switch.database.init-mode</code> 的值重置为 <code>never</code>。</p></li><li><p>检查 <code>eurynome-cloud-environment.yaml</code> 配置文件中属性 <code>herodotus.switch.database.ddl-auto</code> 的值为 <code>update</code> 或 <code>none</code></p></li><li><p>点击<code>发布</code>按钮，发布配置，让配置生效。</p></li></ol><div class="custom-container danger"><p class="custom-container-title">为什么回置并再次检查</p><ul><li>如果 <code>herodotus.switch.database.ddl-auto</code> 的值为 <code>create</code> 或 <code>create-drop</code>，再次启动服务会重新建表，那么前面的工作就白做了。</li><li>如果 <code>herodotus.switch.database.init-mode</code> 的值为 <code>always</code>，再次启动服务会再次执行SQL脚本，必定出现主键冲突问题导致失败。</li></ul></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>经过实际的使用，总体感受 <code>Spring Data JPA</code> 以及 <code>Hibernate</code> 的多数据库支持还是非常强大，在 <code>PostgreSQL</code> 等自身版本差异不大的数据库家族中，使用非常顺滑。而像<code>MySQL</code> 这种自身各个版本差异较大的数据库家族中，使用起来确实有点蹩脚。</p><h2 id="配置参数对应关系" tabindex="-1"><a class="header-anchor" href="#配置参数对应关系" aria-hidden="true">#</a> 配置参数对应关系</h2><p><strong>Eurynome Cloud</strong> 数据库操作设计配置参数与<code>spring-boot-starter-data-jpa</code>配置参数对应关系如下表：</p><table><thead><tr><th>配置</th><th>对应</th></tr></thead><tbody><tr><td>herodotus.database-information.driver-class-name</td><td>spring.datasource.driver-class-name</td></tr><tr><td>herodotus.database-information.url</td><td>spring.datasource.url</td></tr><tr><td>herodotus.environment.database.username</td><td>spring.datasource.username</td></tr><tr><td>herodotus.environment.database.password</td><td>spring.datasource.password</td></tr><tr><td>herodotus.database-information.platform</td><td>spring.jpa.database<br>spring.sql.init.platform</td></tr><tr><td>herodotus.environment.database.dialect</td><td>spring.jpa.properties.hibernate.dialect</td></tr><tr><td>herodotus.switch.database.ddl-auto</td><td>spring.jpa.hibernate.ddl-auto</td></tr><tr><td>herodotus.switch.database.init-mode</td><td>spring.sql.init.mode</td></tr></tbody></table>',18),ee={render:function(e,d){const t=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[r,c,l,i,n,s,p,u,h,m,(0,o.Wm)(t,{to:"/basic-knowledge/spring-data-jpa.html#JPA"},{default:(0,o.w5)((()=>[b])),_:1})]),g,(0,o._)("div",_,[y,(0,o._)("p",null,[v,(0,o.Wm)(t,{to:"/documents/%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2.html#%E5%90%8E%E7%AB%AF%E8%BF%90%E8%A1%8C"},{default:(0,o.w5)((()=>[k])),_:1})])]),U,(0,o._)("ol",null,[(0,o._)("li",null,[(0,o._)("p",null,[f,E,S,A,D,q,w,L,P,j,Q,J,x,(0,o.Wm)(t,{to:"/documents/%E5%A4%9A%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html"},{default:(0,o.w5)((()=>[C])),_:1})])]),$]),B,(0,o._)("div",H,[M,(0,o._)("ul",null,[N,T,(0,o._)("li",null,[(0,o._)("p",null,[F,I,R,W,G,z,K,Y,O,V,(0,o.Wm)(t,{to:"/others/MySQL.html"},{default:(0,o.w5)((()=>[X])),_:1})])])])]),Z],64)}}}}]);
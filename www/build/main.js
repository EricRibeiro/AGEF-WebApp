webpackJsonp([16],{130:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(3),a(48);var n=function(){function e(e){this.loadingCtrl=e}return e.prototype.exibirLoadingPadrao=function(e){return this.loadingCtrl.create({content:e,spinner:"circles"})},e}()},131:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(3),a(48);var n=function(){function e(e,t){this.alertCtrl=e,this.toastCtrl=t}return e.prototype.exibirToast=function(e){this.toastCtrl.create({message:e,duration:3e3,position:"bottom",showCloseButton:!0,closeButtonText:"OK"}).present()},e.prototype.exibirDialogoConfirmacao=function(e,t){var a=this.alertCtrl.create({title:t,message:e,buttons:[{text:"Cancelar",role:"cancel",handler:function(){return a.dismiss(!1),!1}},{text:"Confirmar",handler:function(){return a.dismiss(!0),!1}}]});return a},e.prototype.exibirDialogoInformacao=function(e,t){this.alertCtrl.create({title:t,message:e,buttons:[{text:"OK",role:"cancel"}]}).present()},e}()},132:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(3),a(147);var n=function(){function e(e){this.brMasker=e}return e.prototype.estaVazio=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},e.prototype.mascaraDinheiro=function(e){var t=e.toFixed(2);return this.brMasker.writeValueMoney(t)},e.prototype.trocarPontuacaoPreco=function(e){return e.replace(".","").replace(",",".")},e}()},164:function(e,t){function a(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=164},189:function(e,t,a){function n(e){var t=o[e];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"../pages/features/defeito/defeito-details/defeito-details.module.ngfactory":[294,9],"../pages/features/defeito/defeito-home/defeito-home.module.ngfactory":[295,7],"../pages/features/defeito/defeito-insert/defeito-insert.module.ngfactory":[296,1],"../pages/features/faturamento/faturamento-details/faturamento-details.module.ngfactory":[297,13],"../pages/features/faturamento/faturamento-home/faturamento-home.module.ngfactory":[298,12],"../pages/features/modelo/modelo-home/modelo-home.module.ngfactory":[299,6],"../pages/features/modelo/modelo-insert/modelo-insert.module.ngfactory":[300,11],"../pages/features/peca/peca-home/peca-home.module.ngfactory":[301,5],"../pages/features/peca/peca-insert/peca-insert.module.ngfactory":[302,4],"../pages/features/peca/peca-update/peca-update.module.ngfactory":[303,10],"../pages/features/venda/venda-completa/venda-completa.module.ngfactory":[304,3],"../pages/features/venda/venda-details/venda-details.module.ngfactory":[305,8],"../pages/features/venda/venda-home/venda-home.module.ngfactory":[309,2],"../pages/features/venda/venda-insert/venda-insert.module.ngfactory":[306,0],"../pages/home/home.module.ngfactory":[307,14],"../pages/tabs/tabs.module.ngfactory":[308,15]};n.keys=function(){return Object.keys(o)},n.id=189,e.exports=n},220:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={baseUrl:""}},233:function(e,t,a){"use strict";function n(e){return r["ɵvid"](0,[(e()(),r["ɵeld"](0,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,a){var n=!0,o=e.component;if("click"===t){n=!1!==r["ɵnov"](e,6).close()&&n}if("click"===t){n=!1!==o.openPage(e.context.$implicit)&&n}return n},O.b,O.a)),r["ɵdid"](1,1097728,null,3,E.a,[D.a,A.a,r.ElementRef,r.Renderer,[2,S.a]],null,null),r["ɵqud"](335544320,4,{contentLabel:0}),r["ɵqud"](603979776,5,{_buttons:1}),r["ɵqud"](603979776,6,{_icons:1}),r["ɵdid"](5,16384,null,0,T.a,[],null,null),r["ɵdid"](6,16384,null,0,_.a,[j.a],{menuClose:[0,"menuClose"]},null),(e()(),r["ɵted"](7,2,["\n                ","\n            "]))],function(e,t){e(t,6,0,"")},function(e,t){e(t,7,0,t.context.$implicit.title)})}function o(e){return r["ɵvid"](0,[r["ɵqud"](402653184,1,{nav:0}),(e()(),r["ɵeld"](1,0,null,null,28,"ion-menu",[["role","navigation"]],null,null,null,x.b,x.a)),r["ɵprd"](6144,null,L.a,null,[V.a]),r["ɵdid"](3,245760,null,2,V.a,[j.a,r.ElementRef,A.a,K.a,r.Renderer,Z.a,q.l,B.a,z.a],{content:[0,"content"]},null),r["ɵqud"](335544320,2,{menuContent:0}),r["ɵqud"](335544320,3,{menuNav:0}),(e()(),r["ɵted"](-1,0,["\n    "])),(e()(),r["ɵeld"](7,0,null,0,10,"ion-header",[],null,null,null,null,null)),r["ɵdid"](8,16384,null,0,U.a,[A.a,r.ElementRef,r.Renderer,[2,X.a]],null,null),(e()(),r["ɵted"](-1,null,["\n        "])),(e()(),r["ɵeld"](10,0,null,null,6,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,G.b,G.a)),r["ɵdid"](11,49152,null,0,W.a,[A.a,r.ElementRef,r.Renderer],null,null),(e()(),r["ɵted"](-1,3,["\n            "])),(e()(),r["ɵeld"](13,0,null,3,2,"ion-title",[],null,null,null,$.b,$.a)),r["ɵdid"](14,49152,null,0,J.a,[A.a,r.ElementRef,r.Renderer,[2,W.a],[2,Q.a]],null,null),(e()(),r["ɵted"](-1,0,["Menu"])),(e()(),r["ɵted"](-1,3,["\n        "])),(e()(),r["ɵted"](-1,null,["\n    "])),(e()(),r["ɵted"](-1,0,["\n\n    "])),(e()(),r["ɵeld"](19,0,null,0,9,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Y.b,Y.a)),r["ɵdid"](20,4374528,[[2,4]],0,ee.a,[A.a,K.a,B.a,r.ElementRef,r.Renderer,z.a,Z.a,r.NgZone,[2,X.a],[2,te.a]],null,null),(e()(),r["ɵted"](-1,1,["\n        "])),(e()(),r["ɵeld"](22,0,null,1,5,"ion-list",[],null,null,null,null,null)),r["ɵdid"](23,16384,null,0,ae.a,[A.a,r.ElementRef,r.Renderer,K.a,q.l,B.a],null,null),(e()(),r["ɵted"](-1,null,["\n            "])),(e()(),r["ɵand"](16777216,null,null,1,null,n)),r["ɵdid"](26,802816,null,0,h.i,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),r["ɵted"](-1,null,["\n        "])),(e()(),r["ɵted"](-1,1,["\n    "])),(e()(),r["ɵted"](-1,0,["\n\n"])),(e()(),r["ɵted"](-1,null,["\n\n"])),(e()(),r["ɵted"](-1,null,["\n"])),(e()(),r["ɵeld"](32,0,null,null,2,"ion-nav",[["swipeBackEnabled","false"]],null,null,null,ne.b,ne.a)),r["ɵprd"](6144,null,L.a,null,[oe.a]),r["ɵdid"](34,4374528,[[1,4],["content",4]],0,oe.a,[[2,X.a],[2,te.a],z.a,A.a,K.a,r.ElementRef,r.NgZone,r.Renderer,r.ComponentFactoryResolver,q.l,le.a,[2,re.a],B.a,r.ErrorHandler],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null)],function(e,t){var a=t.component;e(t,3,0,r["ɵnov"](t,34));e(t,26,0,a.pages);e(t,34,0,"false",a.rootPage)},function(e,t){e(t,10,0,r["ɵnov"](t,11)._sbPadding);e(t,19,0,r["ɵnov"](t,20).statusbarPadding,r["ɵnov"](t,20)._hasRefresher)})}Object.defineProperty(t,"__esModule",{value:!0});var l=a(37),r=a(0),d=(a(3),a(48),a(129)),i=a(83),u=a(84),s=a(58),m=function(){var e={};return e[e.Online=0]="Online",e[e.Offline=1]="Offline",e}(),p=function(){function e(e,t,a){this.alertCtrl=e,this.network=t,this.eventCtrl=a,console.log("Hello NetworkProvider Provider"),this.previousStatus=m.Online}return e.prototype.initializeNetworkEvents=function(){var e=this;this.network.onDisconnect().subscribe(function(){e.previousStatus===m.Online&&e.eventCtrl.publish("network:offline"),e.previousStatus=m.Offline}),this.network.onConnect().subscribe(function(){e.previousStatus===m.Offline&&e.eventCtrl.publish("network:online"),e.previousStatus=m.Online})},e}(),c=a(220),f=(a(151),function(){function e(e,t,a,n,o,l,r,d){this.platform=e,this.statusBar=t,this.splashScreen=a,this.network=n,this.networkInjector=o,this.socket=l,this.events=r,this.alertCtrl=d,this.rootPage="HomePage",this.initializeApp(),this.pages=[{title:"Home",component:"HomePage"}]}return e.prototype.initializeApp=function(){var e=this;this.platform.ready().then(function(){e.socket.connect(),e.socket.emit("entrei",c.a.baseUrl),e.socket.disconnect(),e.statusBar.styleDefault(),e.splashScreen.hide(),e.networkInjector.initializeNetworkEvents(),e.events.subscribe("network:offline",function(){e.alertNoInternet()}),e.events.subscribe("network:online",function(){e.alertInternet()})})},e.prototype.alertNoInternet=function(){this.alertCtrl.create({title:"Internet",subTitle:"Internet não disponível.",buttons:["OK"]}).present()},e.prototype.alertInternet=function(){this.alertCtrl.create({title:"Internet",subTitle:"Internet disponível!",buttons:["OK"]}).present()},e.prototype.openPage=function(e){this.nav.setRoot(e.component)},e}()),g=a(131),y=a(130),h=a(10),v=a(132),b=(a(147),function(){return function(){}}()),C=a(52),P=a(221),I=a(222),w=a(223),k=a(224),N=a(225),F=a(226),R=a(227),H=a(228),M=a(229),O=a(134),E=a(17),D=a(14),A=a(1),S=a(40),T=a(59),_=a(107),j=a(23),x=a(291),L=a(30),V=a(73),K=a(4),Z=a(25),q=a(6),B=a(9),z=a(8),U=a(85),X=a(5),G=a(292),W=a(36),$=a(231),J=a(60),Q=a(35),Y=a(230),ee=a(22),te=a(21),ae=a(49),ne=a(293),oe=a(56),le=a(29),re=a(15),de=a(64),ie=a(63),ue=a(65),se=r["ɵcrt"]({encapsulation:2,styles:[],data:{}}),me=r["ɵccf"]("ng-component",f,function(e){return r["ɵvid"](0,[(e()(),r["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,o,se)),r["ɵdid"](1,49152,null,0,f,[K.a,i.a,u.a,s.a,p,de.WrappedSocket,ie.a,ue.a],null,null)],null,null)},{},{},[]),pe=a(109),ce=a(16),fe=a(103),ge=a(34),ye=a(95),he=a(133),ve=a(54),be=a(39),Ce=a(91),Pe=a(61),Ie=a(115),we=a(111),ke=a(97),Ne=a(124),Fe=a(90),Re=a(219),He=a(110),Me=a(108),Oe=a(112),Ee=r["ɵcmf"](b,[C.b],function(e){return r["ɵmod"]([r["ɵmpd"](512,r.ComponentFactoryResolver,r["ɵCodegenComponentFactoryResolver"],[[8,[P.a,I.a,w.a,k.a,N.a,F.a,R.a,H.a,M.a,me]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["ɵmpd"](5120,r.LOCALE_ID,r["ɵq"],[[3,r.LOCALE_ID]]),r["ɵmpd"](4608,h.l,h.k,[r.LOCALE_ID,[2,h.t]]),r["ɵmpd"](5120,r.APP_ID,r["ɵi"],[]),r["ɵmpd"](5120,r.IterableDiffers,r["ɵn"],[]),r["ɵmpd"](5120,r.KeyValueDiffers,r["ɵo"],[]),r["ɵmpd"](4608,l.c,l.q,[h.c]),r["ɵmpd"](6144,r.Sanitizer,null,[l.c]),r["ɵmpd"](4608,l.f,pe.a,[]),r["ɵmpd"](5120,l.d,function(e,t,a,n,o){return[new l.k(e,t),new l.o(a),new l.n(n,o)]},[h.c,r.NgZone,h.c,h.c,l.f]),r["ɵmpd"](4608,l.e,l.e,[l.d,r.NgZone]),r["ɵmpd"](135680,l.m,l.m,[h.c]),r["ɵmpd"](4608,l.l,l.l,[l.e,l.m]),r["ɵmpd"](6144,r.RendererFactory2,null,[l.l]),r["ɵmpd"](6144,l.p,null,[l.m]),r["ɵmpd"](4608,r.Testability,r.Testability,[r.NgZone]),r["ɵmpd"](4608,l.h,l.h,[h.c]),r["ɵmpd"](4608,l.i,l.i,[h.c]),r["ɵmpd"](4608,d.i,d.o,[h.c,r.PLATFORM_ID,d.m]),r["ɵmpd"](4608,d.p,d.p,[d.i,d.n]),r["ɵmpd"](5120,d.a,function(e){return[e]},[d.p]),r["ɵmpd"](4608,d.l,d.l,[]),r["ɵmpd"](6144,d.j,null,[d.l]),r["ɵmpd"](4608,d.h,d.h,[d.j]),r["ɵmpd"](6144,d.b,null,[d.h]),r["ɵmpd"](4608,d.f,d.k,[d.b,r.Injector]),r["ɵmpd"](4608,d.c,d.c,[d.f]),r["ɵmpd"](4608,ce.q,ce.q,[]),r["ɵmpd"](4608,ce.d,ce.d,[]),r["ɵmpd"](4608,fe.a,fe.a,[z.a,A.a]),r["ɵmpd"](4608,ue.a,ue.a,[z.a,A.a]),r["ɵmpd"](4608,ie.a,ie.a,[]),r["ɵmpd"](4608,D.a,D.a,[]),r["ɵmpd"](4608,ge.a,ge.a,[K.a]),r["ɵmpd"](4608,Z.a,Z.a,[A.a,K.a,r.NgZone,B.a]),r["ɵmpd"](4608,ye.a,ye.a,[z.a,A.a]),r["ɵmpd"](5120,h.g,he.c,[h.r,[2,h.a],A.a]),r["ɵmpd"](4608,h.f,h.f,[h.g]),r["ɵmpd"](5120,ve.b,ve.d,[z.a,ve.a]),r["ɵmpd"](5120,re.a,re.b,[z.a,ve.b,h.f,be.b,r.ComponentFactoryResolver]),r["ɵmpd"](4608,Ce.a,Ce.a,[z.a,A.a,re.a]),r["ɵmpd"](4608,Pe.a,Pe.a,[z.a,A.a]),r["ɵmpd"](4608,Ie.a,Ie.a,[z.a,A.a,re.a]),r["ɵmpd"](4608,we.a,we.a,[A.a,K.a,B.a,z.a,q.l]),r["ɵmpd"](4608,ke.a,ke.a,[z.a,A.a]),r["ɵmpd"](4608,le.a,le.a,[K.a,A.a]),r["ɵmpd"](5120,de.WrappedSocket,Ne.SocketFactory,[Ne.SOCKET_CONFIG_TOKEN]),r["ɵmpd"](4608,Fe.a,Fe.a,[]),r["ɵmpd"](4608,v.a,v.a,[Fe.a]),r["ɵmpd"](4608,h.d,h.d,[r.LOCALE_ID]),r["ɵmpd"](4608,i.a,i.a,[]),r["ɵmpd"](4608,u.a,u.a,[]),r["ɵmpd"](4608,s.a,s.a,[]),r["ɵmpd"](4608,p,p,[ue.a,s.a,ie.a]),r["ɵmpd"](4608,g.a,g.a,[ue.a,ke.a]),r["ɵmpd"](4608,y.a,y.a,[ye.a]),r["ɵmpd"](512,h.b,h.b,[]),r["ɵmpd"](512,r.ErrorHandler,Re.a,[]),r["ɵmpd"](256,A.b,{},[]),r["ɵmpd"](1024,He.a,He.b,[]),r["ɵmpd"](1024,K.a,K.b,[l.b,He.a,r.NgZone]),r["ɵmpd"](1024,A.a,A.c,[A.b,K.a]),r["ɵmpd"](512,B.a,B.a,[K.a]),r["ɵmpd"](512,j.a,j.a,[]),r["ɵmpd"](512,z.a,z.a,[A.a,K.a,[2,j.a]]),r["ɵmpd"](512,q.l,q.l,[z.a]),r["ɵmpd"](256,ve.a,{links:[{loadChildren:"../pages/features/defeito/defeito-details/defeito-details.module.ngfactory#DefeitoDetailsPageModuleNgFactory",name:"DefeitoDetailsPage",segment:"defeito-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/defeito/defeito-home/defeito-home.module.ngfactory#DefeitoHomePageModuleNgFactory",name:"DefeitoHomePage",segment:"defeito-home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/defeito/defeito-insert/defeito-insert.module.ngfactory#DefeitoInsertPageModuleNgFactory",name:"DefeitoInsertPage",segment:"defeito-insert",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/faturamento/faturamento-details/faturamento-details.module.ngfactory#FaturamentoDetailsPageModuleNgFactory",name:"FaturamentoDetailsPage",segment:"faturamento-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/faturamento/faturamento-home/faturamento-home.module.ngfactory#FaturamentoHomePageModuleNgFactory",name:"FaturamentoHomePage",segment:"faturamento-home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/modelo/modelo-home/modelo-home.module.ngfactory#ModeloHomePageModuleNgFactory",name:"ModeloHomePage",segment:"modelo-home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/modelo/modelo-insert/modelo-insert.module.ngfactory#ModeloInsertPageModuleNgFactory",name:"ModeloInsertPage",segment:"modelo-insert",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/peca/peca-home/peca-home.module.ngfactory#PecaHomePageModuleNgFactory",name:"PecaHomePage",segment:"peca-home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/peca/peca-insert/peca-insert.module.ngfactory#PecaInsertPageModuleNgFactory",name:"PecaInsertPage",segment:"peca-insert",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/peca/peca-update/peca-update.module.ngfactory#PecaUpdatePageModuleNgFactory",name:"PecaUpdatePage",segment:"peca-update",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/venda/venda-completa/venda-completa.module.ngfactory#VendaCompletaPageModuleNgFactory",name:"VendaCompletaPage",segment:"venda-completa",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/venda/venda-details/venda-details.module.ngfactory#VendaDetailsPageModuleNgFactory",name:"VendaDetailsPage",segment:"venda-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/venda/venda-insert/venda-insert.module.ngfactory#VendaInsertPageModuleNgFactory",name:"VendaInsertPage",segment:"venda-insert",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomeModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/features/venda/venda-home/venda-home.module.ngfactory#VendaHomePageModuleNgFactory",name:"VendaHomePage",segment:"venda-home",priority:"low",defaultHistory:[]}]},[]),r["ɵmpd"](512,r.Compiler,r.Compiler,[]),r["ɵmpd"](512,Me.a,Me.a,[r.Compiler]),r["ɵmpd"](1024,be.b,be.c,[Me.a,r.Injector]),r["ɵmpd"](1024,r.APP_INITIALIZER,function(e,t,a,n,o,r,d,i,u,s,m,p,c){return[l.s(e),Oe.a(t),ie.b(a,n),we.b(o,r,d,i,u),be.d(s,m,p,c)]},[[2,r.NgProbeToken],A.a,K.a,B.a,A.a,K.a,B.a,z.a,q.l,A.a,ve.a,be.b,r.NgZone]),r["ɵmpd"](512,r.ApplicationInitStatus,r.ApplicationInitStatus,[[2,r.APP_INITIALIZER]]),r["ɵmpd"](131584,r.ApplicationRef,r.ApplicationRef,[r.NgZone,r["ɵConsole"],r.Injector,r.ErrorHandler,r.ComponentFactoryResolver,r.ApplicationInitStatus]),r["ɵmpd"](512,r.ApplicationModule,r.ApplicationModule,[r.ApplicationRef]),r["ɵmpd"](512,l.a,l.a,[[3,l.a]]),r["ɵmpd"](512,d.e,d.e,[]),r["ɵmpd"](512,d.d,d.d,[]),r["ɵmpd"](512,ce.o,ce.o,[]),r["ɵmpd"](512,ce.g,ce.g,[]),r["ɵmpd"](512,ce.m,ce.m,[]),r["ɵmpd"](512,he.a,he.a,[]),r["ɵmpd"](512,Ne.SocketIoModule,Ne.SocketIoModule,[]),r["ɵmpd"](512,b,b,[]),r["ɵmpd"](256,d.m,"XSRF-TOKEN",[]),r["ɵmpd"](256,d.n,"X-XSRF-TOKEN",[]),r["ɵmpd"](256,C.a,f,[]),r["ɵmpd"](256,h.a,"/",[]),r["ɵmpd"](256,Ne.SOCKET_CONFIG_TOKEN,{url:"https://agef-socketio.herokuapp.com/"},[])])});Object(r.enableProdMode)(),Object(l.j)().bootstrapModuleFactory(Ee)},284:function(e,t){}},[233]);
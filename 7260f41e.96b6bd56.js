(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{113:function(e,o,a){"use strict";a.r(o),a.d(o,"frontMatter",(function(){return i})),a.d(o,"metadata",(function(){return s})),a.d(o,"rightToc",(function(){return c})),a.d(o,"default",(function(){return u}));var n=a(1),t=a(6),r=(a(0),a(134)),i={id:"app",title:"Configurando o app",sidebar_label:"Configurando o aplicativo"},s={id:"push/app",title:"Configurando o app",description:"O primeiro passo \xe9 instalar as depend\xeancias necess\xe1rias no projeto mobile. Neste tutorial estou usando a vers\xe3o 5.0.5 do Ionic.",source:"@site/docs/push/app.md",permalink:"/noletodocs/docs/push/app",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/push/app.md",sidebar_label:"Configurando o aplicativo",sidebar:"someSidebar",next:{title:"Configurando o Firebase",permalink:"/noletodocs/docs/push/firebase"}},c=[{value:"Instalando o plugin Push",id:"instalando-o-plugin-push",children:[]},{value:"Instalando o plugin Device",id:"instalando-o-plugin-device",children:[]},{value:"Configurando o service",id:"configurando-o-service",children:[]},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[]}],p={rightToc:c};function u(e){var o=e.components,a=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:o,mdxType:"MDXLayout"}),Object(r.b)("p",null,"O primeiro passo \xe9 instalar as depend\xeancias necess\xe1rias no projeto mobile. Neste tutorial estou usando a vers\xe3o 5.0.5 do Ionic."),Object(r.b)("p",null,"A \xfanica depend\xeancia necess\xe1ria \xe9 a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ionicframework.com/docs/native/push"}),"Push"),", com ela conseguimos suporte as notifica\xe7\xf5es nativas do dispositivo. Este plugin \xe9 o respons\xe1vel por devolver uma chave de identifica\xe7\xe3o do dispositivo (que nesta documenta\xe7\xe3o posso chamar de v\xe1rios nomes: device_id, registrationId, token de registro do FMC)."),Object(r.b)("p",null,"Contudo, tamb\xe9m ser\xe1 aconselhado a instala\xe7\xe3o do plugin ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ionicframework.com/docs/native/device"}),"Device"),", onde conseguimos recolher informa\xe7\xf5es do dispositivo do usu\xe1rio, como marca e modelo."),Object(r.b)("p",null,"Com os plugins instalados, um service ser\xe1 criado que ser\xe1 o respons\xe1vel por ouvir os eventos de notifica\xe7\xf5es disparados pelo Firebase, que ser\xe1 configurado na pr\xf3xima se\xe7\xe3o deste tutorial, e tamb\xe9m por salvar a rela\xe7\xe3o 'usu\xe1rio-dispositivo' no servidor web."),Object(r.b)("h2",{id:"instalando-o-plugin-push"},"Instalando o plugin Push"),Object(r.b)("p",null,"Instale o plugin Push com os comandos a seguir. Ap\xf3s isso, adicione o m\xf3dulo Push no seu ",Object(r.b)("inlineCode",{parentName:"p"},"app.module"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"ionic cordova plugin add phonegap-plugin-push\nnpm install @ionic-native/push\n")),Object(r.b)("p",null,"Quando escrevi esta documenta\xe7\xe3o, em 8 de maio de 2020, as vers\xf5es instaladas deste plugins foram:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"@ionic-native/push": "^5.25.0"\n"phonegap-plugin-push": "^2.3.0"\n')),Object(r.b)("h2",{id:"instalando-o-plugin-device"},"Instalando o plugin Device"),Object(r.b)("p",null,"Instale o plugin Device com os comandos a seguir. Ap\xf3s isso, adicione o m\xf3dulo Push no seu ",Object(r.b)("inlineCode",{parentName:"p"},"app.module"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"ionic cordova plugin add cordova-plugin-device\nnpm install @ionic-native/device\n")),Object(r.b)("p",null,"Quando escrevi esta documenta\xe7\xe3o, em 8 de maio de 2020, as vers\xf5es instaladas deste plugins foram:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"@ionic-native/device": "^5.25.0"\n"cordova-plugin-device": "^2.0.2"\n')),Object(r.b)("h2",{id:"configurando-o-service"},"Configurando o service"),Object(r.b)("p",null,"Agora vamos criar um service para tratar a configura\xe7\xe3o do plugin Push no aplicativo, al\xe9m de tamb\xe9m colher as informa\xe7\xf5es do dispositivo pelo plugin Device."),Object(r.b)("p",null,"O conte\xfado deste service voc\xea pode obter aqui: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitlab.com/victorsysout/noletocodes/-/blob/master/push/app/push.service.ts"}),"C\xf3digo do PushService"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Neste service tamb\xe9m \xe9 utilizado um HttpService, que \xe9 basicamente um service para lidar com as requisi\xe7\xf5es http. Duas rotas no servidor s\xe3o utilizadas neste service: ",Object(r.b)("strong",{parentName:"p"},"device/register")," e ",Object(r.b)("strong",{parentName:"p"},"device/unregister"),". Verifique de configurar essas duas rotas corretamente no arquivo api.php no servidor web."),Object(r.b)("p",{parentName:"div"},"O controller e conte\xfado dos m\xe9todos relacionados com estas rotas ser\xe1 disponibilizado nas pr\xf3ximas se\xe7\xf5es desta documenta\xe7\xe3o."))),Object(r.b)("p",null,"Com este service em m\xe3os, agora vamos aos detalhes. Voc\xea deve chamar o m\xe9todo ",Object(r.b)("strong",{parentName:"p"},"up")," assim que um usu\xe1rio for logado no aplicativo. Aconselho colocar essa chamada no seu app.components, onde voc\xea pode fazer as primeiras verifica\xe7\xf5es no aplicativo."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'this.platform.ready().then(() => {\n\n    // Recebe notifica\xe7\xe3o quando usu\xe1rio faz login ou logout\n    this.authService.authState.subscribe(state => {\n        \n        // state = true: login, state = false: logout\n        if (state) {\n\n            this.pushService.up().then(notificationObservable => {\n\n                if (this.ns) {\n                    this.ns.unsubscribe();\n                }\n\n                this.ns = notificationObservable.subscribe(data => {\n                    console.log("notifica\xe7\xe3o recebida", data);\n                });\n\n            }).catch(err => {\n                console.error("err", err);\n            });\n        }\n\n    });\n\n});\n')),Object(r.b)("p",null,"O m\xe9todo ",Object(r.b)("strong",{parentName:"p"},"down"),", que desligar\xe1 a inscri\xe7\xe3o de notifica\xe7\xf5es no aplicativo deve ser chamado no logout do usu\xe1rio, mas aten\xe7\xe3o: este m\xe9todo deve ser chamado antes de limpar o access token do usu\xe1rio, porque ser\xe1 feita uma requisi\xe7\xe3o no servidor onde \xe9 necess\xe1rio receber o usu\xe1rio e assim ent\xe3o remover o dispositivo do servidor."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'public logout() {\n\n    this.pushService.down().then(() => {\n    }).catch(err => {\n        console.error(err);\n    });\n\n    this.user = null;\n    this.storage.remove("user").catch(() => {});\n    this.httpService.destroyToken();\n    this.authState.next(false);\n}\n')),Object(r.b)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),Object(r.b)("p",null,"Verifique que no app.components, ao receber a notifica\xe7\xe3o estamos apenas exibindo os dados no console. Agora com isso voc\xea pode implementar qual for o comportamento que seu aplicativo deve apresentar ao receber uma notifica\xe7\xe3o, seja um alert (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ionicframework.com/docs/api/alert"}),"ion-alert"),") ou um toast (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ionicframework.com/docs/api/toast"}),"ion-toast"),")."),Object(r.b)("p",null,"Para finalizar a implementa\xe7\xe3o no aplicativo s\xf3 nos resta adicionar algumas configura\xe7\xf5es referentes ao Firebase, que \xe9 o servi\xe7o respons\xe1vel por comunicar nosso servidor web com o aplicativo."))}u.isMDXComponent=!0},134:function(e,o,a){"use strict";a.d(o,"a",(function(){return l})),a.d(o,"b",(function(){return m}));var n=a(0),t=a.n(n);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function i(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?i(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function c(e,o){if(null==e)return{};var a,n,t=function(e,o){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=t.a.createContext({}),u=function(e){var o=t.a.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):s({},o,{},e)),a},l=function(e){var o=u(e.components);return t.a.createElement(p.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return t.a.createElement(t.a.Fragment,{},o)}},b=Object(n.forwardRef)((function(e,o){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(a),b=n,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||r;return a?t.a.createElement(m,s({ref:o},p,{components:a})):t.a.createElement(m,s({ref:o},p))}));function m(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
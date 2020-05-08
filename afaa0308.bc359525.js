(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{120:function(e,o,a){"use strict";a.r(o),a.d(o,"frontMatter",(function(){return i})),a.d(o,"metadata",(function(){return s})),a.d(o,"rightToc",(function(){return c})),a.d(o,"default",(function(){return d}));var t=a(1),n=a(6),r=(a(0),a(134)),i={id:"firebase",title:"Configurando o Firebase",sidebar_label:"Configurando o Firebase"},s={id:"push/firebase",title:"Configurando o Firebase",description:"O Firebase \xe9 o servi\xe7o respons\xe1vel em comunicar o nosso servidor web com o aplicativo. \xc9 atrav\xe9s do **device_id** (que recebemos na se\xe7\xe3o anterior pelo plugin Push), uma chave de identifica\xe7\xe3o do dispositivo, que conseguimos notificar um ou mais usu\xe1rios. ",source:"@site/docs/push/firebase.md",permalink:"/noletodocs/docs/push/firebase",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/push/firebase.md",sidebar_label:"Configurando o Firebase",sidebar:"someSidebar",previous:{title:"Configurando o app",permalink:"/noletodocs/docs/push/app"},next:{title:"Configurando o servidor web",permalink:"/noletodocs/docs/push/web"}},c=[{value:"Configurando plataforma Android",id:"configurando-plataforma-android",children:[]},{value:"Configurando plataforma iOS",id:"configurando-plataforma-ios",children:[]},{value:"Testando as notifica\xe7\xf5es",id:"testando-as-notifica\xe7\xf5es",children:[]}],p={rightToc:c};function d(e){var o=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},p,a,{components:o,mdxType:"MDXLayout"}),Object(r.b)("p",null,"O Firebase \xe9 o servi\xe7o respons\xe1vel em comunicar o nosso servidor web com o aplicativo. \xc9 atrav\xe9s do ",Object(r.b)("strong",{parentName:"p"},"device_id")," (que recebemos na se\xe7\xe3o anterior pelo plugin Push), uma chave de identifica\xe7\xe3o do dispositivo, que conseguimos notificar um ou mais usu\xe1rios. "),Object(r.b)("p",null,"Acesse o ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://console.firebase.google.com/u/0/?hl=pt-br"}),"Console do Firebase")," e crie um novo projeto."),Object(r.b)("h2",{id:"configurando-plataforma-android"},"Configurando plataforma Android"),Object(r.b)("p",null,"Na tela de configura\xe7\xe3o do projeto, procure pela a\xe7\xe3o de adicionar um app e escolha a plataforma Android. Informe o nome do pacote (que pode ser obtido no config.xml do aplicativo) e clique em ",Object(r.b)("em",{parentName:"p"},"Registrar app"),". N\xe3o \xe9 necess\xe1rio preencher todas as informa\xe7\xf5es."),Object(r.b)("p",null,"Fa\xe7a o download do arquivo ",Object(r.b)("inlineCode",{parentName:"p"},"google-services.json")," e coloque na raiz do seu projeto mobile."),Object(r.b)("p",null,"Com este arquivo na raiz do seu projeto, adicione a seguinte linha no seu ",Object(r.b)("inlineCode",{parentName:"p"},"config.xml"),", na se\xe7\xe3o da plataforma android."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<platform name="android">\n    ...\n    <resource-file src="google-services.json" target="app/google-services.json" />\n</platform>\n')),Object(r.b)("p",null,"Se voc\xea fez tudo certo at\xe9 aqui o seu aplicativo est\xe1 preparado para receber notifica\xe7\xf5es! Logo abaixo mostrarei como fazer para testar, antes de fazer a implementa\xe7\xe3o no servidor, o funcionamento das notifica\xe7\xf5es."),Object(r.b)("h2",{id:"configurando-plataforma-ios"},"Configurando plataforma iOS"),Object(r.b)("p",null,"..."),Object(r.b)("h2",{id:"testando-as-notifica\xe7\xf5es"},"Testando as notifica\xe7\xf5es"),Object(r.b)("p",null,"No dashboard do seu projeto Firebase, acesse a p\xe1gina ",Object(r.b)("strong",{parentName:"p"},"Cloud Messaging"),", que est\xe1 na se\xe7\xe3o Ampliar da barra lateral esquerda. Procure pelo bot\xe3o ",Object(r.b)("strong",{parentName:"p"},"Send your first message"),"."),Object(r.b)("p",null,"Para um teste r\xe1pido, preencha os campos ",Object(r.b)("em",{parentName:"p"},"T\xedtulo da notifica\xe7\xe3o")," e ",Object(r.b)("em",{parentName:"p"},"Texto da notifica\xe7\xe3o"),". Clique em ",Object(r.b)("strong",{parentName:"p"},"Enviar mensagem de teste"),". Um modal ser\xe1 aberto onde voc\xea pode adicionar (ou selecionar chaves j\xe1 salvas previamente) chaves de dispositivo."),Object(r.b)("p",null,"A notifica\xe7\xe3o chegar\xe1 no seu aplicativo da seguinte forma:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n    additionalData: {\n        coldstart: false,\n        foreground: true\n    },\n    message: "Essa \xe9 uma notifica\xe7\xe3o de teste!",\n    title: "Ol\xe1!"\n}\n')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Quando o aplicativo estiver em background, as notifica\xe7\xf5es ser\xe3o mostradas de forma nativa. Contudo, n\xe3o ser\xe1 poss\xedvel ter acesso (ou fazer tratamentos) com os dados recebidos da notifica\xe7\xe3o."))))}d.isMDXComponent=!0},134:function(e,o,a){"use strict";a.d(o,"a",(function(){return l})),a.d(o,"b",(function(){return m}));var t=a(0),n=a.n(t);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function i(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?i(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function c(e,o){if(null==e)return{};var a,t,n=function(e,o){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),d=function(e){var o=n.a.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):s({},o,{},e)),a},l=function(e){var o=d(e.components);return n.a.createElement(p.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},b=Object(t.forwardRef)((function(e,o){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(a),b=t,m=l["".concat(i,".").concat(b)]||l[b]||u[b]||r;return a?n.a.createElement(m,s({ref:o},p,{components:a})):n.a.createElement(m,s({ref:o},p))}));function m(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=b;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
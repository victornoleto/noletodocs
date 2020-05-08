(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,r,o){"use strict";o.r(r),o.d(r,"frontMatter",(function(){return s})),o.d(r,"metadata",(function(){return i})),o.d(r,"rightToc",(function(){return c})),o.d(r,"default",(function(){return p}));var t=o(1),a=o(6),n=(o(0),o(134)),s={id:"web",title:"Configurando o servidor web",sidebar_label:"Configurando o servidor web"},i={id:"push/web",title:"Configurando o servidor web",description:"A configura\xe7\xe3o do servidor web se dar\xe1 em duas partes. Na primeira, vamos criar as estruturas necess\xe1rias para salvar o relacionamento do usu\xe1rio com o dispositivo. Na segunda falaremos sobre a biblioteca respons\xe1vel por enviar notifica\xe7\xf5es, atrav\xe9s de requisi\xe7\xf5es HTTP para o Firebase.",source:"@site/docs/push/web.md",permalink:"/noletodocs/docs/push/web",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/push/web.md",sidebar_label:"Configurando o servidor web",sidebar:"someSidebar",previous:{title:"Configurando o Firebase",permalink:"/noletodocs/docs/push/firebase"}},c=[{value:"Configurando as estruturas",id:"configurando-as-estruturas",children:[]},{value:"Configurando a biblioteca",id:"configurando-a-biblioteca",children:[]}],u={rightToc:c};function p(e){var r=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(t.a)({},u,o,{components:r,mdxType:"MDXLayout"}),Object(n.b)("p",null,"A configura\xe7\xe3o do servidor web se dar\xe1 em duas partes. Na primeira, vamos criar as estruturas necess\xe1rias para salvar o relacionamento do usu\xe1rio com o dispositivo. Na segunda falaremos sobre a biblioteca respons\xe1vel por enviar notifica\xe7\xf5es, atrav\xe9s de requisi\xe7\xf5es HTTP para o Firebase."),Object(n.b)("h2",{id:"configurando-as-estruturas"},"Configurando as estruturas"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(t.a)({parentName:"li"},{href:"https://gitlab.com/victorsysout/noletocodes/-/blob/master/push/web/create_users_devices_table.php"}),"C\xf3digo da migration"),";"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(t.a)({parentName:"li"},{href:"https://gitlab.com/victorsysout/noletocodes/-/blob/master/push/web/UserDevice.php"}),"C\xf3digo do model"),";"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(t.a)({parentName:"li"},{href:"https://gitlab.com/victorsysout/noletocodes/-/blob/master/push/web/UserDeviceController.php"}),"C\xf3digo do controller"),";")),Object(n.b)("p",null,"Com as tr\xeas estruturas criadas, vale a pena lembrar que tamb\xe9m devemos adicionar no nosso arquivo de rotas, ",Object(n.b)("inlineCode",{parentName:"p"},"api.php")," as duas rotas necess\xe1rias para o funcionamento do aplicativo:"),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'Route::post("device/register", "UserDeviceController@register");\nRoute::post("device/unregister", "UserDeviceController@unregister");\n')),Object(n.b)("p",null,"Antes de seguir para o pr\xf3ximo passo, sugiro testar todo o ciclo agora. Logue-se no aplicativo e verifique se a chave e dados do dispositivo foram salvos e atrelados com o usu\xe1rio nesta nossa tabela."),Object(n.b)("h2",{id:"configurando-a-biblioteca"},"Configurando a biblioteca"),Object(n.b)("p",null,"Para poder enviar notifica\xe7\xf5es por requisi\xe7\xe3o HTTP \xe9 necess\xe1rio copiar uma chave do seu projeto Firebase e adicionar no seu projeto web. Acesse as configura\xe7\xf5es do projeto (\xedcone engrenagem, na barra lateral esquerda do dashboard), v\xe1 na aba ",Object(n.b)("strong",{parentName:"p"},"Cloud Messassing")," e copie o c\xf3digo ",Object(n.b)("strong",{parentName:"p"},"Chave do servidor"),"."),Object(n.b)("p",null,"Crie uma v\xe1r\xedavel no ",Object(n.b)("inlineCode",{parentName:"p"},".env")," do seu projeto com o nome de ",Object(n.b)("inlineCode",{parentName:"p"},"FB_CLOUD_MESSAGING_SERVER_KEY")," e cole este c\xf3digo l\xe1."),Object(n.b)("p",null,"Adicione esta biblioteca ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://gitlab.com/victorsysout/noletocodes/-/blob/master/push/web/Push.php"}),"Push.php")," no seu projeto web e ap\xf3s isso voc\xea estar\xe1 pronto para enviar notifica\xe7\xf5es em qualquer parte do seu c\xf3digo para qualquer usu\xe1rio."),Object(n.b)("pre",null,Object(n.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'public function test(Request $request) {\n\n    $title = "T\xedtulo da notifica\xe7\xe3o";\n    $text = "Essa \xe9 uma notifica\xe7\xe3o de teste: ".date("Y-m-d H:i:s");\n    $userId = 1;\n\n    $push = new Push();\n    $result = $push->sendToUser($userId, $title, $text);\n\n}\n')))}p.isMDXComponent=!0},134:function(e,r,o){"use strict";o.d(r,"a",(function(){return l})),o.d(r,"b",(function(){return m}));var t=o(0),a=o.n(t);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function s(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?s(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function c(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),o=r;return e&&(o="function"==typeof e?e(r):i({},r,{},e)),o},l=function(e){var r=p(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=Object(t.forwardRef)((function(e,r){var o=e.components,t=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(o),d=t,m=l["".concat(s,".").concat(d)]||l[d]||b[d]||n;return o?a.a.createElement(m,i({ref:r},u,{components:o})):a.a.createElement(m,i({ref:r},u))}));function m(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var n=o.length,s=new Array(n);s[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var u=2;u<n;u++)s[u]=o[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);
---
id: firebase
title: Configurando o Firebase
sidebar_label: Configurando o Firebase
---

O Firebase é o serviço responsável em comunicar o nosso servidor web com o aplicativo. É através do **device_id** (que recebemos na seção anterior pelo plugin Push), uma chave de identificação do dispositivo, que conseguimos notificar um ou mais usuários. 

Acesse o [Console do Firebase](https://console.firebase.google.com/u/0/?hl=pt-br) e crie um novo projeto.

## Configurando plataforma Android

Na tela de configuração do projeto, procure pela ação de adicionar um app e escolha a plataforma Android. Informe o nome do pacote (que pode ser obtido no config.xml do aplicativo) e clique em *Registrar app*. Não é necessário preencher todas as informações.

Faça o download do arquivo ```google-services.json``` e coloque na raiz do seu projeto mobile.

Com este arquivo na raiz do seu projeto, adicione a seguinte linha no seu ```config.xml```, na seção da plataforma android.

```xml
<platform name="android">
    ...
    <resource-file src="google-services.json" target="app/google-services.json" />
</platform>
```

Se você fez tudo certo até aqui o seu aplicativo está preparado para receber notificações! Logo abaixo mostrarei como fazer para testar, antes de fazer a implementação no servidor, o funcionamento das notificações.

## Configurando plataforma iOS

...

## Testando as notificações

No dashboard do seu projeto Firebase, acesse a página **Cloud Messaging**, que está na seção Ampliar da barra lateral esquerda. Procure pelo botão **Send your first message**.

Para um teste rápido, preencha os campos *Título da notificação* e *Texto da notificação*. Clique em **Enviar mensagem de teste**. Um modal será aberto onde você pode adicionar (ou selecionar chaves já salvas previamente) chaves de dispositivo.

A notificação chegará no seu aplicativo da seguinte forma:

```json
{
    additionalData: {
        coldstart: false,
        foreground: true
    },
    message: "Essa é uma notificação de teste!",
    title: "Olá!"
}
```

:::info
Quando o aplicativo estiver em background, as notificações serão mostradas de forma nativa. Contudo, não será possível ter acesso (ou fazer tratamentos) com os dados recebidos da notificação.
:::

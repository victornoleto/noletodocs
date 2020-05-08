---
id: web
title: Configurando o servidor web
sidebar_label: Configurando o servidor web
---

A configuração do servidor web se dará em duas partes. Na primeira, vamos criar as estruturas necessárias para salvar o relacionamento do usuário com o dispositivo. Na segunda falaremos sobre a biblioteca responsável por enviar notificações, através de requisições HTTP para o Firebase.

## Configurando as estruturas

1. [Código da migration](https://gitlab.com/victorsysout/noletocodes/-/blob/master/push/web/create_users_devices_table.php);
2. [Código do model](https://gitlab.com/victorsysout/noletocodes/-/blob/master/push/web/UserDevice.php);
3. [Código do controller](https://gitlab.com/victorsysout/noletocodes/-/blob/master/push/web/UserDeviceController.php);

Com as três estruturas criadas, vale a pena lembrar que também devemos adicionar no nosso arquivo de rotas, ```api.php``` as duas rotas necessárias para o funcionamento do aplicativo:

```javascript
Route::post("device/register", "UserDeviceController@register");
Route::post("device/unregister", "UserDeviceController@unregister");
```

Antes de seguir para o próximo passo, sugiro testar todo o ciclo agora. Logue-se no aplicativo e verifique se a chave e dados do dispositivo foram salvos e atrelados com o usuário nesta nossa tabela.

## Configurando a biblioteca

Para poder enviar notificações por requisição HTTP é necessário copiar uma chave do seu projeto Firebase e adicionar no seu projeto web. Acesse as configurações do projeto (ícone engrenagem, na barra lateral esquerda do dashboard), vá na aba **Cloud Messassing** e copie o código **Chave do servidor**.

Crie uma váríavel no ```.env``` do seu projeto com o nome de ```FB_CLOUD_MESSAGING_SERVER_KEY``` e cole este código lá.

Adicione esta biblioteca [Push.php](https://gitlab.com/victorsysout/noletocodes/-/blob/master/push/web/Push.php) no seu projeto web e após isso você estará pronto para enviar notificações em qualquer parte do seu código para qualquer usuário.

```javascript
public function test(Request $request) {

    $title = "Título da notificação";
    $text = "Essa é uma notificação de teste: ".date("Y-m-d H:i:s");
    $userId = 1;

    $push = new Push();
    $result = $push->sendToUser($userId, $title, $text);

}
```


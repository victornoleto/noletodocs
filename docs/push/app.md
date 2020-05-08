---
id: app
title: Configurando o app
sidebar_label: Configurando o aplicativo
---

O primeiro passo é instalar as dependências necessárias no projeto mobile. Neste tutorial estou usando a versão 5.0.5 do Ionic.

A única dependência necessária é a [Push](https://ionicframework.com/docs/native/push), com ela conseguimos suporte as notificações nativas do dispositivo. Este plugin é o responsável por devolver uma chave de identificação do dispositivo (que nesta documentação posso chamar de vários nomes: device_id, registrationId, token de registro do FMC).

Contudo, também será aconselhado a instalação do plugin [Device](https://ionicframework.com/docs/native/device), onde conseguimos recolher informações do dispositivo do usuário, como marca e modelo.

Com os plugins instalados, um service será criado que será o responsável por ouvir os eventos de notificações disparados pelo Firebase, que será configurado na próxima seção deste tutorial, e também por salvar a relação 'usuário-dispositivo' no servidor web.

## Instalando o plugin Push

Instale o plugin Push com os comandos a seguir. Após isso, adicione o módulo Push no seu ```app.module```.

```console
ionic cordova plugin add phonegap-plugin-push
npm install @ionic-native/push
```
Quando escrevi esta documentação, em 8 de maio de 2020, as versões instaladas deste plugins foram:

```json
"@ionic-native/push": "^5.25.0"
"phonegap-plugin-push": "^2.3.0"
```

## Instalando o plugin Device

Instale o plugin Device com os comandos a seguir. Após isso, adicione o módulo Push no seu ```app.module```.

```console
ionic cordova plugin add cordova-plugin-device
npm install @ionic-native/device
```

Quando escrevi esta documentação, em 8 de maio de 2020, as versões instaladas deste plugins foram:

```json
"@ionic-native/device": "^5.25.0"
"cordova-plugin-device": "^2.0.2"
```

## Configurando o service

Agora vamos criar um service para tratar a configuração do plugin Push no aplicativo, além de também colher as informações do dispositivo pelo plugin Device.

O conteúdo deste service você pode obter aqui: [Código do PushService](https://gitlab.com/victorsysout/noletocodes/-/blob/master/push/app/push.service.ts).

:::info
Neste service também é utilizado um HttpService, que é basicamente um service para lidar com as requisições http. Duas rotas no servidor são utilizadas neste service: **device/register** e **device/unregister**. Verifique de configurar essas duas rotas corretamente no arquivo api.php no servidor web.

O controller e conteúdo dos métodos relacionados com estas rotas será disponibilizado nas próximas seções desta documentação.
:::

Com este service em mãos, agora vamos aos detalhes. Você deve chamar o método **up** assim que um usuário for logado no aplicativo. Aconselho colocar essa chamada no seu app.components, onde você pode fazer as primeiras verificações no aplicativo.

```javascript
this.platform.ready().then(() => {

    // Recebe notificação quando usuário faz login ou logout
    this.authService.authState.subscribe(state => {
        
        // state = true: login, state = false: logout
        if (state) {

            this.pushService.up().then(notificationObservable => {

                if (this.ns) {
                    this.ns.unsubscribe();
                }

                this.ns = notificationObservable.subscribe(data => {
                    console.log("notificação recebida", data);
                });

            }).catch(err => {
                console.error("err", err);
            });
        }

    });

});
```

O método **down**, que desligará a inscrição de notificações no aplicativo deve ser chamado no logout do usuário, mas atenção: este método deve ser chamado antes de limpar o access token do usuário, porque será feita uma requisição no servidor onde é necessário receber o usuário e assim então remover o dispositivo do servidor.

```javascript
public logout() {

    this.pushService.down().then(() => {
    }).catch(err => {
        console.error(err);
    });

    this.user = null;
    this.storage.remove("user").catch(() => {});
    this.httpService.destroyToken();
    this.authState.next(false);
}
```


## Conclusão

Verifique que no app.components, ao receber a notificação estamos apenas exibindo os dados no console. Agora com isso você pode implementar qual for o comportamento que seu aplicativo deve apresentar ao receber uma notificação, seja um alert ([ion-alert](https://ionicframework.com/docs/api/alert)) ou um toast ([ion-toast](https://ionicframework.com/docs/api/toast)).

Para finalizar a implementação no aplicativo só nos resta adicionar algumas configurações referentes ao Firebase, que é o serviço responsável por comunicar nosso servidor web com o aplicativo.
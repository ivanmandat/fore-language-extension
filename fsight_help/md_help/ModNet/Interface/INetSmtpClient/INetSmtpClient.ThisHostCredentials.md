# INetSmtpClient.ThisHostCredentials

INetSmtpClient.ThisHostCredentials
-


# INetSmtpClient.ThisHostCredentials


## Синтаксис


ThisHostCredentials(AuthProtocol: String): [INetNetworkCredential](../INetNetworkCredential/INetNetworkCredential.htm);


## Параметры


AuthProtocol. Протокол, используемый
 для аутентификации пользователя на SMTP-сервере.


## Описание


Свойство ThisHostCredentials
 определяет учетные данные для передающего почтового сервера SMTP, который
 будет использоваться при отправке сообщений электронной почты.


## Комментарии


В качестве значения параметра AuthProtocol
 укажите один из протоколов, которые поддерживает SMTP-сервер, с которым
 осуществляется работа, например NTLM,
 PLAIN, LOGIN,
 DIGEST-MD5, GSSAPI
 и другие. Список поддерживаемых протоколов можно получить изучив параметры
 конкретного SMTP-сервера. Если протокол не известен, укажите пустую строку.
 В этом случае SMTP-сервер сам выберет, каким образом будет осуществляться
 аутентификация пользователя.


## Пример


Пример использования приведен в описании метода [Send](INetSmtpClient.Send.htm).


См. также:


[INetSmtpClient](INetSmtpClient.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

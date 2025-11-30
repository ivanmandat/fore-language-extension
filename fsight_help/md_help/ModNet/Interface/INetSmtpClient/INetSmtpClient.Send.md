# INetSmtpClient.Send

INetSmtpClient.Send
-


# INetSmtpClient.Send


## Синтаксис


Send(Message: [INetMailMessage](../INetMailMessage/INetMailMessage.htm));


## Параметры


Message. Электронное почтовое
 сообщение, которое необходимо отправить.


## Описание


Метод Send осуществляет отправку
 сообщения электронной почты.


## Комментарии


Отправка сообщения осуществляется на почтовый сервер, указанный при
 инициализации в конструкторе [CurlSmtpClient.CreateWithHost](../../Class/CurlSmtpClient/CurlSmtpClient.CreateWithHost.htm)
 или [CurlSmtpClient.CreateWithHostAndPort](../../Class/CurlSmtpClient/CurlSmtpClient.CreateWithHostAndPort.htm),
 либо на сервер, заданный в свойстве [INetSmtpClient.Host](INetSmtpClient.Host.htm).
 Отправка осуществляется с учётом параметров, заданных в свойствах [INetSmtpClient.Port](INetSmtpClient.Port.htm)
 и [INetSmtpClient.Timeout](INetSmtpClient.Timeout.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Net.


			Sub UserProc;

Var

    From_, To_: INetMailAddress;

    Message: INetMailMessage;

    Client: INetSmtpClient;

    Credential: INetNetworkCredential;

Begin

    From_ := New CurlMailAddress.Create("ivanov@server.ru");

    To_ := New CurlMailAddress.Create("petrov@mail.ru");

    Message := New CurlMailMessage.CreateWithFromAndTo(From_, To_);

    Message.Subject := "Тестовое письмо";

    Message.Body := "Текст письма";

    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

    Credential := New CurlNetworkCredential.Create("user", "password", "work");

    Client.ThisHostCredentials("") := Credential;

    Client.Send(Message);

End Sub UserProc;


Указанная процедура позволяет отправить сообщение электронной почты
 через указанный почтовый сервер. Для авторизации на почтовом сервере будут
 использоваться указанные учётные данные.


См. также:


[INetSmtpClient](INetSmtpClient.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

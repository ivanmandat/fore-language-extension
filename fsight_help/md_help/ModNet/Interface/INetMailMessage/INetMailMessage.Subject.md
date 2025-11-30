# INetMailMessage.Subject

INetMailMessage.Subject
-


# INetMailMessage.Subject


## Синтаксис


Subject: String;


## Описание


Свойство Subject определяет
 заголовок темы сообщения электронной почты.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Net.


			Sub UserProc;

Var

    From_, To_: INetMailAddress;

    Message: INetMailMessage;

    Client: INetSmtpClient;

Begin

    From_ := New CurlMailAddress.Create("ivanov@server.ru");

    To_ := New CurlMailAddress.Create("petrov@mail.ru");

    Message := New CurlMailMessage.CreateWithFromAndTo(From_, To_);

    Message.Subject := "Тестовое письмо";

    Message.Body := "Текст письма";

    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

    Client.Send(Message);

End Sub UserProc;


После выполнения примера будет отправлено письмо через указанный почтовый
 сервер. Данное письмо создаётся с учётом адреса отправителя и получателя,
 без отправки копий кому-либо.


См. также:


[INetMailMessage](INetMailMessage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

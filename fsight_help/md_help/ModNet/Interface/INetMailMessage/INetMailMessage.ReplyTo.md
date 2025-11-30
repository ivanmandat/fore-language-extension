# INetMailMessage.ReplyTo

INetMailMessage.ReplyTo
-


# INetMailMessage.ReplyTo


## Синтаксис


ReplyTo: [INetMailAddress](../INetMailAddress/INetMailAddress.htm);


## Описание


Свойство ReplyTo определяет
 адрес, по которому будет отправляться ответ на данное письмо.


## Комментарии


Если свойство не установлено, то по умолчанию ответ будет поступать
 на адрес отправителя.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Net.


			Sub UserProc;

Var

    ReplyAdress, From_, To_: INetMailAddress;

    Message: INetMailMessage;

    Attach: INetAttachment;

    Client: INetSmtpClient;

Begin

    From_ := New CurlMailAddress.Create("ivanov@server.ru");

    To_ := New CurlMailAddress.Create("petrov@mail.ru");

    ReplyAdress := New CurlMailAddress.Create("user1@mail.ru");

    Message := New CurlMailMessage.CreateWithFromAndTo(From_, To_);

    Message.Subject := "Тестовое письмо";

    Message.Body := "Текст письма";

    Message.ReplyTo := ReplyAdress;

    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

    Client.Send(Message);

End Sub UserProc;


После выполнения примера будет отправлено письмо через указанный почтовый
 сервер. Данное письмо создаётся с учётом адреса отправителя и получателя,
 без отправки копий кому-либо. Ответ на данное письмо будет перенаправлен
 по адресу user1@mail.ru.


См. также:


[INetMailMessage](INetMailMessage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

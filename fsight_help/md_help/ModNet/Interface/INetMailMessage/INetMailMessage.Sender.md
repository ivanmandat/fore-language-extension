# INetMailMessage.Sender

INetMailMessage.Sender
-


# INetMailMessage.Sender


## Синтаксис


Sender: [INetMailAddress](../INetMailAddress/INetMailAddress.htm);


## Описание


Свойство Sender определяет адрес,
 по которому будет отправлено оповещение с почтового сервера в случае неудачной
 доставки сообщения.


## Комментарии


Если свойство не установлено, то по умолчанию оповещение будет поступать
 на адрес отправителя.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Net.


			Sub UserProc;

Var

    SenderAdress, From_, To_: INetMailAddress;

    Message: INetMailMessage;

    Client: INetSmtpClient;

Begin

    From_ := New CurlMailAddress.Create("ivanov@server.ru");

    To_ := New CurlMailAddress.Create("123@mail.ru");

    SenderAdress := New CurlMailAddress.Create("admin1@mail.ru");

    Message := New CurlMailMessage.CreateWithFromAndTo(From_, To_);

    Message.Subject := "Тестовое письмо";

    Message.Body := "Текст письма";

    Message.Sender := SenderAdress;

    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

    Client.Send(Message);

End Sub UserProc;


После выполнения примера будет отправлено письмо через указанный почтовый
 сервер по адресу 123@mail.ru. В случае неудачной доставки на адрес admin1@mail.ru
 придёт соответствующее оповещение с почтового сервера.


См. также:


[INetMailMessage](INetMailMessage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

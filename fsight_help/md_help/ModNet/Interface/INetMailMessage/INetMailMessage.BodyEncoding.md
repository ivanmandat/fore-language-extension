# INetMailMessage.BodyEncoding

INetMailMessage.BodyEncoding
-


# INetMailMessage.BodyEncoding


## Синтаксис


BodyEncoding: [CodePage](ForeSys.chm::/Enums/CodePage.htm);


## Описание


Свойство BodyEncoding определяет
 кодовую страницу, используемую для кодировки тела письма.


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

    Message.SubjectEncoding := CodePage.KOI8U;

    Message.BodyEncoding := CodePage.KOI8U;

    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

    Client.Send(Message);

End Sub UserProc;


После выполнения примера будет отправлено письмо через указанный почтовый
 сервер. Данное письмо создаётся с учётом адреса отправителя и получателя,
 без отправки копий кому-либо. При отправке для тела и заголовка письма
 будет использоваться кодировка кириллица (KOI8-U).


См. также:


[INetMailMessage](INetMailMessage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

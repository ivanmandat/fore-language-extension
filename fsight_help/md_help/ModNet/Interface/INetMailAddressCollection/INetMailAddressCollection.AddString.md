# INetMailAddressCollection.AddString

INetMailAddressCollection.AddString
-


# INetMailAddressCollection.AddString


## Синтаксис


AddString(Value: String);


## Параметры


Value. Электронный адрес, который
 необходимо добавить в коллекцию.


Примечание.
 Формат электронного адреса должен соответствовать формату, используемому
 при организации электронной почты на основе протоколов SMTP и POP и иметь
 следующий вид: адрес@почтовый_домен,
 где адрес - идентификатор адресата,
 а почтовый_домен - доменное имя
 почтового сервера. Пример: user@mail.ru.


## Описание


Метод AddString осуществляет
 добавление электронного адреса, передаваемого в виде текстовой строки,
 в коллекцию.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Net.


			Sub UserProc;

Var

    From_, To_: INetMailAddress;

    CopyTo: INetMailAddressCollection;

    Message: INetMailMessage;

    Client: INetSmtpClient;

Begin

    From_ := New CurlMailAddress.Create("ivanov@server.ru");

    To_ := New CurlMailAddress.Create("petrov@mail.ru");

    Message := New CurlMailMessage.CreateWithFromAndTo(From_, To_);

    Message.Subject := "Тестовое письмо";

    Message.Body := "письмо с копиями";

    CopyTo := Message.CC;

    CopyTo.AddString("user1@mail.ru");

    CopyTo.AddString("user2@mail.ru");

    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

    Client.Send(Message);

End Sub UserProc;


После выполнения примера будет отправлено письмо через указанный почтовый
 сервер. Копия письма будет отправлена по двум адресам user1@mail.ru и
 user2@mail.ru.


См. также:


[INetMailAddressCollection](INetMailAddressCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

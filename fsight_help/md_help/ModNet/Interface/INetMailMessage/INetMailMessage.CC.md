# INetMailMessage.CC

INetMailMessage.CC
-


# INetMailMessage.CC


## Синтаксис


CC: [INetMailAddressCollection](../INetMailAddressCollection/INetMailAddressCollection.htm);


## Описание


Свойство CC возвращает коллекцию
 адресов, по которым будет отправлена копия сообщения электронной почты.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Net.


			Sub UserProc;

Var

    Addr, From_, To_: INetMailAddress;

    CopyTo: INetMailAddressCollection;

    Message: INetMailMessage;

    Client: INetSmtpClient;

Begin

    From_ := New CurlMailAddress.Create("ivanov@server.ru");

    To_ := New CurlMailAddress.Create("petrov@mail.ru");

    Message := New CurlMailMessage.CreateWithFromAndTo(From_, To_);

    Message.Subject := "Тестовое письмо";

    Message.Body := "Копии письма";

    CopyTo := Message.CC;

    Addr := New CurlMailAddress.CreateWithName("user1@mail.ru", "Пользователь");

    CopyTo.Add(Addr);

    Addr := New CurlMailAddress.Create("user2@mail.ru");

    CopyTo.Add(Addr);

    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

    Client.Send(Message);

End Sub UserProc;


После выполнения примера будет отправлено письмо через указанный почтовый
 сервер. Копия письма будет отправлена по двум адресам user1@mail.ru и
 user2@mail.ru.


См. также:


[INetMailMessage](INetMailMessage.htm) | [INetMailMessage.Bcc](INetMailMessage.Bcc.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

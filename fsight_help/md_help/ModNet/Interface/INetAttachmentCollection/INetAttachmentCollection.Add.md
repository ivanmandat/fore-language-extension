# INetAttachmentCollection.Add

INetAttachmentCollection.Add
-


# INetAttachmentCollection.Add


## Синтаксис


Add(Value: [INetAttachment](../INetAttachment/INetAttachment.htm));


## Параметры


Value. Вложение, которое необходимо
 добавить в коллекцию.


## Описание


Метод Add осуществляет добавление
 вложения в коллекцию.


## Пример


Для выполнения примера в файловой системе должны содержаться файлы с
 изображениями: С:\image01.jpg, С:\image02.jpg.


Добавьте ссылку на системную сборку Net.


			Sub UserProc;

Var

    From_, To_: INetMailAddress;

    Attach: INetAttachment;

    AttachCollect: INetAttachmentCollection;

    Message: INetMailMessage;

    Client: INetSmtpClient;

Begin

    From_ := New CurlMailAddress.Create("ivanov@server.ru");

    To_ := New CurlMailAddress.Create("petrov@mail.ru");

    Message := New CurlMailMessage.CreateWithFromAndTo(From_, To_);

    Message.Subject := "Тестовое письмо";

    Message.Body := "Здесь указывается текст письма";

    Attach := New CurlAttachment.Create("c:\image01.jpg");

    AttachCollect := Message.Attachments;

    AttachCollect.Add(Attach);

    Attach := New CurlAttachment.Create("c:\image02.jpg");

    AttachCollect.Add(Attach);

    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

    Client.Send(Message);

End Sub UserProc;


После выполнения примера будет отправлено письмо через указанный почтовый
 сервер. В качестве вложения к данному письму будет добавлено два файла
 image01.jpg и image02.jpg.


См. также:


[INetAttachmentCollection](INetAttachmentCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

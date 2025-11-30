# INetAttachment.ReleaseResource

INetAttachment.ReleaseResource
-


# INetAttachment.ReleaseResource


## Синтаксис


ReleaseResource;


## Описание


Метод ReleaseResource осуществляет
 освобождение ресурса, используемого в качестве вложения к сообщению электронной
 почты.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm)
 с наименованием «Button1». Также в файловой системе должны содержаться
 файлы с изображениями: С:\image01.jpg, С:\image02.jpg.


Добавьте ссылки на системные сборки: Forms, Net.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    From_, To_: INetMailAddress;

    Attach: INetAttachment;

    AttachCollect: INetAttachmentCollection;

    Message: INetMailMessage;

    Client: INetSmtpClient;

    i: Integer;

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

    For i := 0 To AttachCollect.Count - 1 Do

        AttachCollect.Item(i).ReleaseResource;

    End For;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет отправлено письмо
 через указанный почтовый сервер. В качестве вложения к данному письму
 будет добавлено два файла image01.jpg и image02.jpg. После отправки сообщения
 оба файла освобождаются, чтобы можно было работать с ними в операционной
 системе до завершения работы формы.


См. также:


[INetAttachment](INetAttachment.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

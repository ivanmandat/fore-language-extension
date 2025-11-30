# CurlAttachment.Create

CurlAttachment.Create
-


# CurlAttachment.Create


## Синтаксис


Create(FileName: String);


## Параметры


FileName. Путь и наименование
 файла, который необходимо использовать в качестве вложения к электронному
 письму.


## Описание


Конструктор Create создает вложение
 к электронному письму.


## Пример


Для выполнения примера предполагается наличие файла «C:\Image01.jpeg».


Добавьте ссылку на системную сборку Net.


	Sub UserProc;

	Var

	    From_, To_: INetMailAddress;

	    Message: INetMailMessage;

	    Attach: INetAttachment;

	    Client: INetSmtpClient;

	    Credent: INetNetworkCredential;

	Begin

	    From_ := New CurlMailAddress.Create("user1@example.ru");

	    To_ := New CurlMailAddress.Create("user2@example.ru");

	    Message := New CurlMailMessage.CreateWithFromAndTo(From_, To_);

	    Message.Subject := "Тестовое письмо";

	    Message.Body := "Текст письма";

	    Attach := New CurlAttachment.Create("c:\Image01.jpeg");

	    Message.Attachments.Add(Attach);

	    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

	    Credent := New CurlNetworkCredential.Create("user1", "password", "domain");

	    Client.ThisHostCredentials("https") := Credent;

	    Client.Send(Message);

	End Sub UserProc;


После выполнения примера с почтового адреса «user1@example.ru» на адрес
 «user2@example.ru» будет отправлено электронное письмо с темой «Тестовое
 письмо» и текстом «Текст письма». Письмо содержит во вложении файл Image01.jpeg.
 Письмо отправлено при помощи почтового сервера с наименованием «example.server.ru»,
 работающего по протоколу https. Для авторизации на почтовом сервере используются
 указанные учётные данные.


Данный пример может быть запущен на выполнение при работе в операционных
 системах семейства Linux.


См. также:


[CurlAttachment](CurlAttachment.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

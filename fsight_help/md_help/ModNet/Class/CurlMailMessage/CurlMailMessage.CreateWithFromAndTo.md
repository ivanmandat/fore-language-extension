# CurlMailMessage.CreateWithFromAndTo

CurlMailMessage.CreateWithFromAndTo
-


# CurlMailMessage.CreateWithFromAndTo


## Синтаксис


CreateWithFromAndTo(From_: [INetMailAddress](../../Interface/INetMailAddress/INetMailAddress.htm);
To_: [INetMailAddress](../../Interface/INetMailAddress/INetMailAddress.htm));


## Параметры


From_ Электронный адрес отправителя.


To_. Электронный адрес получателя.


## Описание


Конструктор CreateWithFromAndTo
 создает экземпляр сообщения электронной почты для указанных адресов отправителя
 и получателя.


## Пример


Добавьте ссылку на системную сборку Net.


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

		    Message.Body := "Здесь указывается текст письма";

		    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

		    Client.Send(Message);

		End Sub UserProc;


При выполнении примера будет отправлено письмо через указанный почтовый
 сервер. Для отправки сообщения создается два адреса электронной почты:
 From_ - адрес отправителя (данный адрес должен быть зарегистрирован на
 почтовом сервере); To_ - адрес, на который необходимо отправить письмо
 (если адрес не существует - на первый адрес будет отправлено соответствующее
 оповещение с почтового сервера).


Данный пример может быть запущен на выполнение при работе в операционных
 системах семейства Linux.


См. также:


[CurlMailMessage](CurlMailMessage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

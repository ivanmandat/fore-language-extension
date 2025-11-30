# CurlSmtpClient.CreateWithHostAndPort

CurlSmtpClient.CreateWithHostAndPort
-


# CurlSmtpClient.CreateWithHostAndPort


## Синтаксис


CreateWithHostAndPort(Host: String; Port: Integer);


## Параметры


Host. Наименование
 или IP-адрес почтового сервера.


Port. Порт, через который будет осуществляться
 доступ к почтовому серверу.


## Описание


Конструктор CreateWithHostAndPort
 создает объект, позволяющий отправлять электронные почтовые сообщения
 через определённый порт почтового сервера.


## Комментарии


Наименование, либо IP-адрес, почтового сервера и порт, через который
 будет осуществляться отправка, передается посредством параметра Host и Port
 соответственно. Данный метод используется, если по каким-либо причинам
 отсутствует возможность отправить сообщение через стандартный порт почтового
 сервера.


## Пример


Добавьте ссылку на системную сборку Net.


					Sub SendMailMessage(Server: String; Port: Integer);

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

		    Client := New CurlSmtpClient.CreateWithHostAndPort(Server, Port);

		    Client.Send(Message);

		End Sub SendMailMessage;


Данная процедура может использоваться для отправки сообщений электронной
 почты через указанный почтовый сервер. Наименование, либо IP-адрес, почтового
 сервера, и порт, через который будет осуществляться отправка сообщения,
 указываются в параметрах процедуры Server и Port.


См. также:


[CurlSmtpClient](CurlSmtpClient.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

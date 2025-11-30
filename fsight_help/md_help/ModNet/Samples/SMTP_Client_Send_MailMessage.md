# Отправка писем через различные SMTP-серверы

Отправка писем через различные SMTP-серверы
-


# Отправка писем через различные SMTP-серверы


Для работы с SMTP-клиентами в языке Fore предназначен интерфейс [INetSmtpClient](../Interface/INetSmtpClient/INetSmtpClient.htm).
 Для отправки почты с использованием SMTP-клиента в коде необходимо реализовать
 следующее:


	- Создать [адреса
	 электронной почты](../Interface/INetMailAddress/INetMailAddress.htm) отправителя и получателя.


	- Создать сообщение [электронной
	 почты](../Interface/INetMailMessage/INetMailMessage.htm), заполнить его параметры (указать [отправителя](../Interface/INetMailMessage/INetMailMessage.From_.htm),
	 [получателя](../Interface/INetMailMessage/INetMailMessage.To_.htm),
	 [заголовок](../Interface/INetMailMessage/INetMailMessage.Subject.htm),
	 [текст
	 сообщения](../Interface/INetMailMessage/INetMailMessage.Body.htm) и другие необходимые параметры).


	- Инициализировать [SMTP-клиент](../Interface/INetSmtpClient/INetSmtpClient.htm),
	 настроить его параметры (указать [SMTP-сервер](../Interface/INetSmtpClient/INetSmtpClient.Host.htm)
	 и [порт](../Interface/INetSmtpClient/INetSmtpClient.Port.htm),
	 через которые осуществляется отправка, при необходимости указать другие
	 параметры).


	- [Отправить](../Interface/INetSmtpClient/INetSmtpClient.Send.htm)
	 сообщение.


В общем виде реализация данного алгоритма выглядит следующим образом:


	Sub SendMessage;

	Var

	    From_, To_: INetMailAddress;

	    Message: INetMailMessage;

	    Client: INetSmtpClient;

	    Credential: INetNetworkCredential;

	Begin

	    From_ := New CurlMailAddress.Create("ivanov@server.ru");

	    To_ := New CurlMailAddress.Create("petrov@server.ru");

	    Message := New CurlMailMessage.CreateWithFromAndTo(From_, To_);

	    Message.Subject := "Тестовое письмо";

	    Message.Body := "Текст письма";

	    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

	    Client.Send(Message);

	End Sub SendMessage;


Если требуется авторизация на SMTP-сервере, то дополните код следующими
 образом:


	    //...

	    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

	    Credential := New CurlNetworkCredential.Create("ivanov", "password", "work");

	    Client.ThisHostCredentials("") := Credential;

	    //...


По умолчанию работа с SMTP-серверами осуществляется через порт «25».
 Это базовый порт для SMTP и в целях безопасности может быть закрыт на
 SMTP-сервере. Для работы через другой порт укажите его номер в свойстве
 [INetSmtpClient.Port](../Interface/INetSmtpClient/INetSmtpClient.Port.htm)
 или используйте для инициализации SMTP-клиента метод [CurlSmtpClient.CreateWithHostAndPort](../Class/CurlSmtpClient/CurlSmtpClient.CreateWithHostAndPort.htm).
 При работе через порт «465» также требуется включить поддержку SSL-шифрования,
 для этого в свойстве [INetSmtpClient.EnableSsl](../Interface/INetSmtpClient/INetSmtpClient.EnableSsl.htm)
 установите значение True.


	    //...

	    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

	    Credential := New CurlNetworkCredential.Create("ivanov", "password", "work");

	    Client.Port := 465;

	    Client.EnableSsl := True;

	    Client.ThisHostCredentials("") := Credential;

	    //...


Если SMTP-сервер использует протокол аутентификации пользователя, то
 укажите его наименование при задании учётных данных:


	    //...

	    Client.ThisHostCredentials("Kerberos") := Credential;

	    //...


Ниже приведен список настроек SMTP-серверов, которые будет необходимо
 указать в коде для отправки сообщений:


		 SMTP-сервер
		 Порт
		 SSL
		 Описание


		 smtp.gmail.com
		 587(TLS), 465(SSL)
		 +
		 SMTP-сервер компании Google.


		 smtp.mail.com
		 465
		 +
		 SMTP-сервер компании Mail.ru.


		 smtp.yandex.ru
		 465
		 +
		 SMTP-сервер компании Яндекс.


		 smtp.mail.yahoo.com

plus.smtp.mail.yahoo.com
		 465
		 +
		 SMTP-сервер компании Yahoo.


См. также:


[Примеры](Samples.htm) | [INetSmtpClient](../Interface/INetSmtpClient/INetSmtpClient.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

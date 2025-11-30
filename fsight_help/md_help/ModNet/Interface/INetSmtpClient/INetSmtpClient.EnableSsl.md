# INetSmtpClient.EnableSsl

INetSmtpClient.EnableSsl
-


# INetSmtpClient.EnableSsl


## Синтаксис


EnableSsl: Boolean;


## Описание


Свойство EnableSsl определяет,
 требуется ли использование SSL-шифрования для отправки сообщений через
 внешние почтовые серверы.


## Комментарии


Для определения порта, через который будет осуществляться отправка сообщений,
 используйте свойство [INetSmtpClient.Port](INetSmtpClient.Port.htm).


Допустимые значения:


	- True. Используется SSL-шифрование.
	 Добавьте доверенный корневой сертификат в формате PEM:


		- в ОС Linux выполните одно из действий:


			- добавьте содержимое сертификата в файл /etc/ssl/certs/ca-certificates.crt
			 в Debian-подобных дистрибутивах, /etc/pki/tls/certs/ca-bundle.crt
			 в RedHat-подобных дистрибутивах и ALT Linux;


			- добавьте сертификат с расширением *.pem в папку /etc/ssl/certs
			 в Debian-подобных дистрибутивах, /etc/pki/tls/certs в RedHat-подобных
			 дистрибутивах и ALT Linux;


		- в ОС Windows:


			- Запустите встроенное приложение «Управление
			 сертификатами компьютеров».


			- Добавьте сертификат в папку «Доверенные
			 корневые центры сертификации > Сертификаты».


	- False. Не используется
	 SSL-шифрование.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Net.


			Sub UserProc;

Var

    From_, To_: INetMailAddress;

    Message: INetMailMessage;

    Client: INetSmtpClient;

    Credential: INetNetworkCredential;

Begin

    From_ := New CurlMailAddress.Create("ivanov@server.ru");

    To_ := New CurlMailAddress.Create("petrov@mail.ru");

    Message := New CurlMailMessage.CreateWithFromAndTo(From_, To_);

    Message.Subject := "Тестовое письмо";

    Message.Body := "Текст письма";

    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

    Credential := New CurlNetworkCredential.Create("user", "password", "work");

    Client.ThisHostCredentials("") := Credential;

    Client.EnableSsl := True;

    Client.Send(Message);

End Sub UserProc;


Указанная процедура позволяет отправить сообщение электронной почты
 через указанный почтовый сервер. Для авторизации на почтовом сервере будут
 использоваться указанные учётные данные.


См. также:


[INetSmtpClient](INetSmtpClient.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

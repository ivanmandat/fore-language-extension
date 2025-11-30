# CurlSmtpClient

CurlSmtpClient
-


# CurlSmtpClient


Сборка: Net;


## Описание


Класс CurlSmtpClient реализует
 объект, позволяющий отправлять электронные почтовые сообщения с помощью
 библиотеки libcurl по протоколу SMTP.


## Комментарии


Класс представляет собой кроссплатформенную реализацию интерфейса [INetSmtpClient](../../Interface/INetSmtpClient/INetSmtpClient.htm).
 Макросы, реализованные с использованием класса CurlSmtpClient,
 могут быть запущены на выполнение при работе в операционных системах семейства
 Linux.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateWithHost](CurlSmtpClient.CreateWithHost.htm)


		 Конструктор CreateWithHost
		 создает объект, позволяющий отправлять электронные почтовые сообщения.


		 ![](../../Sub_Image.gif)
		 [CreateWithHostAndPort](CurlSmtpClient.CreateWithHostAndPort.htm)


		 Конструктор CreateWithHostAndPort
		 создает объект, позволяющий отправлять электронные почтовые сообщения
		 через определённый порт почтового сервера.


## Свойства, унаследованные от [INetSmtpClient](../../Interface/INetSmtpClient/INetSmtpClient.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Credentials](../../Interface/INetSmtpClient/INetSmtpClient.Credentials.htm)


		 Свойство Credentials
		 возвращает учетные данные, используемые для авторизации на сервере
		 исходящей почты.


		 ![](../../Property_Image.gif)
		 [EnableSsl](../../Interface/INetSmtpClient/INetSmtpClient.EnableSsl.htm)
		 Свойство EnableSsl
		 определяет, требуется ли использование SSL-шифрования для отправки
		 сообщений через внешние почтовые серверы.


		 ![](../../Property_Image.gif)
		 [Host](../../Interface/INetSmtpClient/INetSmtpClient.Host.htm)


		 Свойство Host определяет
		 наименование, либо IP-адрес, передающего почтового сервера SMTP.


		 ![](../../Property_Image.gif)
		 [Port](../../Interface/INetSmtpClient/INetSmtpClient.Port.htm)


		 Свойство Port определяет
		 порт, через который будет осуществляться отправка сообщений.


		 ![](../../Property_Image.gif)
		 [ThisHostCredentials](../../Interface/INetSmtpClient/INetSmtpClient.ThisHostCredentials.htm)


		 Свойство ThisHostCredentials
		 определяет учетные данные для передающего почтового сервера SMTP,
		 который будет использоваться при отправке сообщений электронной
		 почты.


		 ![](../../Property_Image.gif)
		 [Timeout](../../Interface/INetSmtpClient/INetSmtpClient.Timeout.htm)


		 Свойство Timeout определяет
		 время, в течение которого будет ожидаться отправка сообщения на
		 сервер.


		 ![](../../Property_Image.gif)
		 [UseDefaultCredentials](../../Interface/INetSmtpClient/INetSmtpClient.UseDefaultCredentials.htm)


		 Свойство UseDefaultCredentials
		 определяет, использовать ли для всех запросов системные учетные
		 записи для текущего контекста безопасности, в котором выполняется
		 приложение.


## Методы, унаследованные от [INetSmtpClient](../../Interface/INetSmtpClient/INetSmtpClient.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Send](../../Interface/INetSmtpClient/INetSmtpClient.Send.htm)


		 Метод Send осуществляет
		 отправку сообщения электронной почты.


См. также:


[Классы
 сборки Net](../KeNet_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

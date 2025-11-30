# INetSmtpClient

INetSmtpClient
-


# INetSmtpClient


## Описание


Интерфейс INetSmtpClient содержит
 свойства и методы для отправки электронных почтовых сообщений при помощи
 почтовой службы SMTP.


## Комментарии


SMTP-клиент, описываемый данным интерфейсом, позволяет отправлять почтовые
 сообщения на почтовый сервер, адрес которого указывается при инициализации
 SMTP-клиента в конструкторе [CurlSmtpClient.CreateWithHost](../../Class/CurlSmtpClient/CurlSmtpClient.CreateWithHost.htm)
 или [CurlSmtpClient.CreateWithHostAndPort](../../Class/CurlSmtpClient/CurlSmtpClient.CreateWithHostAndPort.htm).
 С почтового сервера будет осуществляться ретрансляция почтового сообщения
 на другие почтовые сервера в соответствии с информацией об адресатах.
 При необходимости авторизации на почтовом сервере необходимо указать соответствующие
 учетные данные в свойстве [ThisHostCredentials](INetSmtpClient.ThisHostCredentials.htm).


Информация о почтовом сервере и порте может быть изменена в свойствах
 [Host](INetSmtpClient.Host.htm) и [Port](INetSmtpClient.Port.htm).
 После этого SMTP-клиент может использоваться повторно для отправки каких-либо
 других электронных сообщений.


Примечание.
 Если доступ к SMTP-серверу осуществляется из локальной сети через прокси-сервер,
 то необходимо проверить наличие прав доступа к используемому порту SMTP-сервера
 в параметрах прокси-сервера.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Credentials](INetSmtpClient.Credentials.htm)


		 Свойство Credentials
		 возвращает учетные данные, используемые для авторизации на сервере
		 исходящей почты.


		 ![](../../Property_Image.gif)
		 [EnableSsl](INetSmtpClient.EnableSsl.htm)
		 Свойство EnableSsl
		 определяет, требуется ли использование SSL-шифрования для отправки
		 сообщений через внешние почтовые серверы.


		 ![](../../Property_Image.gif)
		 [Host](INetSmtpClient.Host.htm)


		 Свойство Host определяет
		 наименование, либо IP-адрес, передающего почтового сервера SMTP.


		 ![](../../Property_Image.gif)
		 [Port](INetSmtpClient.Port.htm)


		 Свойство Port определяет
		 порт, через который будет осуществляться отправка сообщений.


		 ![](../../Property_Image.gif)
		 [ThisHostCredentials](INetSmtpClient.ThisHostCredentials.htm)


		 Свойство ThisHostCredentials
		 определяет учетные данные для передающего почтового сервера SMTP,
		 который будет использоваться при отправке сообщений электронной
		 почты.


		 ![](../../Property_Image.gif)
		 [Timeout](INetSmtpClient.Timeout.htm)


		 Свойство Timeout определяет
		 время, в течение которого будет ожидаться отправка сообщения на
		 сервер.


		 ![](../../Property_Image.gif)
		 [UseDefaultCredentials](INetSmtpClient.UseDefaultCredentials.htm)


		 Свойство UseDefaultCredentials
		 определяет, использовать ли для всех запросов системные учетные
		 записи для текущего контекста безопасности, в котором выполняется
		 приложение.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Send](INetSmtpClient.Send.htm)


		 Метод Send осуществляет
		 отправку сообщения электронной почты.


См. также:


[Интерфейсы сборки Net](../KeNet_Interface.htm)
 | [Отправка писем
 через различные SMTP-серверы](../../Samples/SMTP_Client_Send_MailMessage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

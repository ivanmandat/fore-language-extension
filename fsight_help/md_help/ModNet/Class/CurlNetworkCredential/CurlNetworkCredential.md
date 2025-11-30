# CurlNetworkCredential

CurlNetworkCredential
-


# CurlNetworkCredential


Сборка: Net;


## Описание


Класс CurlNetworkCredential
 является базовым классом, который поддерживает учетные данные в схемах
 аутентификации на основе пароля, таких как Basic, Digest, NTLM и Kerberos.


## Комментарии


Данный класс не поддерживает методы аутентификации на основе открытого
 ключа, например SSL-аутентификацию (SSL — Secure Sockets Layer) клиента.


Примечание.
 Данный класс аналогичен классу NetworkCredential,
 описание которого можно найти в [специализированной
 литературе (MSDN)](http://msdn.microsoft.com/ru-ru/library/system.net.networkcredential(vs.71).aspx).


Класс представляет собой кроссплатформенную реализацию интерфейса [INetNetworkCredential](../../Interface/INetNetworkCredential/INetNetworkCredential.htm).
 Макросы, реализованные с использованием класса CurlNetworkCredential,
 могут быть запущены на выполнение при работе в операционных системах семейства
 Linux.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](CurlNetworkCredential.Create.htm)


		 Конструктор Create
		 создает объект для поддержки учётных данных в схемах аутентификации
		 на основе пароля, таких как Basic, Digest, NTLM и Kerberos.


## Свойства, унаследованные от [INetNetworkCredential](../../Interface/INetNetworkCredential/INetNetworkCredential.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Domain](../../Interface/INetNetworkCredential/INetNetworkCredential.Domain.htm)


		 Свойство Domain определяет
		 имя домена, проверяющего учетные данные.


		 ![](../../Property_Image.gif)
		 [Password](../../Interface/INetNetworkCredential/INetNetworkCredential.Password.htm)


		 Свойство Password определяет
		 пароль пользователя.


		 ![](../../Property_Image.gif)
		 [UserName](../../Interface/INetNetworkCredential/INetNetworkCredential.UserName.htm)


		 Свойство UserName определяет
		 имя пользователя.


## Методы, унаследованные от [INetNetworkCredential](../../Interface/INetNetworkCredential/INetNetworkCredential.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateWithUserPassword](../../Interface/INetNetworkCredential/INetNetworkCredential.CreateWithUserPassword.htm)


		 Метод CreateWithUserPassword
		 определяет учетные данные пользователя для подключения к серверу.


См. также:


[Классы
 сборки Net](../KeNet_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

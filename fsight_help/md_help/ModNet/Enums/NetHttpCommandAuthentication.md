# NetHttpCommandAuthentication

NetHttpCommandAuthentication
-


# NetHttpCommandAuthentication


## Описание


Перечисление NetHttpCommandAuthentication
 содержит способы аутентификации пользователя при подключении к сетевому
 ресурсу.


Используется следующими свойствами и методами:


	- [INetHttpCommandCredential.Method](../Interface/INetHttpCommandCredential/INetHttpCommandCredential.Method.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 -1
		 None. Способ аутентификации
		 не определён.


		 0
		 Basic. Простая схема
		 аутентификации, при которой имя пользователя и пароль передаются
		 в заголовке запроса.


		 1
		 Digest. Схема аутентификации,
		 при которой сервер посылает уникальное значение, а клиент передаёт
		 MD5 хеш пароля пользователя, вычисленный с использованием этого
		 уникального значения.


		 2
		 Negotiate. Схема, при
		 которой используется NTLM или Kerberos аутентификация.


См. также:


[Перечисления
 сборки Net](KeNet_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

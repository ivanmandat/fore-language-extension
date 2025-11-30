# IDalConnectionDescriptorExt.CreateConnectionExt

IDalConnectionDescriptorExt.CreateConnectionExt
-


# IDalConnectionDescriptorExt.CreateConnectionExt


## Синтаксис


CreateConnectionExt(AllowPasswordExpiredConection: Boolean): [IDalConnection](../IDalConnection/IDalConnection.htm);


## Параметры


AllowPasswordExpiredConection. Определяет, будет ли произведено соединение, в случае если срок действия пароля истек. Значение True разрешает соединение при истекшем пароле, значение False запрещает соединение.


## Описание


Метод CreateConnectionExt возвращает
 ошибку или создает соединение с сервером БД, в случае если срок действия
 пароля пользователя истек.


## Комментарии


Если значение параметра AllowPasswordExpiredConection True,
 то при возникновении ошибки будет создано соединение, при значении False будет возвращена ошибка.


## Пример


Пример использования приведен в описании [IDalConnectionExt.PasswordExpired](../IDalConnectionExt/IDalConnectionExt.PasswordExpired.htm).


См. также:


[IDalConnectionDescriptorExt](IDalConnectionDescriptorExt.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# CurlCredentialCache

CurlCredentialCache
-


# CurlCredentialCache


Сборка: Net;


## Описание


Класс CurlCredentialCache реализует
 хранилище учётных записей множества Интернет-ресурсов.


## Комментарии


Приложения, которым требуется доступ к нескольким ресурсам, могут хранить
 учетные записи этих ресурсов в экземпляре [INetCredentialCache](../../Interface/INetCredentialCache/INetCredentialCache.htm),
 который затем, когда необходимо, предоставляет подходящий набор учетных
 записей Интернет-ресурсу.


Примечание.
 Данный класс аналогичен классу CredentialCache,
 описание которого можно найти в [специализированной
 литературе (MSDN)](http://msdn.microsoft.com/ru-ru/library/system.net.credentialcache.aspx).


Класс CurlCredentialCache
 представляет собой кроссплатформенную реализацию интерфейса [INetCredentialCache](../../Interface/INetCredentialCache/INetCredentialCache.htm).
 Макросы, реализованные с использованием класса CurlCredentialCache,
 могут быть запущены на выполнение при работе в операционных системах семейства
 Linux.


## Методы, унаследованные от [INetCredentialCache](../../Interface/INetCredentialCache/INetCredentialCache.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](../../Interface/INetCredentialCache/INetCredentialCache.Add.htm)


		 Метод Add добавляет
		 экземпляр [INetNetworkCredential](../../Interface/INetNetworkCredential/INetNetworkCredential.htm)
		 в кеш учетных записей.


		 ![](../../Sub_Image.gif)
		 [Remove](../../Interface/INetCredentialCache/INetCredentialCache.Remove.htm)


		 Метод Remove удаляет
		 из кеша экземпляр [INetNetworkCredential](../../Interface/INetNetworkCredential/INetNetworkCredential.htm).


См. также:


[Классы
 сборки Net](../KeNet_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

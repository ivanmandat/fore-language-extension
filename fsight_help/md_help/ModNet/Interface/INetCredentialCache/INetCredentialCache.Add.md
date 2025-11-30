# INetCredentialCache.Add

INetCredentialCache.Add
-


# INetCredentialCache.Add


## Синтаксис


Add(Host: String; Port: Integer; AuthProtocol: String;
 Credential: [INetNetworkCredential](../INetNetworkCredential/INetNetworkCredential.htm));


## Параметры


Host. Наименование или IP-адрес
 почтового сервера, к которому предоставляют доступ.


Port. Порт, через который будет
 осуществляться доступ к почтовому серверу.


AuthProtocol. Схема аутентификации,
 которая используется ресурсом.


Credential. Экземпляр [INetNetworkCredential](../INetNetworkCredential/INetNetworkCredential.htm),
 который должен добавляться в кеш учетных записей.


## Описание


Метод Add добавляет экземпляр
 [INetNetworkCredential](../INetNetworkCredential/INetNetworkCredential.htm)
 в кеш учетных записей.


## Комментарии


Данный метод помещает экземпляр [INetNetworkCredential](../INetNetworkCredential/INetNetworkCredential.htm)
 в [INetCredentialCache](INetCredentialCache.htm). Кеш хранит
 учетные записи в том порядке, в котором они добавляются в него. При вызове
 метода GetCredential он возвращает
 соответствующий действующий экземпляр [INetNetworkCredential](../INetNetworkCredential/INetNetworkCredential.htm).


См. также:


[INetCredentialCache](INetCredentialCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

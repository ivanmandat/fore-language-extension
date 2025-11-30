# INetCredentialCache.Remove

INetCredentialCache.Remove
-


# INetCredentialCache.Remove


## Синтаксис


Remove(Host: String; Port: Integer; AuthProtocol:
 String);


## Параметры


Host. Наименование или IP-адрес
 почтового сервера, к которому предоставляют доступ.


Port. Порт, через который будет
 осуществляться доступ к почтовому серверу.


AuthProtocol. Схема аутентификации,
 которая используется ресурсом.


## Описание


Метод Remove удаляет из кеша
 экземпляр [INetNetworkCredential](../INetNetworkCredential/INetNetworkCredential.htm).


## Комментарии


Метод удаляет заданный экземпляр [INetNetworkCredential](../INetNetworkCredential/INetNetworkCredential.htm)
 из [INetCredentialCache](INetCredentialCache.htm). Несколько
 вызовов метода Remove для одного
 и того же экземпляра [INetNetworkCredential](../INetNetworkCredential/INetNetworkCredential.htm)
 не влияют на результат.


См. также:


[INetCredentialCache](INetCredentialCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# INetCredentialsByHost.GetCredential

INetCredentialsByHost.GetCredential
-


# INetCredentialsByHost.GetCredential


## Синтаксис


GetCredential(Host: String; Port: Integer; AuthProtocol:
 String): [INetNetworkCredential](../INetNetworkCredential/INetNetworkCredential.htm);


## Параметры


Host. Наименование либо IP-адрес
 почтового сервера;


Port. Порт, через который будет
 осуществляться доступ к почтовому серверу;


AuthProtocol. Схема аутентификации,
 которая используется ресурсом.


## Описание


Метод GetCredential возвращает
 объект [INetNetworkCredential](../INetNetworkCredential/INetNetworkCredential.htm),
 содержащий учетные данные, связанные с заданным типом аутентификации и
 почтовым сервером. Когда учетных данных нет в наличии, метод возвращает
 пустую ссылку.


См. также:


[INetCredentialsByHost](INetCredentialsByHost.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

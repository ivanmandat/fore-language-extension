# ISecurityPackage.PerformLogon

ISecurityPackage.PerformLogon
-


# ISecurityPackage.PerformLogon


## Синтаксис


PerformLogon(


AuditError: Boolean;


LogonData: [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm);


UserCredentials: [ICredentials](../ICredentials/ICredentials.htm);


[MetaKey: Integer = 0];


[ObjectKey: Integer =
 0]): [ISecurityConnection](../ISecurityConnection/ISecurityConnection.htm);


## Параметры


AuditError. Параметр, определяющий
 будут ли фиксироваться ошибки аудита в протоколе доступа. Если передавать
 значение True, то при возникновении
 ошибки, соответствующая запись будет добавляться в протокол доступа.


LogonData. Параметры модуля
 безопасности, используемые при подключении.


UserCredentials. Учётные данные
 пользователя, используемые при подключении.


MetaKey. Параметр, зарезервированный
 для внутреннего использования.


ObjectKey. Параметр, зарезервированный
 для внутреннего использования.


## Описание


Метод PerformLogon создает новое
 соединение с сервером БД, используя указанные значения параметров.


## Пример


Использование свойства приведено в примере для [ISecurityPackage.CreateCredentials](ISecurityPackage.CreateCredentials.htm).


См. также:


[ISecurityPackage](ISecurityPackage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

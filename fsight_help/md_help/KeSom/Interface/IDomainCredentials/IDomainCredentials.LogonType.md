# IDomainCredentials.LogonType

IDomainCredentials.LogonType
-


# IDomainCredentials.LogonType


## Синтаксис


LogonType: [DomainLogonType](../../Enums/DomainLogonType.htm);


## Описание


Свойство LogonType определяет тип подключения при использовании доменной аутентификации.


## Комментарии


Указание типа подключения требуется если осуществляется подключение не под текущим доменным пользователем (Свойству [LogonAsCurrentUser](IDomainCredentials.LogonAsCurrentUser.htm) установлено значение False). По умолчанию используется тип подключения [DomainLogonType.Batch](../../Enums/DomainLogonType.htm). Пользователю, под которым осуществляется подключение, должны быть даны соответствующие привилегии на сервере.


См. также:


[IDomainCredentials](IDomainCredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

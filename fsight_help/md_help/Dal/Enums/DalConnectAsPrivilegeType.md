# DalConnectAsPrivilegeType

DalConnectAsPrivilegeType
-


# DalConnectAsPrivilegeType


## Описание


Перечисление DalConnectAsPrivilegeType
 содержит варианты подключения к серверу баз данных.


Примечание.
 Перечисление не предназначено для использования в прикладном коде. Оставлено
 для совместимости с предыдущими версиями.


Используется следующими свойствами:


	- [IDalConnectionDescriptor2.ConnectAsPrivilege](../Interface/IDalConnectionDescriptor2/IDalConnectionDescriptor2.ConnectAsPrivilege.htm);


	- [ICredentials.ConnectAsPrivilege](KeSom.chm::/Interface/ICredentials/ICredentials.ConnectAsPrivilege.htm).


## Допустимые значения


		 Значение


		 Краткое описание


		 0
		 Normal. По умолчанию.
		 Обычное подключение.


		 1
		 SYSDBA. Подключение
		 к серверу с возможностью задания учетных данных пользователя с
		 привилегией SYSDBA.


		 2
		 SYSOPER. Подключение
		 к серверу с возможностью задания учетных данных пользователя с
		 привилегией SYSOPER.


## Комментарии


Задать подключение с привилегией можно только для серверов на базе СУБД
 Oracle.


См. также:


[Перечисления
 сборки Dal](Dal_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

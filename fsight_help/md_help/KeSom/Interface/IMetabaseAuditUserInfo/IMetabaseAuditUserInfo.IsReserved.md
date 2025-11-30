# IMetabaseAuditUserInfo.IsReserved

IMetabaseAuditUserInfo.IsReserved
-


# IMetabaseAuditUserInfo.IsReserved


## Синтаксис


IsReserved: Boolean;


## Описание


Свойство IsReserved возвращает
 признак наличия зарезервированного пользователя P4AUDIT в репозитории.


## Комментарии


Допустимые значения:


	- True. Зарезервированный
	 пользователь P4AUDIT содержится в репозитории;


	- False. Зарезервированный
	 пользователь P4AUDIT не содержится в репозитории.


Важно. Зарезервированный
 служебный пользователь P4AUDIT является устаревшим. Для обеспечения безопасности и входа в систему создайте
 нового служебного пользователя подсистемы безопасности на каждом компьютере
 пользователя с помощью метода [IMetabaseAuditUserInfo.CreateUser](IMetabaseAuditUserInfo.CreateUser.htm).


## Пример


Использование свойства приведено в примере для [IMetabaseAuditUserInfo.CreateUser](IMetabaseAuditUserInfo.CreateUser.htm).


См. также:


[IMetabaseAuditUserInfo](IMetabaseAuditUserInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

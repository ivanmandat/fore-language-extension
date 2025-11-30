# IMetabaseAuditUserInfo.IsSupported

IMetabaseAuditUserInfo.IsSupported
-


# IMetabaseAuditUserInfo.IsSupported


## Синтаксис


IsSupported: Boolean;


## Описание


Свойство IsSupported возвращает
 признак наличия нового служебного пользователя в репозитории.


## Комментарии


Допустимые значения:


	- True. Новый служебный
	 пользователь создан в репозитории;


	- False. Новый служебный
	 пользователь не создан в репозитории.


Для создания служебного пользователя в базе данных используйте метод
 [IMetabaseAuditUserInfo.CreateUser](IMetabaseAuditUserInfo.CreateUser.htm).


## Пример


Использование свойства приведено в примере для [IMetabaseAuditUserInfo.ChangePassword](IMetabaseAuditUserInfo.ChangePassword.htm).


См. также:


[IMetabaseAuditUserInfo](IMetabaseAuditUserInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# MetabaseSecuritySubjectUpdateType

MetabaseSecuritySubjectUpdateType
-


# MetabaseSecuritySubjectUpdateType


## Описание


Перечисление MetabaseSecuritySubjectUpdateType
 содержит способы обновления пользователей репозитория. Используется следующими
 свойствами и методами:


	- [IMetabaseSecuritySubjectUpdateSetup.UpdateType](../Interface/IMetabaseSecuritySubjectUpdateSetup/IMetabaseSecuritySubjectUpdateSetup.UpdateType.htm);


	- [IMetabaseUsersUpdate.AddGroupUsers](../Interface/IMetabaseUsersUpdate/IMetabaseUsersUpdate.AddGroupUsers.htm);


	- [IMetabaseUsersUpdate.AddSubject](../Interface/IMetabaseUsersUpdate/IMetabaseUsersUpdate.AddSubject.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Не обновлять.


		 1
		 DBGrant. Раздать права
		 на сервере БД в соответствии с правами на объекты репозитория.


		 2
		 DBCreate. Создать пользователя
		 на сервере БД.


		 3
		 DBGrantCreate. Создать
		 пользователя на сервере БД и раздать права на сервере БД в соответствии
		 с правами на объекты репозитория.


См. также:


[Перечисления
 сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

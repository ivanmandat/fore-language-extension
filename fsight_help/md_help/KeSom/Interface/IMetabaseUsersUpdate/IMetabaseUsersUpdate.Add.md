# IMetabaseUsersUpdate.Add

IMetabaseUsersUpdate.Add
-


# IMetabaseUsersUpdate.Add


## Синтаксис


		Add(Value: [IMetabaseUser](../IMetabaseUser/IMetabaseUser.htm));


## Параметры


Value. Пользователь репозитория,
 которого необходимо обновить.


## Описание


Метод Add добавляет пользователя
 репозитория в список для обновления.


## Комментарии


Для обновления пользователей будет использован способ [MetabaseSecuritySubjectUpdateType.DBGrantCreate](../../Enums/MetabaseSecuritySubjectUpdateType.htm).


Для изменения способа обновления пользователей используйте метод [IMetabaseSecuritySubjectUpdateSetup.UpdateType](../IMetabaseSecuritySubjectUpdateSetup/IMetabaseSecuritySubjectUpdateSetup.UpdateType.htm).


## Пример


Использование метода приведено в примере для [IMetabaseSecurity.CreateUsersUpdate](../IMetabaseSecurity/IMetabaseSecurity.CreateUsersUpdate.htm).


См. также:


[IMetabaseUsersUpdate](IMetabaseUsersUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetabaseSecurity.Users

IMetabaseSecurity.Users
-


# IMetabaseSecurity.Users


## Синтаксис


Users: [IMetabaseUsers](../IMetabaseUsers/IMetabaseUsers.htm);


## Описание


Свойство Users возвращает коллекцию
 пользователей, созданных в текущем репозитории.


## Комментарии


Данная коллекция включает всех пользователей, созданных в менеджере
 безопасности репозитория. Описания данных пользователей загружаются при
 входе в репозиторий. Также, если в репозитории имеются пользователи с
 признаком [отложенной
 загрузки описания](../IMetabaseUser/IMetabaseUser.IsDeferred.htm), то по мере загрузки их описаний, они также будут
 доступны в коллекции Users.


## Пример


Использование свойства приведено в примере для [IMetabaseSecurity.CreateUsersUpdate](IMetabaseSecurity.CreateUsersUpdate.htm).


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

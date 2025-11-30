# IMetabaseSecurity.ActiveUsers

IMetabaseSecurity.ActiveUsers
-


# IMetabaseSecurity.ActiveUsers


## Синтаксис


		ActiveUsers: [IMetabaseUsers](../IMetabaseUsers/IMetabaseUsers.htm);


## Описание


Метод ActiveUsers возвращает
 коллекцию пользователей, созданных в текущем репозитории, с учетом пользователей
 с отложенной загрузкой описания.


## Комментарии


При входе в репозиторий загружаются описания пользователей, которые
 созданы в менеджере безопасности. Их описания можно получить в свойстве
 [Users](IMetabaseSecurity.Users.htm).
 Метод ActiveUsers позволяет получить
 всех пользователей репозитория: пользователей, добавленных в менеджере
 безопасности, и пользователей, созданных в СУБД, добавленных в репозиторий
 и имеющих признак [отложенной
 загрузки описания](../IMetabaseUser/IMetabaseUser.IsDeferred.htm).


Примечание.
 Метод возвращает только тех пользователей с [отложенной
 загрузки описания](../IMetabaseUser/IMetabaseUser.IsDeferred.htm), которые также являются пользователями СУБД.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Sec: IMetabaseSecurity;

		    Users: IMetabaseUsers;

		    User: IMetabaseUser;

		Begin

		    MB := MetabaseClass.Active;

		    Sec := MB.Security;

		    Users := Sec.ActiveUsers;

		    For Each User In Users Do

		        Debug.WriteLine(User.Name + ": " + User.IsDeferred.ToString);

		    End For;

		End Sub UserProc;


После выполнения примера в консоль будет выведен список пользователей
 репозитория. В списке содержатся все пользователи, доступные в менеджере
 безопасности, а также пользователи, удовлетворяющие условиям:


	- созданы в СУБД и добавлены в репозиторий;


	- для пользователей установлен признак отложенной загрузки описания.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

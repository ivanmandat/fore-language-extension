# ISecuritySubject.MemberOf

ISecuritySubject.MemberOf
-


# ISecuritySubject.MemberOf


## Синтаксис


		MemberOf: [IMetabaseGroups](../IMetabaseGroups/IMetabaseGroups.htm);


## Описание


Метод MemberOf возвращает коллекцию
 групп, в которую входит данный субъект безопасности.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержатся
 пользователи.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MSec: IMetabaseSecurity;

		    Users: IMetabaseUsers;

		    Groups: IMetabaseGroups;

		    Group: IMetabaseGroup;

		Begin

		    MB := MetabaseClass.Active;

		    MSec := MB.Security;

		    Users := MSec.Users;

		    Groups := Users.Item(0).MemberOf;

		    For Each Group In Groups Do

		        Debug.WriteLine(Group.Name);

		    End For;

		End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименования
 групп, в которые входит первый пользователь, зарегистрированный в менеджере
 безопасности.


См. также:


[ISecuritySubject](ISecuritySubject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

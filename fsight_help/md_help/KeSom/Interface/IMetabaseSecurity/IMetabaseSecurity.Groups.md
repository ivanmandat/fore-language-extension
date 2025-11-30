# IMetabaseSecurity.Groups

IMetabaseSecurity.Groups
-


# IMetabaseSecurity.Groups


## Синтаксис


		Groups: [IMetabaseGroups](../IMetabaseGroups/IMetabaseGroups.htm);


## Описание


Свойство Groups возвращает коллекцию
 групп пользователей, используемых в политике безопасности.


## Комментарии


Коллекция Groups включает группы
 пользователей, которые явно добавлены в менеджере безопасности, а также
 [скрытые группы](../ISecuritySubject/ISecuritySubject.IsHidden.htm),
 которые не добавлены в менеджере безопасности, но используются при раздаче
 прав доступа на объекты репозитория.


## Пример


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    Groups: IMetabaseGroups;

		    Group: IMetabaseGroup;

		Begin

		    Groups := MetabaseClass.Active.Security.Groups;

		    For Each Group In Groups Do

		        If Not (Group.IsHidden And Group.IsNT) Then

		            Debug.WriteLine(Group.Name);

		        End If;

		    End For;

		End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 только тех групп пользователей, которые добавлены в менеджере безопасности
 репозитория.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetabaseSecurity.AllGroups

IMetabaseSecurity.AllGroups
-


# IMetabaseSecurity.AllGroups


## Синтаксис


AllGroups: [ISecuritySubjects](../ISecuritySubjects/ISecuritySubjects.htm);


## Описание


Свойство AllGroups возвращает
 коллекцию всех групп пользователей, доступных для использования в репозитории.


## Комментарии


Данная коллекция включает в себя все группы пользователей, созданные
 в текущем репозитории.


Примечание.
 При работе в ОС Windows также в коллекцию будут включены доменные группы
 пользователей.


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MS: IMetabaseSecurity;

	    Groups: ISecuritySubjects;

	    Group: ISecuritySubject;

	Begin

	    MB := MetabaseClass.Active;

	    MS := MB.Security;

	    // Получим список групп пользователей

	    Groups := MS.AllGroups;

	    Debug.WriteLine("Список групп пользователей (" + Groups.Count.ToString + "):");

	    For Each Group In Groups Do

	        Debug.WriteLine(Group.Name);

	    End For;

	End Sub UserProc;


При выполнении примера в консоль будет выведен список всех групп пользователей,
 которые доступны для использования в текущем репозитории.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

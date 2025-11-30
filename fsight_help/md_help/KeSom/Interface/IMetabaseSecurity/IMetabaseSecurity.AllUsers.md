# IMetabaseSecurity.AllUsers

IMetabaseSecurity.AllUsers
-


# IMetabaseSecurity.AllUsers


## Синтаксис


AllUsers: [ISecuritySubjects](../ISecuritySubjects/ISecuritySubjects.htm);


## Описание


Свойство AllUsers возвращает
 коллекцию всех пользователей, доступных в текущем репозитории.


## Комментарии


Данная коллекция включает в себя всех пользователей, которые могут быть
 использованы при работе в репозитории:


	- пользователи, созданные в менеджере безопасности репозитория;


	- пользователи, имеющие признак [отложенной
	 загрузки описания](../IMetabaseUser/IMetabaseUser.IsDeferred.htm).


Примечание.
 При работе в ОС Windows также в коллекцию будут включены доменные пользователи.
 Для пользователей с признаком отложенной загрузки будет доступно только
 базовое описание ([наименование](../ISecuritySubject/ISecuritySubject.Name.htm),
 [тип субъекта безопасности](../ISecuritySubject/ISecuritySubject.Type.htm)
 и [дескриптор безопасности](../ISecuritySubject/ISecuritySubject.Sid.htm)).
 Для получения всех параметров пользователей используйте методы [IMetabaseSecurity.ResolveName](IMetabaseSecurity.ResolveName.htm),
 [IMetabaseSecurity.ResolveSid](IMetabaseSecurity.ResolveSid.htm),
 либо поиск через [IMetabaseSecurity.NewSubjectsSearch](IMetabaseSecurity.NewSubjectsSearch.htm).


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MS: IMetabaseSecurity;

	    Users: ISecuritySubjects;

	    User: ISecuritySubject;

	Begin

	    MB := MetabaseClass.Active;

	    MS := MB.Security;

	    // Получим список пользователей

	    Users := MS.AllUsers;

	    Debug.WriteLine("Список пользователей (" + Users.Count.ToString + "):");

	    For Each User In Users Do

	        Debug.WriteLine(User.Name);

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 всех пользователей, которые доступны для использования в текущем репозитории.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

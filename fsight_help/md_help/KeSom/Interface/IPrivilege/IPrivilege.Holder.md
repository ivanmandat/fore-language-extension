# IPrivilege.Holder

IPrivilege.Holder
-


# IPrivilege.Holder


## Синтаксис


		Holder(Index: Integer): [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm);


## Параметры


Index.
 Индекс субъекта безопасности.


## Описание


Свойство Holder возвращает параметры
 субъекта безопасности (пользователь или группа пользователей), обладающего
 данной привилегией.


## Комментарии


Если субъектом безопасности является пользователь с отложенной загрузкой
 описания, то свойств вернет только его базовое описание ([Наименование](../ISecuritySubject/ISecuritySubject.Name.htm),
 [тип субъекта безопасности](../ISecuritySubject/ISecuritySubject.Type.htm)
 и [дескриптор безопасности](../ISecuritySubject/ISecuritySubject.Sid.htm)).
 Для получения всех параметров пользователя используйте методы [IMetabaseSecurity.ResolveName](../IMetabaseSecurity/IMetabaseSecurity.ResolveName.htm),
 [IMetabaseSecurity.ResolveSid](../IMetabaseSecurity/IMetabaseSecurity.ResolveSid.htm)
 либо поиск через [IMetabaseSecurity.NewSubjectsSearch](../IMetabaseSecurity/IMetabaseSecurity.NewSubjectsSearch.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    MP: IMetabasePolicy;

		    Priv: IPrivilege;

		    Subject: ISecuritySubject;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    MP := MS.Policy;

		    Priv := MP.Privilege("ВХОД");

		    Debug.WriteLine("Привилегией на вход в платформу обладают следующие субъекты безопасности:");

		    For i := 0 To Priv.HolderCount - 1 Do

		        Subject := Priv.Holder(i);

		        If Subject.Type = SecuritySubjectType.Group Then

		            Debug.WriteLine("Группа: " + Subject.Name);

		        Else

		            Debug.WriteLine("Пользователь: " + Subject.Name);

		        End If;

		    End For;

		End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен список
 субъектов безопасности, обладающих привилегией на вход в платформу.


См. также:


[IPrivilege](IPrivilege.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetabaseGroup.IsMember

IMetabaseGroup.IsMember
-


# IMetabaseGroup.IsMember


## Синтаксис


		IsMember(Subject: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm)):
		 Boolean;


## Параметры


Subject. Субъект безопасности, который необходимо
 проверить.


## Описание


Метод IsMember осуществляет
 проверку наличия указанного субъекта безопасности в текущей группе пользователей.


## Комментарии


Метод возвращает True, если
 субъект безопасности, передаваемый в качестве параметра Subject,
 является членом данной группы пользователей.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    MG: IMetabaseGroups;

		    MGroup: IMetabaseGroup;

		    SSS: ISecuritySubjects;

		    SS: ISecuritySubject;

		    S: String;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    MG := MS.Groups;

		    MGroup := MG.Item(0);

		    SSS := MS.AllUsers;

		    SS := SSS.Item(200);

		    If MGroup.IsMember(SS) Then

		        Debug.WriteLine("Пользователь состоит в первой группе");

		    Else

		        Debug.WriteLine("Пользователь не состоит в первой группе");

		    End If;

		End Sub UserProc;


После выполнения примера в консоль будет выведен результат проверки,
 является ли пользователь с индексом «200» членом первой группы пользователей.


См. также:


[IMetabaseGroup](IMetabaseGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

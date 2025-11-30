# IPrivilege.SubjectGranted

IPrivilege.SubjectGranted
-


# IPrivilege.SubjectGranted


## Синтаксис


		SubjectGranted(Subject: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm)):
		 Boolean;


## Параметры


Subject. Субъект безопасности.


## Описание


Метод SubjectGranted возвращает
 признак наличия данной привилегии у субъекта безопасности, передаваемого
 посредством параметра Subject.


## Комментарии


Метод возвращает значение True,
 если субъект безопасности обладает данной привилегией, и False
 если не обладает.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    MP: IMetabasePolicy;

		    Priv: IPrivilege;

		    Subject: ISecuritySubject;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    MP := MS.Policy;

		    Priv := MP.Privilege("ЧТЕНИЕ");

		    Subject := MB.Security.ResolveName("USER");

		    If Priv.SubjectGranted(Subject) Then

		        Debug.WriteLine("Пользователь обладает привилегией на чтение и открытие объектов");

		    Else

		        Debug.WriteLine("Пользователь не обладает привилегией на чтение и открытие объектов");

		    End If;

		End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено сообщение
 о наличие привилегии на чтение и открытие объектов у пользователя USER.


См. также:


[IPrivilege](IPrivilege.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

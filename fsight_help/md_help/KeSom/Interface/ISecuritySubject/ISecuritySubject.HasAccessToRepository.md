# ISecuritySubject.HasAccessToRepository

ISecuritySubject.HasAccessToRepository
-


# ISecuritySubject.HasAccessToRepository


## Синтаксис


		HasAccessToRepository: Boolean;


## Описание


Метод HasAccessToRepository
 проверяет наличие у субъекта безопасности эффективных прав на объекты
 репозитория.


## Комментарии


Метод возвращает True, если
 у субъекта есть какие-либо права доступа на любой из объектов репозитория,
 в противном случае – False. Метод
 проверяет только разрешения, запреты игнорирует, то есть для субъекта,
 у которого есть только запреты, метод вернет False.


Выполнение проверки наличия у субъекта эффективных прав на объекты репозитория
 может занять значительное время.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    SecSub: ISecuritySubject;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    SecSub:= MS.ResolveName("USER");

		    If SecSub.HasAccessToRepository Then

		        Debug.WriteLine("У пользователя есть права доступа");

		    Else

		        Debug.WriteLine("У пользователя нет прав доступа");

		    End If;

		End Sub UserProc;


После выполнения примера в консоль будет выведено сообщение о наличии
 эффективных прав у пользователя.


См. также:


[ISecuritySubject](ISecuritySubject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ISecuritySubjectsSearch.DomainCredentials

ISecuritySubjectsSearch.DomainCredentials
-


# ISecuritySubjectsSearch.DomainCredentials


## Синтаксис


DomainCredentials: [IDomainCredentials](../IDomainCredentials/IDomainCredentials.htm);


## Описание


Свойство DomainCredentials определяет
 учетные данные, под которыми будет осуществляться авторизация в домене
 при поиске.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Pack: ISecurityPackage;

	    DomainCreds: IDomainCredentials;

	    Search: ISecuritySubjectsSearch;

	    Subjects: ISecuritySubjects;

	    Subject: ISecuritySubject;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    Search := MB.Security.NewSubjectsSearch;

	    // Определим наименование
	 домена

	    Search.NameCriteria := "TestDomain\*";

	    // Определим типы субъектов
	 безопасности, которые необходимо найти

	    Search.SubjectCriteria(SecuritySubjectType.User) := True;

	    Search.SubjectCriteria(SecuritySubjectType.Group) := True;

	    Search.AreaIncludeDB := False;

	    Search.AreaIncludeNT := True;

	    // Зададим параметры
	 поиска субъектов безопасности в домене

	    Pack := New StandardSecurityPackage.Create;

	    // Используем учётные данные текущего пользователя, авторизовавшегося в домене

	    DomainCreds := Pack.CreateCredentials(AuthenticationMode.Domain) As IDomainCredentials;

	    DomainCreds.LogonAsCurrentUser := True;

	    Search.DomainCredentials := DomainCreds;

	    Search.DomainSelectCriteria := DomainSelectType.SpecifiedDomain;

	    Search.ProtocolSelectCriteria := ProtocolSelectType.GC;

	    // Найдём субъекты безопасности

	    Search.ExecuteSearch;

	    Subjects := Search.Subjects;

	    If Subjects.Count > 0 Then

	        For Each Subject In Subjects Do

	            Debug.WriteLine("Distinguished Name: " + Subject.DistinguishedName);

	            If Subject.Type = SecuritySubjectType.User Then

	                Debug.WriteLine("Domain User Name: " + Subject.UserPrincipalName);

	            End If;

	        End For;

	    End If;

	End Sub UserProc;


При выполнении примера будет произведен поиск всех субъектов безопасности,
 зарегистрированных в домене «TestDomain». Для найденных субъектов в консоль
 среды разработки будут выведены различающиеся имена. Для доменных пользователей
 также будут выведены доменные имена.


См. также:


[ISecuritySubjectsSearch](ISecuritySubjectsSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

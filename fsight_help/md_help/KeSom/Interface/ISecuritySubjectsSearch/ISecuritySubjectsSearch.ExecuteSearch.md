# ISecuritySubjectsSearch.ExecuteSearch

ISecuritySubjectsSearch.ExecuteSearch
-


# ISecuritySubjectsSearch.ExecuteSearch


## Синтаксис


		ExecuteSearch;


## Описание


Метод ExecuteSearch осуществляет
 поиск субъектов безопасности.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Sea: ISecuritySubjectsSearch;

		    Subjs: ISecuritySubjects;

		    Subj: ISecuritySubject;

		    i: integer;

		Begin

		    MB := MetabaseClass.Active;

		    Sea := MB.Security.NewSubjectsSearch;

		    Sea.NameCriteria := "USER*";

		    Sea.SubjectCriteria(SecuritySubjectType.User) := True;

		    Sea.SubjectCriteria(SecuritySubjectType.Group) := True;

		    Sea.AreaIncludeDB := True;

		    Sea.AreaIncludeNT := True;

		    Sea.ExecuteSearch;

		    Subjs := Sea.Subjects;

		    If Subjs.Count > 0 Then

		        For i := 0 To Subjs.Count - 1 Do

		            Subj := Subjs.Item(i);

		            Debug.WriteLine(Subj.Name + ": " + Subj.Description);

		        End For;

		    End If;

		End Sub UserProc;


После выполнения примера будет произведен поиск субъектов безопасности:
 пользователей и групп, среди доменных субъектов и субъектов СУБД. Наименование
 и описание найденных субъектов будет выведено в консоль.


См. также:


[ISecuritySubjectsSearch](ISecuritySubjectsSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

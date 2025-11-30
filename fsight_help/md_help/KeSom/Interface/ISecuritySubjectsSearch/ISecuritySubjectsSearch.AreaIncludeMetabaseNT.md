# ISecuritySubjectsSearch.AreaIncludeMetabaseNT

ISecuritySubjectsSearch.AreaIncludeMetabaseNT
-


# ISecuritySubjectsSearch.AreaIncludeMetabaseNT


## Синтаксис


AreaIncludeMetabaseNT: Boolean;


## Описание


Свойство AreaIncludeMetabaseNT определяет признак поиска среди доменных субъектов безопасности, которые были зарегистрированы в репозитории и для которых был установлен признак отложенной загрузки описания.


## Комментарии


Свойство актуально, если свойству [AreaIncludeNT](ISecuritySubjectsSearch.AreaIncludeNT.htm) установлено значение False.


При установке свойству AreaIncludeMetabaseNT значения True поиск будет производиться среди доменных пользователей, которые были зарегистрированы в репозитории и для которых был установлен признак [отложенной загрузки описания](../IMetabaseUser/IMetabaseUser.IsDeferred.htm).


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Search: ISecuritySubjectsSearch;

    Subjects: ISecuritySubjects;

    Subject: ISecuritySubject;

Begin

    MB := MetabaseClass.Active;

    Search := MB.Security.NewSubjectsSearch;

    Search.NameCriteria := "Ар*";

    Search.SubjectCriteria(SecuritySubjectType.User) := True;

    Search.AreaIncludeDB := True;

    Search.AreaIncludeMetabaseNT := True;

    Search.AreaIncludeNT := False;

    Search.ExecuteSearch;

    Subjects := Search.Subjects;

    If Subjects.Count > 0 Then

        For Each Subject In Subjects Do

            Debug.WriteLine(Subject.Name + ": " + Subject.Description);

        End For;

    End If;

End Sub UserProc;


При выполнении примера, будет произведен поиск пользователей среди субъектов СУБД и доменных субъектов, которые были добавлены в репозиторий и для которых был выставлен признак отложенной загрузки описаний. Наименование и описание найденных пользователей будет выведено в консоль среды разработки.


См. также:


[ISecuritySubjectsSearch](ISecuritySubjectsSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IAuditFilterCondition.IncludeFailedOperations

IAuditFilterCondition.IncludeFailedOperations
-


# IAuditFilterCondition.IncludeFailedOperations


## Синтаксис


IncludeFailedOperations: Boolean;


## Описание


Свойство IncludeFailedOperations
 определяет признак отображения неуспешных операций над объектами. По умолчанию
 свойство имеет значение True.


## Пример


Для выполнения примера предполагается наличие фильтра протокола доступа
 с идентификатором FILTER.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    FilCon: IAuditFiltersContainer;

	    Objs: IAuditFilterObjects;

	    Obj: IAuditFilterObject;

	    Con: IAuditFilterCondition;

	    Fil: IAuditFilter;

	Begin

	    FilCon := New AuditFiltersContainer.Create;

	    FilCon.Load;

	    Objs := FilCon.Filters;

	    Obj := Objs.FindById("FILTER").Edit;

	    Fil := Obj.Filter;

	    Con := Fil.Item(0);

	    Con.IncludeFailedOperations := False;

	    Obj.Save;

	    FilCon.SaveToFile(FilCon.DefaultFileName);

	End Sub UserProc;


После выполнения примера будет изменено свойство условия фильтрации:
 не показывать неуспешные операции.


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IAuditFilterCondition.IncludeFailedLogons

IAuditFilterCondition.IncludeFailedLogons
-


# IAuditFilterCondition.IncludeFailedLogons


## Синтаксис


IncludeFailedLogons: Boolean;


## Описание


Свойство IncludeFailedLogons
 определяет признак отображения неуспешных входов в систему. По умолчанию
 свойство имеет значение True.


## Пример


Для выполнения примера предполагается наличие фильтра протокола доступа
 с идентификатором «FILTER».


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

    Con.IncludeFailedLogons := False;

    Obj.Save;

    FilCon.SaveToFile(FilCon.DefaultFileName);

End Sub UserProc;


После выполнения примера будет изменено свойство условия фильтрации:
 не показывать неудачные входы в систему.


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IAuditFilterCondition.IdFilter

IAuditFilterCondition.IdFilter
-


# IAuditFilterCondition.IdFilter


## Синтаксис


IdFilter: [IStringFilterCondition](../IStringFilterCondition/IStringFilterCondition.htm);


## Описание


Свойство IdFilter определяет
 идентификатор объекта, для которого необходимо отображать записи протокола.


## Комментарии


При применении данного фильтра протокол будет содержать записи для объектов,
 идентификатор которых содержит заданный текст.


## Пример


Для выполнения примера предполагается наличие фильтра протокола доступа
 с идентификатором «FILTER», а также наличие в репозитории отчета
 с идентификатором «Report».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    FilCon: IAuditFiltersContainer;

    Objs: IAuditFilterObjects;

    Obj: IAuditFilterObject;

    Con: IAuditFilterCondition;

    Fil: IAuditFilter;

    Filter: IStringFilterCondition;

Begin

    FilCon := New AuditFiltersContainer.Create;

    FilCon.Load;

    Objs := FilCon.Filters;

    Obj := Objs.FindById("FILTER").Edit;

    Fil := Obj.Filter;

    If Fil.Count <= 0 Then

        Con := Fil.Add;

    Else

        Con := Fil.Item(0);

    End If;

    Filter := Con.IdFilter;

    Filter.IsON := True;

    Filter.CaseSensitive := True;

    Filter.WholeWordsOnly := False;

    Filter.Value := "Report";

    Obj.Save;

    FilCon.SaveToFile(FilCon.DefaultFileName);

End Sub UserProc;


После выполнения примера будет изменено свойство условия фильтрации:
 показывать записи протокола доступа только для объектов, содержащих в
 идентификаторе «Report».


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

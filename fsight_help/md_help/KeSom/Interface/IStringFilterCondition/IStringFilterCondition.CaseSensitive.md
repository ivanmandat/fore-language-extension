# IStringFilterCondition.CaseSensitive

IStringFilterCondition.CaseSensitive
-


# IStringFilterCondition.CaseSensitive


## Синтаксис


CaseSensitive: Boolean;


## Описание


Свойство CaseSensitive определяет,
 будет ли учитываться регистр символов при поиске.


## Пример


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
 идентификаторе слово Report.


См. также:


[IStringFilterCondition](IStringFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

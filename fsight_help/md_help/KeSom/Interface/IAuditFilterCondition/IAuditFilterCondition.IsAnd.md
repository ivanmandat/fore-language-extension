# IAuditFilterCondition.IsAnd

IAuditFilterCondition.IsAnd
-


# IAuditFilterCondition.IsAnd


## Синтаксис


		IsAnd: Boolean;


## Описание


Свойство IsAnd определяет операцию
 объединения с предыдущим условием.


## Комментарии


Если свойству установлено в True,
 то будет осуществляться объединение по логическому «И», иначе - «ИЛИ».


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

		    Con := Fil.Add;

		    Con.IsAnd := True;

		    Con.IsNot := True;

		    Con.IncludeSucceededOperations := False;

		    Con := Fil.Item(0);

		    Con.MinDate := DateTime.ComposeDay(2009, 1, 1);

		    Con.MaxDate := DateTime.Now;

		    Obj.Save;

		    FilCon.SaveToFile(FilCon.DefaultFileName);

		End Sub UserProc;


После выполнения примера для фильтра будет добавлено второе условие,
 для которого будет определена операция объединения с предыдущим условием:
 «Объединение по логическому И (AND) с добавлением отрицания условия (NOT)».


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

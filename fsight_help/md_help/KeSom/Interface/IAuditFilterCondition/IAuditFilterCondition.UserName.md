# IAuditFilterCondition.UserName

IAuditFilterCondition.UserName
-


# IAuditFilterCondition.UserName


## Синтаксис


UserName(Index: Integer): String;


## Параметры


Index. Индекс
 позиции. Количество пользователей определяется свойством [IAuditFilterCondition.UserNameCount](IAuditFilterCondition.UserNameCount.htm).


## Описание


Свойство UserName определяет
 наименование пользователя платформы, для которого будут отображаться записи
 протокола.


## Пример


Для выполнения примера предполагается наличие фильтра протокола доступа
 с идентификатором FILTER, а также наличие пользователей USER_1 и USER_2.


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

	    Con.UserNameCount := 2;

	    Con.UserName(0) := "USER_1";

	    Con.UserName(1) := "USER_2";

	    Obj.Save;

	    FilCon.SaveToFile(FilCon.DefaultFileName);

	End Sub UserProc;


После выполнения примера будет изменено свойство условия фильтрации:
 показывать записи протокола доступа только для заданных пользователей.


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

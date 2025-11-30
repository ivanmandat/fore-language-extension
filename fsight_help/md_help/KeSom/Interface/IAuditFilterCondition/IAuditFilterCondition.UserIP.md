# IAuditFilterCondition.UserIP

IAuditFilterCondition.UserIP
-


# IAuditFilterCondition.UserIP


## Синтаксис


UserIP(Index: Integer): String;


## Параметры


Index.
 Индекс позиции. Количество IP-адресов определяется свойством [IAuditFilterCondition.UserIPCount](IAuditFilterCondition.UserIPCount.htm).


## Описание


Свойство UserIP определяет наименование
 IP-адреса рабочей станции, для которой будут отображаться записи протокола.


## Пример


Для выполнения примера предполагается наличие фильтра протокола доступа
 с идентификатором FILTER, а также наличие пользователей с IP-адресом 10.0.0.5
 и 10.0.0.100.


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

	    Con.UserIPCount := 2;

	    Con.UserIP(0) := "10.0.0.5";

	    Con.UserIP(1) := "10.0.0.100";

	    Obj.Save;

	    FilCon.SaveToFile(FilCon.DefaultFileName);

	End Sub UserProc;


После выполнения примера будет изменено свойство условия фильтрации:
 показывать записи протокола доступа только для станций с заданным IP-адресом.


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

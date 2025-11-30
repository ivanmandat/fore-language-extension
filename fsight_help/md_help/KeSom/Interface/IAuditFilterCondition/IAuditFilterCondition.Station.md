# IAuditFilterCondition.Station

IAuditFilterCondition.Station
-


# IAuditFilterCondition.Station


## Синтаксис


Station(Index: Integer): String;


## Параметры


Index. Индекс
 позиции. Количество станций определяется свойством [IAuditFilterCondition.StationCount](IAuditFilterCondition.StationCount.htm).


## Описание


Свойство Station определяет
 наименование рабочей станции, для которой будут отображаться записи протокола.


## Пример


Для выполнения примера предполагается наличие фильтра протокола доступа
 с идентификатором FILTER и две рабочие станции WORKSTATION_1 и WORKSTATION_2.


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

	    Con.StationCount := 2;

	    Con.Station(0) := "WORKSTATION_1";

	    Con.Station(1) := "WORKSTATION_2";

	    Obj.Save;

	    FilCon.SaveToFile(FilCon.DefaultFileName);

	End Sub UserProc;


После выполнения примера будет изменено свойство условия фильтрации:
 показывать записи протокола доступа только для заданных рабочих станций.


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

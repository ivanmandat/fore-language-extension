# IAuditFiltersContainer.Filters

IAuditFiltersContainer.Filters
-


# IAuditFiltersContainer.Filters


## Синтаксис


Filters: [IAuditFilterObjects](../IAuditFilterObjects/IAuditFilterObjects.htm);


## Описание


Свойство Filters возвращает
 фильтры, которые содержит контейнер.


## Пример


Для выполнения примера требуется наличие в контейнере нескольких фильтров.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    FilCon: IAuditFiltersContainer;

	Begin

	    FilCon := New AuditFiltersContainer.Create;

	    FilCon.Load;

	    Debug.WriteLine(FilCon.Filters.Count);

	End Sub UserProc;


После выполнения примера, в окно консоли будет выведено количество фильтров,
 содержащихся в контейнере.


См. также:


[IAuditFiltersContainer](IAuditFiltersContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

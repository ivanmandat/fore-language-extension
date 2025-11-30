# IAuditFilterObjects.Count

IAuditFilterObjects.Count
-


# IAuditFilterObjects.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 объектов в коллекции.


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    FilCon: IAuditFiltersContainer;

	    Objs: IAuditFilterObjects;

	Begin

	    FilCon := New AuditFiltersContainer.Create;

	    FilCon.Load;

	    Objs := FilCon.Filters;

	    Debug.WriteLine(Objs.Count);

	End Sub UserProc;


После выполнения примера, в окно консоли будет выведено количество фильтров,
 содержащихся в контейнере, загруженном из файла по умолчанию.


См. также:


[IAuditFilterObjects](IAuditFilterObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

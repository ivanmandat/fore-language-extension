# IAuditFiltersContainer.Load

IAuditFiltersContainer.Load
-


# IAuditFiltersContainer.Load


## Синтаксис


Load;


## Описание


Метод Load осуществляет загрузку
 контейнера из файла по умолчанию.


## Пример


Для выполнения примера предполагается наличие файла «C:\Filter.xml»,
 содержащего фильтр протокола доступа.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    FilCon: IAuditFiltersContainer;

	Begin

	    FilCon := New AuditFiltersContainer.Create;

	    FilCon.Load;

	    FilCon.SaveToFile("C:\Filters.xml");

	End Sub UserProc;


После выполнения примера, фильтры в контейнер будут загружены из файла
 по умолчанию, а затем контейнер будет сохранен в файл «C:\Filters.xml».


См. также:


[IAuditFiltersContainer](IAuditFiltersContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

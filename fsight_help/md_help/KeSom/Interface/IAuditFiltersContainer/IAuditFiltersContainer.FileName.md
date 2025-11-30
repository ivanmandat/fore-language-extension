# IAuditFiltersContainer.FileName

IAuditFiltersContainer.FileName
-


# IAuditFiltersContainer.FileName


## Синтаксис


FileName: String;


## Описание


Свойство FileName определяет
 имя файла, из которого был загружен контейнер.


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    FilCon: IAuditFiltersContainer;

	Begin

	    FilCon := New AuditFiltersContainer.Create;

	    FilCon.Load;

	    Debug.WriteLine(FilCon.FileName);

	End Sub UserProc;


После выполнения примера, в окно консоли будет выведено имя файла, из
 которого был загружен контейнер.


См. также:


[IAuditFiltersContainer](IAuditFiltersContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

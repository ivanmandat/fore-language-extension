# IAuditFilter.Assign

IAuditFilter.Assign
-


# IAuditFilter.Assign


## Синтаксис


Assign(Value: [IAuditFilter](IAuditFilter.htm));


## Параметры


Value. Фильтр
 протокола доступа.


## Описание


Метод Assign копирует условие
 фильтрации.


## Пример


Для выполнения примера предполагается наличие файла «C:\1.xml», содержащего
 фильтр протокола доступа.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    FilCon: IAuditFiltersContainer;

    FilObj: IAuditFilterObject;

    AF: IAuditFilter;

Begin

    FilCon := New AuditFiltersContainer.Create;

    FilCon.LoadFromFile("C:\1.xml");

    FilObj := FilCon.Filters.Add;

    FilObj.Filter.Assign(AF);

    FilCon.SaveToFile(FilCon.FileName);

End Sub UserProc;


После выполнения примера, в загруженный файл фильтра протокола доступа
 будет добавлен фильтр. Затем файл фильтра будет сохранен.


См. также:


[IAuditFilter](IAuditFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

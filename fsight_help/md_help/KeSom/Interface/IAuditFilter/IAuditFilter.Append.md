# IAuditFilter.Append

IAuditFilter.Append
-


# IAuditFilter.Append


## Синтаксис


Append(Value: [IAuditFilter](IAuditFilter.htm));


## Параметры


Value. Фильтр протокола доступа.


## Описание


Метод Append дополняет фильтр
 новыми условиями.


## Пример


Для выполнения примера предполагается наличие файла «C:\1.xml», содержащего
 фильтр протокола доступа.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    FilCon: IAuditFiltersContainer;

    FilObj: IAuditFilterObject;

    AF: IAuditFilter;

    New_Filtr: IAuditFilterCondition;

Begin

    FilCon := New AuditFiltersContainer.Create;

    FilCon.LoadFromFile("C:\1.xml");

    FilObj := FilCon.Filters.Add;

    AF := FilObj.Filter;

    New_Filtr := AF.Add;

    New_Filtr.FinishDate := 39814;

    FilObj.Filter.Append(AF);

    FilCon.SaveToFile(FilCon.FileName);

End Sub UserProc;


После выполнения примера в загруженный файл фильтра протокола доступа
 будет добавлен фильтр, дополненный новым условием. Затем файл фильтра
 будет сохранен обратно в файл.


См. также:


[IAuditFilter](IAuditFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

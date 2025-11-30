# IAuditFiltersContainer.Append

IAuditFiltersContainer.Append
-


# IAuditFiltersContainer.Append


## Синтаксис


Append(Value: [IAuditFiltersContainer](IAuditFiltersContainer.htm));


## Параметры


Value. Контейнер, фильтры которого
 должны быть добавлены.


## Описание


Метод Append дополняет контейнер
 новыми фильтрами.


## Пример


Для выполнения примера предполагается наличие файла «C:\Filter.xml»,
 содержащего фильтр протокола доступа, а также файл «C:\Copy.xml».


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    FilCon, FilConDef: IAuditFiltersContainer;

	Begin

	    FilCon := New AuditFiltersContainer.Create;

	    FilCon.LoadFromFile("C:\Filter.xml");

	    FilConDef := New AuditFiltersContainer.Create;

	    FilConDef.Load;

	    FilCon.Append(FilConDef);

	    FilCon.SaveToFile("C:\Copy.xml");

	End Sub UserProc;


После выполнения примера фильтры из контейнера FilConDef будут добавлены
 в контейнер FilCon. Контейнер FilCon будет сохранён в файл «C:\Copy.xml».


См. также:


[IAuditFiltersContainer](IAuditFiltersContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

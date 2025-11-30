# IAuditFiltersContainer.LoadFromFile

IAuditFiltersContainer.LoadFromFile
-


# IAuditFiltersContainer.LoadFromFile


## Синтаксис


LoadFromFile(FileName: String);


## Параметры


FileName. Полное имя файла,
 из которого должен быть загружен контейнер.


## Описание


Метод LoadFromFile осуществляет
 загрузку контейнера из файла.


## Пример


Для выполнения примера предполагается наличие файла «C:\Filter.xml»,
 содержащего фильтр протокола доступа и файл «C:\Copy.xml».


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    FilCon, FilConDef: IAuditFiltersContainer;

	Begin

	    FilCon := New AuditFiltersContainer.Create;

	    FilCon.LoadFromFile("C:\Filter.xml");

	    FilConDef := New AuditFiltersContainer.Create;

	    FilConDef.Assign(FilCon);

	    FilConDef.SaveToFile("C:\Copy.xml");

	End Sub UserProc;


После выполнения примера, контейнер FilCon будет загружен из файла «C:\Filter.xml»
 и скопирован в контейнер FilConDef. Контейнер FilConDef будет сохранен
 в файл «C:\Copy.xml».


См. также:


[IAuditFiltersContainer](IAuditFiltersContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

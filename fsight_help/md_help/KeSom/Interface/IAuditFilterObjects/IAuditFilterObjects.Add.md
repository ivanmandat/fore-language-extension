# IAuditFilterObjects.Add

IAuditFilterObjects.Add
-


# IAuditFilterObjects.Add


## Синтаксис


Add: [IAuditFilterObject](../IAuditFilterObject/IAuditFilterObject.htm);


## Описание


Метод Add выполняет добавление
 нового фильтра в коллекцию.


## Пример


Для выполнения примера предполагается наличие файла «C:\Filter.xml».


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    FilCon: IAuditFiltersContainer;

	    Objs: IAuditFilterObjects;

	    Obj: IAuditFilterObject;

	Begin

	    FilCon := New AuditFiltersContainer.Create;

	    FilCon.Load;

	    Objs := FilCon.Filters;

	    Obj := Objs.Add.Edit;

	    Obj.Description := "Описание фильтра";

	    Obj.Save;

	    FilCon.SaveToFile("C:\Filter.xml");

	End Sub UserProc;


После выполнения примера, в коллекцию объектов будет добавлен новый
 фильтр. Контейнер, содержащий данную коллекцию, будет сохранен в файл
 «C:\Filter.xml».


См. также:


[IAuditFilterObjects](IAuditFilterObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

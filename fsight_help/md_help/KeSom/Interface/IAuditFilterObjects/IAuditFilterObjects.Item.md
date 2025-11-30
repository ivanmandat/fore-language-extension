# IAuditFilterObjects.Item

IAuditFilterObjects.Item
-


# IAuditFilterObjects.Item


## Синтаксис


Item(Index: Integer): [IAuditFilterObject](../IAuditFilterObject/IAuditFilterObject.htm);


## Параметры


Index. Индекс объекта в коллекции.


## Описание


Свойство Item возвращает объект
 из коллекции по его индексу.


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

	    Obj := Objs.Item(0).Edit;

	    Obj.Description := "Описание фильтра";

	    Obj.Save;

	    FilCon.SaveToFile("C:\Filter.xml");

	End Sub UserProc;


После выполнения примера, описание первого фильтра протокола доступа
 будет изменено. Контейнер, содержащий данный фильтр, будет сохранен в
 файл «C:\Filter.xml».


См. также:


[IAuditFilterObjects](IAuditFilterObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

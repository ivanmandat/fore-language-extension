# IAuditFilterObject.Assign

IAuditFilterObject.Assign
-


# IAuditFilterObject.Assign


## Синтаксис


Assign(Value: [IAuditFilterObject](IAuditFilterObject.htm));


## Параметры


Value. Объект, который должен
 быть скопирован.


## Описание


Метод Assign копирует объект,
 содержащий фильтр протокола доступа.


## Пример


Для выполнения примера предполагается наличие файла «C:\Filter.xml»,
 содержащего фильтр протокола доступа.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    FilCon, FilConDef: IAuditFiltersContainer;

	    Objs: IAuditFilterObjects;

	    Obj: IAuditFilterObject;

	Begin

	    FilConDef := New AuditFiltersContainer.Create;

	    FilConDef.LoadFromFile("C:\Filter.xml");

	    FilCon := New AuditFiltersContainer.Create;

	    FilCon.Load;

	    Objs := FilConDef.Filters;

	    Obj := Objs.Item(0).Edit;

	    Obj.Assign(FilCon.Filters.Item(0));

	    Obj.Save;

	End Sub UserProc;


После выполнения примера параметры первого фильтра из контейнера «FilConDef»
 станут аналогичны параметрам первого фильтра из контейнера «FilCon».


См. также:


[IAuditFilterObject](IAuditFilterObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

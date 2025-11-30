# IMetaHierarchyInstance.Scheme

IMetaHierarchyInstance.Scheme
-


# IMetaHierarchyInstance.Scheme


## Синтаксис


Scheme: Object;


## Описание


Свойство Scheme возвращает данные
 базы данных временных рядов, использующей иерархию элементов системного
 справочника.


## Пример


Для выполнения примера предполагается наличие объекта «HInst» (интерфейс
 [IMetaHierarchyInstance](IMetaHierarchyInstance.htm)).


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    HInst: IMetaDictionaryInstance;

	    RubInstance: IRubricatorInstance;

	    Rub: IMetabaseObject;

	Begin

	    RubInstance := HInst.Scheme As IRubricatorInstance;

	    Rub := RubInstance.Rubricator As IMetabaseObject;

	    Debug.WriteLine(Rub.Name);

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 базы данных временных рядов, использующей данные иерархии элементов «DictInst».


См. также:


[IMetaHierarchyInstance](IMetaHierarchyInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

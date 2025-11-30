# IMetaDictionaryInstance.Scheme

IMetaDictionaryInstance.Scheme
-


# IMetaDictionaryInstance.Scheme


## Синтаксис


Scheme: Object;


## Описание


Свойство Scheme возвращает данные
 базы данных временных рядов, использующей системную таблицу.


## Пример


Для выполнения примера предполагается наличие объекта «DictInst» (интерфейс
 [IMetaDictionaryInstance](IMetaDictionaryInstance.htm)).


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    DictInst: IMetaDictionaryInstance;

	    RubInstance: IRubricatorInstance;

	    Rub: IMetabaseObject;

	Begin

	    RubInstance := DictInst.Scheme As IRubricatorInstance;

	    Rub := RubInstance.Rubricator As IMetabaseObject;

	    Debug.WriteLine(Rub.Name);

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 базы данных временных рядов, использующей данные объекта «DictInst».


См. также:


[IMetaDictionaryInstance](IMetaDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

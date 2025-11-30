# IMetaDictionaryInstance.OpenHierarchy

IMetaDictionaryInstance.OpenHierarchy
-


# IMetaDictionaryInstance.OpenHierarchy


## Синтаксис


OpenHierarchy(Hierarchy: [IMetaHierarchy](../IMetaHierarchy/IMetaHierarchy.htm)):
 [IMetaHierarchyInstance](../IMetaHierarchyInstance/IMetaHierarchyInstance.htm);


## Параметры


Hierarchy - открываемая иерархия
 элементов.


## Описание


Метод OpenHierarchy открывает
 иерархию элементов базы данных временных рядов.


Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Rubr: IMetabaseObject;

	    RubrInst: IRubricatorInstance;

	    Facts: IMetaDictionaryInstance;

	    Hierarchy: IMetaHierarchy;

	    HInstance: IMetaHierarchyInstance;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	End Sub UserProc;


После выполнения примера в переменной «HInstance» будет содержаться
 открытая иерархия, установленная по умолчанию для показателей в базе данных
 временных рядов.


См. также:


[IMetaDictionaryInstance](IMetaDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

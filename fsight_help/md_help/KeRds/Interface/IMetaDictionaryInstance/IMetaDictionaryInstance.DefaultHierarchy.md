# IMetaDictionaryInstance.DefaultHierarchy

IMetaDictionaryInstance.DefaultHierarchy
-


# IMetaDictionaryInstance.DefaultHierarchy


## Синтаксис


DefaultHierarchy: [IMetaHierarchyInstance](../IMetaHierarchyInstance/IMetaHierarchyInstance.htm);


## Описание


Метод DefaultHierarchy возвращает
 данные иерархии, установленной по умолчанию для справочника.


## Пример


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

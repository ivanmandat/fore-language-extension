# IMetaHierarchyLevels.OpenDimensions

IMetaHierarchyLevels.OpenDimensions
-


# IMetaHierarchyLevels.OpenDimensions


## Синтаксис


OpenDimensions(Data: Variant);


## Параметры


Data - измерение.


## Описание


Метод OpenDimensions осуществляет
 открытие измерения.


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

	    HLevels: IMetaHierarchyLevels;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HLevels := Hierarchy.Levels;

	    HLevels.OpenDimensions(Facts);

	End Sub Userproc;


После выполнения примера будет открыто измерение показателей.


См. также:


[IMetaHierarchyLevels](IMetaHierarchyLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

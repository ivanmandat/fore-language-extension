# IMetaHierarchyLevel.OpenDimensions

IMetaHierarchyLevel.OpenDimensions
-


# IMetaHierarchyLevel.OpenDimensions


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

	    Mb: IMetabase;

	    Rubr: IMetabaseObject;

	    RubrInst: IRubricatorInstance;

	    Facts: IMetaDictionaryInstance;

	    Hierarchy: IMetaHierarchy;

	    HLevels: IMetaHierarchyLevels;

	    HLev: IMetaHierarchyLevel;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HLevels := Hierarchy.Levels;

	    HLev := HLevels.Item(0);

	    HLev.OpenDimensions(Facts);

	End Sub UserProc;


После выполнения примера будет открыто измерение для первого уровня
 иерархии показателей.


См. также:


[IMetaHierarchyLevel](IMetaHierarchyLevel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

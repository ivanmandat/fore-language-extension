# IMetaHierarchyLevels.Leaf

IMetaHierarchyLevels.Leaf
-


# IMetaHierarchyLevels.Leaf


## Синтаксис


Leaf: [IMetaHierarchyLevel](../IMetaHierarchyLevel/IMetaHierarchyLevel.htm);


## Описание


Свойство Leaf возвращает листьевой
 уровень коллекции. Листьевой уровень - это уровень, у которого отсутствуют
 уровни-потомки.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Rubr: IRubricator;

	    Facts: IMetaDictionary;

	    i: Integer;

	    Hierarchy: IMetaHierarchy;

	    HLevels: IMetaHierarchyLevels;

	    HLev: IMetaHierarchyLevel;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := Rubr.Facts;

	    Hierarchy := Facts.DefaultHierarchy;

	    HLevels := Hierarchy.Levels;

	    Debug.WriteLine("Листьевой уровень: " + HLevels.Leaf.Name);

	    For i := 0 To HLevels.Count - 1 Do

	        HLev := HLevels.Item(i);

	        Debug.WriteLine("Уровень " + i.ToString + " : " + HLev.Name);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 текущей иерархии базы данных временных рядов.


См. также:


[IMetaHierarchyLevels](IMetaHierarchyLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

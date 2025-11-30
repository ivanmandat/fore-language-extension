# IMetaHierarchy.Levels

IMetaHierarchy.Levels
-


# IMetaHierarchy.Levels


## Синтаксис


Levels: [IMetaHierarchyLevels](../IMetaHierarchyLevels/IMetaHierarchyLevels.htm);


## Описание


Свойство Levels возвращает уровни
 иерархии.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки Metabase, Rds, Cubes.


	Sub UserProc;

	Var

	    Mb: IMetabase;

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

	    For i := 0 To HLevels.Count - 1 Do

	        HLev := HLevels.Item(i);

	        Debug.WriteLine("Уровень " + i.ToString + " : " + HLev.Name);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 текущей иерархии базы данных временных рядов.


См. также:


[IMetaHierarchy](IMetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

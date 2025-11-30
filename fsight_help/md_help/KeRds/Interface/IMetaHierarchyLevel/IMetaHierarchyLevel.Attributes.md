# IMetaHierarchyLevel.Attributes

IMetaHierarchyLevel.Attributes
-


# IMetaHierarchyLevel.Attributes


## Синтаксис


Attributes: [IMetaAttributesSet](../IMetaAttributesSet/IMetaAttributesSet.htm);


## Описание


Свойство Attributes возвращает
 набор атрибутов уровня иерархии.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Rubr: IRubricator;

	    Facts: IMetaDictionary;

	    i, j: Integer;

	    Hierarchy: IMetaHierarchy;

	    HLevels: IMetaHierarchyLevels;

	    HLev: IMetaHierarchyLevel;

	    Att: IMetaAttribute;

	    AttsSet: IMetaAttributesSet;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := Rubr.Facts;

	    Hierarchy := Facts.DefaultHierarchy;

	    HLevels := Hierarchy.Levels;

	    For i := 0 To HLevels.Count - 1 Do

	        HLev := HLevels.Item(i);

	        Debug.WriteLine("Уровень " + i.ToString + " : " + HLev.Name);

	        AttsSet := HLev.Attributes;

	        For j := 0 To AttsSet.Count - 1 Do

	            Att := AttsSet.Item(j);

	            Debug.WriteLine("Атрибут уровня " + i.ToString + " : " + Att.Name);

	        End For;

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 текущей иерархии базы данных временных рядов.


См. также:


[IMetaHierarchyLevel](IMetaHierarchyLevel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

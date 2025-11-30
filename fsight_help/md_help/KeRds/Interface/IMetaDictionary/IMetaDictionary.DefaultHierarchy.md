# IMetaDictionary.DefaultHierarchy

IMetaDictionary.DefaultHierarchy
-


# IMetaDictionary.DefaultHierarchy


## Синтаксис


DefaultHierarchy: [IMetaHierarchy](../IMetaHierarchy/IMetaHierarchy.htm);


## Описание


Свойство DefaultHierarchy возвращает
 иерархию базы данных временных рядов.


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

	    HAttributes: IMetaHierarchyAttributes;

	    Att: IMetaAttribute;

	    Conds: IOrmConditions;

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

	    HAttributes := Hierarchy.Attributes;

	    For i := 0 To HAttributes.Count - 1 Do

	        Att := HAttributes.Item(i);

	        Debug.WriteLine("Атрибут " + i.ToString + " : " + Att.Name);

	    End For;

	    Conds := Hierarchy.CustomWhere;

	    If Conds = Null Then

	        Debug.WriteLine("Дополнительное условие не задано");

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 текущей иерархии базы данных временных рядов.


См. также:


[IMetaDictionary](IMetaDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

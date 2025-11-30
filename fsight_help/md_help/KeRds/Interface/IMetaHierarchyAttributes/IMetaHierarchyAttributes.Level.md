# IMetaHierarchyAttributes.Level

IMetaHierarchyAttributes.Level
-


# IMetaHierarchyAttributes.Level


## Синтаксис


Level(Attribute: [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm)):
 [IMetaHierarchyLevel](../IMetaHierarchyLevel/IMetaHierarchyLevel.htm);


## Параметры


Attribute - атрибут.


## Описание


Свойство Level возвращает уровень,
 которому принадлежит указанный атрибут.


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

	    HAttributes: IMetaHierarchyAttributes;

	    Att: IMetaAttribute;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := Rubr.Facts;

	    Hierarchy := Facts.DefaultHierarchy;

	    HAttributes := Hierarchy.Attributes;

	    For i := 0 To HAttributes.Count - 1 Do

	        Att := HAttributes.Item(i);

	        Debug.WriteLine("Атрибут " + i.ToString + " : " + Att.Name);

	        Debug.WriteLine("Уровень: " + HAttributes.Level(Att).Name);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация об
 атрибутах текущей иерархии базы данных временных рядов.


См. также:


[IMetaHierarchyAttributes](IMetaHierarchyAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetaHierarchy.Attributes

IMetaHierarchy.Attributes
-


# IMetaHierarchy.Attributes


## Синтаксис


Attributes: [IMetaHierarchyAttributes](../IMetaHierarchyAttributes/IMetaHierarchyAttributes.htm);


## Описание


Свойство Attributes возвращает
 атрибуты, входящие в иерархию.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки: Metabase, Rds, Cubes.


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

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация об
 атрибутах в текущей иерархии базы данных временных рядов.


См. также:


[IMetaHierarchy](IMetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

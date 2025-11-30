# IMetaHierarchyAttributes.Exchange

IMetaHierarchyAttributes.Exchange
-


# IMetaHierarchyAttributes.Exchange


## Синтаксис


Exchange(AttrFrom: [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm);
 AttrTo: [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm));


## Параметры


AttrFrom - атрибут, которой
 необходимо переместить.


AttrTo - атрибут, которой необходимо
 переместить.


## Описание


Метод Exchange осуществляет
 обмен местами атрибутов в иерархии. После выполнения данного метода атрибут,
 указанный в параметре AttrFrom
 будет перемещен на место атрибута, указанного в параметре AttrTo.


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

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := Rubr.Facts;

	    Hierarchy := Facts.DefaultHierarchy;

	    HAttributes := Hierarchy.Attributes;

	    i := HAttributes.Count-1;

	    HAttributes.Exchange(HAttributes.Item(0), HAttributes.Item(i));

	End Sub UserProc;


После выполнения примера первый и последний атрибут в иерархии будут
 обменяны местами.


См. также:


[IMetaHierarchyAttributes](IMetaHierarchyAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetaHierarchyAttributes.MoveAllTo

IMetaHierarchyAttributes.MoveAllTo
-


# IMetaHierarchyAttributes.MoveAllTo


## Синтаксис


MoveAllTo(Attributes: [IMetaAttributesSet](../IMetaAttributesSet/IMetaAttributesSet.htm);
 LevelTo: [IMetaHierarchyLevel](../IMetaHierarchyLevel/IMetaHierarchyLevel.htm);
 [IndexTo: Integer = -1);


## Параметры


Attributes - набор атрибутов,
 который необходимо переместить.


LevelTo - уровень иерархии,
 на который нужно переместить набор атрибутов.


IndexTo - индекс позиции иерархии,
 в который нужно переместить набор атрибутов. Необязательный параметр.


## Описание


Метод MoveAllTo осуществляет
 перемещение набора атрибутов на указанный уровень.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Rubr: IRubricator;

	    Facts: IMetaDictionary;

	    Hierarchy: IMetaHierarchy;

	    HAttributes: IMetaHierarchyAttributes;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := Rubr.Facts;

	    Hierarchy := Facts.DefaultHierarchy;

	    HAttributes := Hierarchy.Attributes;

	    HAttributes.MoveAllTo(HAttributes, Hierarchy.Levels.Item(0));

	End Sub UserProc;


После выполнения примера все атрибуты будут перемещены на верхний уровень
 иерархии.


См. также:


[IMetaHierarchyAttributes](IMetaHierarchyAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

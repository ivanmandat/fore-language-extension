# IMetaHierarchyAttributes.MoveToNew

IMetaHierarchyAttributes.MoveToNew
-


# IMetaHierarchyAttributes.MoveToNew


## Синтаксис


MoveToNew(Attribute: [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm);
 LevelBefore: [IMetaHierarchyLevel](../IMetaHierarchyLevel/IMetaHierarchyLevel.htm)):
 [IMetaHierarchyLevel](../IMetaHierarchyLevel/IMetaHierarchyLevel.htm);


## Параметры


Attribute - атрибут, который
 необходимо выделить в отдельный уровень.


LevelBefore - уровень иерархии,
 перед которым нужно создать уровень.


## Описание


Метод MoveToNew осуществляет
 выделение атрибута в отдельный уровень.


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

	    Att: IMetaAttribute;

	    HLev: IMetaHierarchyLevel;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := Rubr.Facts;

	    Hierarchy := Facts.DefaultHierarchy;

	    HAttributes := Hierarchy.Attributes;

	    Att := Facts.Attributes.FindById("REV");

	    HLev := HAttributes.MoveToNew(Att, Hierarchy.Levels.Leaf);

	End Sub UserProc;


После выполнения примера атрибут показателей «REV» будут выделен в отдельный
 уровень иерархии. Созданный уровень будет помещен перед листьевым уровнем
 иерархии.


См. также:


[IMetaHierarchyAttributes](IMetaHierarchyAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

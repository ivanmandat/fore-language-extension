# IMetaHierarchyAttributes.MoveTo

IMetaHierarchyAttributes.MoveTo
-


# IMetaHierarchyAttributes.MoveTo


## Синтаксис


MoveTo(Attribute: [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm);
 LevelTo: [IMetaHierarchyLevel](../IMetaHierarchyLevel/IMetaHierarchyLevel.htm);
 [IndexTo: Integer = -1);


## Параметры


Attribute - атрибут, который
 необходимо переместить.


LevelTo - уровень иерархии,
 на который нужно переместить атрибут.


IndexTo - индекс позиции иерархии,
 в который нужно переместить атрибут. Необязательный параметр.


## Описание


Метод MoveTo осуществляет перемещение
 атрибута на указанный уровень.


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

	    HAttributes.MoveTo(HAttributes.Item(0), Hierarchy.Levels.Leaf);

	End Sub UserProc;


После выполнения примера первый атрибут будут перемещены на последний
 уровень иерархии.


См. также:


[IMetaHierarchyAttributes](IMetaHierarchyAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

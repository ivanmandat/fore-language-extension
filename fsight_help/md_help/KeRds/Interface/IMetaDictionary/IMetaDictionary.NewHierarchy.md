# IMetaDictionary.NewHierarchy

IMetaDictionary.NewHierarchy
-


# IMetaDictionary.NewHierarchy


## Синтаксис


NewHierarchy(Attributes: [IMetaAttributesSet](../IMetaAttributesSet/IMetaAttributesSet.htm)):
 [IMetaHierarchy](../IMetaHierarchy/IMetaHierarchy.htm);


## Параметры


Attributes - набор атрибутов
 базы данных временных рядов.


## Описание


Метод NewHierarchy создает иерархию
 базы данных временных рядов по указанным атрибутам.


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

	    Atts: IMetaAttributes;

	    AttsSet: IMetaAttributesSet;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Edit As IRubricator;

	    Facts := Rubr.Facts;

	    Atts := Facts.Attributes;

	    AttsSet := Atts.CreateSubset("REV;DL", SubsetOperation.Select_);

	    Hierarchy := Facts.NewHierarchy(AttsSet);

	End Sub UserProc;


После выполнения примера в переменной «Hierarchy» будет сохранена новая
 иерархия для системного справочника показателей, состоящая из двух уровней.


См. также:


[IMetaDictionary](IMetaDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

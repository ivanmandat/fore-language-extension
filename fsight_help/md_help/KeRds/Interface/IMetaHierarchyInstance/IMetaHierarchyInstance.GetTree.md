# IMetaHierarchyInstance.GetTree

IMetaHierarchyInstance.GetTree
-


# IMetaHierarchyInstance.GetTree


## Синтаксис


GetTree(Position: [IMetaHierarchyPosition](../IMetaHierarchyPosition/IMetaHierarchyPosition.htm)):
 [IMetaMembersTree](../IMetaMembersTree/IMetaMembersTree.htm);


## Параметры


Position.
 Позиция элементов в иерархии.


## Описание


Метод GetTree возвращает иерархию
 элементов базы данных временных рядов, расположенных в указанной позиции.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Rubr: IMetabaseObject;

	    RubrInst: IRubricatorInstance;

	    Facts: IMetaDictionaryInstance;

	    Hierarchy: IMetaHierarchy;

	    HInstance: IMetaHierarchyInstance;

	    RootPosition: IMetaHierarchyPosition;

	    Tree: IMetaMembersTree;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Edit;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    RootPosition := HInstance.RootPosition;

	    Tree := HInstance.GetTree(RootPosition);

	End Sub UserProc;


После выполнения примера в переменной «Tree» будут содержаться корневые
 элементы в иерархии справочника показателей.


См. также:


[IMetaHierarchyInstance](IMetaHierarchyInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

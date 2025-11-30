# IMetaMemberChildren.GetTree

IMetaMemberChildren.GetTree
-


# IMetaMemberChildren.GetTree


## Синтаксис


GetTree: [IMetaMembersTree](../IMetaMembersTree/IMetaMembersTree.htm);


## Описание


Свойство GetTree возвращает
 потомков элемента иерархии в виде дерева.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «OBJ_FC».


Sub
 Main;


Var


Mb: Imetabase;


Rubr: IMetabaseObject;


RubrInst: IRubricatorInstance;


Facts: IMetaDictionaryInstance;


Hierarchy: IMetaHierarchy;


HInstance: IMetaHierarchyInstance;


Mem: IMetaMember;


MemCh: IMetaMemberChildren;


Tree: IMetaMembersTree;


Begin


Mb := MetabaseClass.Active;


Rubr := MB.ItemById("OBJ_FC").Bind;


RubrInst := Rubr.Open(Null) As
 IRubricatorInstance;


Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);


Hierarchy := Facts.Dictionary.DefaultHierarchy;


HInstance := Facts.OpenHierarchy(Hierarchy);


Mem := HInstance.Root;


MemCh := Mem.Children;


If
 Not MemCh.IsEmpty Then


Tree := MemCh.GetTree;


Tree.Reset;


While
 Not Tree.Eof Do


If
 Tree.CurrentPosition.LevelIndex = 0 Then


Debug.WriteLine(Tree.Current.Name);


End
 If;


Tree.Next;


End
 While;


End
 If;


End
 Sub Main;


После выполнения примера в окно консоли
 будут выведены наименования дочерних элементов для вершины иерархии показателей.


См. также:


[IMetaMemberChildren](IMetaMemberChildren.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

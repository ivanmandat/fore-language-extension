# IMetaHierarchyInstance.GetRootTree

IMetaHierarchyInstance.GetRootTree
-


# IMetaHierarchyInstance.GetRootTree


## Синтаксис


GetRootTree: [IMetaMembersTree](../IMetaMembersTree/IMetaMembersTree.htm);


## Описание


Метод GetRootTree возвращает
 полную иерархию элементов базы данных временных рядов.


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

	    Tree: IMetaMembersTree;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Edit;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    Tree := HInstance.GetRootTree;

	    Tree.Reset;

	    While Not Tree.Eof Do

	        If Tree.CurrentOffset = 0 Then

	            ne(Tree.Current.Name);

	        End If;

	        Tree.Next;

	    End While;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены наименования
 всех корневых элементов первого уровня иерархии.


См. также:


[IMetaHierarchyInstance](IMetaHierarchyInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

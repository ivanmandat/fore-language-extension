# IMetaMembersTree.CurrentDepth

IMetaMembersTree.CurrentDepth
-


# IMetaMembersTree.CurrentDepth


## Синтаксис


CurrentDepth: Integer;


## Описание


Свойство CurrentDepth возвращает
 число уровней иерархии от корня справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «OBJ_FC».


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

	        If Tree.CurrentDepth = 0 Then

	            Debug.WriteLine(Tree.Current.Name);

	        End If;

	    Tree.Next;

	    End While;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены наименования
 всех корневых элементов первого уровня иерархии.


См. также:


[IMetaMembersTree](IMetaMembersTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

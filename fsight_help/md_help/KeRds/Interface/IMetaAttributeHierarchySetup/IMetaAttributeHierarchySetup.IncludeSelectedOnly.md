# IMetaAttributeHierarchySetup.IncludeSelectedOnly

IMetaAttributeHierarchySetup.IncludeSelectedOnly
-


# IMetaAttributeHierarchySetup.IncludeSelectedOnly


## Синтаксис


IncludeSelectedOnly: Boolean;


## Описание


Свойство IncludeSelectedOnly
 определяет, включать ли в иерархию только отмеченные элементы измерения.
 True - в построение иерархии будут
 использованы только элементы, включенные в отметку измерения атрибута,
 False - в построение иерархии
 будут включены все элементы измерения.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки Metabase, Rds, Cubes, Dimensions.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubrObj: IMetabaseObject;

	    CatInst: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    HierarchyInst: IMetaHierarchyInstance;

	    Mems: IMetaMembersSet;

	    Mem: IMetaMember;

	    sAttr: String;

	    HLevels: IMetaHierarchyLevels;

	    HLev: IMetaHierarchyLevel;

	    AttsSet: IMetaAttributesSet;

	    Attr: IMetaAttribute;

	    HierarchyAttr: IMetaHierarchyAttributes;

	    HierarchySetup: IMetaAttributeHierarchySetup;

	    DimInst: IDimInstance;

	    Selection: IDimSelection;

	    i: Integer;

	    z: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    RubrObj := Mb.ItemById("OBJ_FC").Bind;

	    CatInst := RubrObj.Open(Null) As IRubricatorInstance;

	    DictInst := CatInst.GetDictionary(RubricatorDictionary.Facts);

	    HierarchyInst := DictInst.DefaultHierarchy;

	    Debug.WriteLine("До изменения отметки");

	    Mems := HierarchyInst.GetRootMembers;

	    If Not Mems.Eof Then

	        Mem := Mems.Current;

	        Repeat

	            Debug.WriteLine(" " + Mem.Name);

	            Mems.Next;

	        Until Mems.Eof;

	    End If;

	    HLevels := HierarchyInst.Levels;

	    HLev := HLevels.Item(0);

	    AttsSet := HLev.Attributes;

	    For i := 0 To AttsSet.Count - 1 Do

	        sAttr := AttsSet.Item(i).Id;

	        HierarchyAttr := HierarchyInst.Attributes;

	        Attr := HierarchyAttr.FindById(sAttr);

	        HierarchySetup := (Attr As IMetaAttributeHierarchySetup);

	        Selection := HierarchySetup.Selection;

	        Selection.SelectAll;

	        DimInst := HierarchySetup.Dimension;

	        For z := 0 To DimInst.Elements.Count - 1 Do

	            If (z Mod 2) = 0 Then

	                Selection.DeselectElement(z, False);

	            End If;

	        End For;

	        HierarchySetup.IncludeSelectedOnly := True;

	    End For;

	    HierarchyInst.Build;

	    Debug.WriteLine("");

	    Debug.WriteLine("После изменения отметки");

	    Mems := HierarchyInst.GetRootMembers;

	    If Not Mems.Eof Then

	        Mem := Mems.Current;

	        Repeat

	            Debug.WriteLine(" " + Mem.Name);

	            Mems.Next;

	        Until Mems.Eof;

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены наименования
 корневых элементов иерархии атрибутов до смены отметки и после.


См. также:


[IMetaAttributeHierarchySetup](IMetaAttributeHierarchySetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

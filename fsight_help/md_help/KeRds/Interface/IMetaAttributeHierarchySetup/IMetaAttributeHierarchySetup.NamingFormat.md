# IMetaAttributeHierarchySetup.NamingFormat

IMetaAttributeHierarchySetup.NamingFormat
-


# IMetaAttributeHierarchySetup.NamingFormat


## Синтаксис


NamingFormat: String;


## Описание


Свойство NamingFormat определяет
 формат наименования атрибута.


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

	    i: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    RubrObj := Mb.ItemById("OBJ_FC").Bind;

	    CatInst := RubrObj.Open(Null) As IRubricatorInstance;

	    DictInst := CatInst.GetDictionary(RubricatorDictionary.Facts);

	    HierarchyInst := DictInst.DefaultHierarchy;

	    Debug.WriteLine("До изменения формата наименования:");

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

	        HierarchySetup.NamingFormat := "KEY";

	    End For;

	    Debug.WriteLine("");

	    Debug.WriteLine("После изменения формата наименования:");

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
 корневых элементов иерархии атрибутов до смены формата наименования и
 после.


См. также:


[IMetaAttributeHierarchySetup](IMetaAttributeHierarchySetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

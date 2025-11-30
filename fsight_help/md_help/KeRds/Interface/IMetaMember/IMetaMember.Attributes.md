# IMetaMember.Attributes

IMetaMember.Attributes
-


# IMetaMember.Attributes


## Синтаксис


Attributes: [IMetaAttributesSet](../IMetaAttributesSet/IMetaAttributesSet.htm);


## Описание


Свойство Attributes возвращает
 набор атрибутов элемента иерархии.


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

	    Members: IMetaMembers;

	    Mem: IMetaMember;

	    i: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Edit;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    Members := HInstance.GetRootMembers;

	    Members.Reset;

	    While Not Members.Eof Do

	        Mem := Members.Current;

	        Debug.WriteLine("Элемент: " + Mem.Name);

	        For i := 0 To Mem.Attributes.Count - 1 Do

	            Debug.WriteLine("Атрибут: " + Mem.Attributes.Item(i).Name);

	        End For;

	        Members.Next;

	        Debug.WriteLine("----");

	    End While;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены корневые элементы
 иерархии и их атрибуты.


См. также:


[IMetaMember](IMetaMember.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

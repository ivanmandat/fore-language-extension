# IMetaMember.Element

IMetaMember.Element
-


# IMetaMember.Element


## Синтаксис


Element(Index: Integer) Integer;


## Параметры


Index - индекс элемента.


## Описание


Свойство Element возвращает
 номер элемента иерархии.


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

	        Debug.WriteLine("Номер " + Mem.Element(0).ToString);

	        Members.Next;

	        Debug.WriteLine("----");

	    End While;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены корневые элементы
 иерархии и их номер.


См. также:


[IMetaMember](IMetaMember.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

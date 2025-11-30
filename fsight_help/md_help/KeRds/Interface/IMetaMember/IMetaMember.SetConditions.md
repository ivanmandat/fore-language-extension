# IMetaMember.SetConditions

IMetaMember.SetConditions
-


# IMetaMember.SetConditions


## Синтаксис


SetConditions(Conditions: [IOrmConditions](KeOrm.chm::/Interface/IOrmConditions/IOrmConditions.htm);
 Recursive: Boolean; PrevLevelIndex: Integer);


## Параметры


Conditions. Условие;


Recursive. Параметр, определяющий
 отображать ли в иерархии дочерние элементы указанного уровня;


PrevLevelIndex. Уровень иерархии.


## Описание


Метод SetConditions задает условия
 присутствия элемента в иерархии.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «OBJ_FC». В данной базе должен присутствовать
 атрибут «INDICATOR», являющийся корневым атрибутом иерархии показателей.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubrObj: IMetabaseObject;

	    CatInst: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    HierarchyInst: IMetaHierarchyInstance;

	    Mems: IMetaMembersSet;

	    Mem: IMetaMember;

	    Conditions: IOrmConditions;

	    Cond: IOrmCondition;

	Begin

	    Mb := MetabaseClass.Active;

	    RubrObj := Mb.ItemById("OBJ_FC").Bind;

	    CatInst := RubrObj.Open(Null) As IRubricatorInstance;

	    DictInst := CatInst.GetDictionary(RubricatorDictionary.Facts);

	    HierarchyInst := DictInst.DefaultHierarchy;

	    Debug.WriteLine("До изменения условий");

	    Mems := HierarchyInst.GetRootMembers;

	    If Not Mems.Eof Then

	        Mem := Mems.Current;

	        Repeat

	            Debug.WriteLine(" " + Mem.Name);

	            Conditions := HierarchyInst.CustomWhere;

	            Conditions.Clear;

	            Cond := Conditions.Add;

	            Cond.AttributeName := "INDICATOR";

	            Cond.Value := 1009;

	            Mem.SetConditions(Conditions, False, 0);

	            Mems.Next;

	        Until Mems.Eof;

	    End If;

	    Debug.WriteLine("");

	    Debug.WriteLine("После изменения условий");

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
 корневых элементов иерархии атрибутов до создания условия и после.


См. также:


[IMetaMember](IMetaMember.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetaMember.PathName

IMetaMember.PathName
-


# IMetaMember.PathName


## Синтаксис


PathName(Depth: Integer): String;


## Параметры


Depth - параметр, определяющий
 сколько вышестоящих уровней включать в путь элемента.


## Описание


Свойство PathName возвращает
 путь элемента в виде наименования.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «OBJ_FC». В иерархии базы данных временных
 рядов должно присутствовать более одного уровня.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubrObj: IMetabaseObject;

	    CatInst: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    HierarchyInst: IMetaHierarchyInstance;

	    Mems: IMetaMembersSet;

	    Mem: IMetaMember;

	    Mems1: IMetaMembersSet;

	    Mem1: IMetaMember;

	Begin

	    Mb := MetabaseClass.Active;

	    RubrObj := Mb.ItemById("OBJ_FC").Bind;

	    CatInst := RubrObj.Open(Null) As IRubricatorInstance;

	    DictInst := CatInst.GetDictionary(RubricatorDictionary.Facts);

	    HierarchyInst := DictInst.DefaultHierarchy;

	    Mems := HierarchyInst.GetRootMembers;

	    Mem := Mems.Current;

	    Mems1 := Mem.Children.GetMembers;

	    If Mems1 <> Null Then

	        Mem1 := Mems1.Current;

	        Debug.WriteLine("Путь элемента: " + Mem1.PathName(1));

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведен полный путь первого
 элемента второго уровня иерархии.


См. также:


[IMetaMember](IMetaMember.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

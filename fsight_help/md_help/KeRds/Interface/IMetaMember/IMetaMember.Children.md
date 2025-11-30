# IMetaMember.Children

IMetaMember.Children
-


# IMetaMember.Children


## Синтаксис


Children: [IMetaMemberChildren](../IMetaMemberChildren/IMetaMemberChildren.htm);


## Описание


Свойство Children возвращает
 дочерние атрибуты элемента иерархии.


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

	    Mem: IMetaMember;

	    MemCh: IMetaMemberChildren;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Edit;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    Mem := HInstance.Root;

	    MemCh := Mem.Children;

	End Sub UserProc;


После выполнения примера в переменной «MemCh» будет сохранен объект,
 содержащий дочерние элементы вершины иерархии.


См. также:


[IMetaMember](IMetaMember.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

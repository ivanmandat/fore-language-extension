# IMetaMemberChildren.IsEmpty

IMetaMemberChildren.IsEmpty
-


# IMetaMemberChildren.IsEmpty


## Синтаксис


IsEmpty: Boolean;


## Описание


Свойство IsEmpty возвращает
 признак того, присутствуют ли элементы в данном объекте. True
 - элементы отсутствуют, False
 - в данном объекте присутствуют элементы.


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


Members: IMetaMembers;


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


Members := MemCh.GetMembers;


Members.Reset;


While
 Not Members.Eof Do


Debug.WriteLine(Members.Current.Name);


Members.Next;


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

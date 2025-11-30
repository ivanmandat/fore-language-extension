# IMetaMember.Clone

IMetaMember.Clone
-


# IMetaMember.Clone


## Синтаксис


Clone(Parent: [IMetaHierarchyPosition](../IMetaHierarchyPosition/IMetaHierarchyPosition.htm)):
 [IMetaMember](IMetaMember.htm);


## Параметры


Parent - позиция элемента иерархии.


## Описание


Метод Clone создает копию элемента
 иерархии, расположенного в указанной позиции.


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

	    RootPosition: IMetaHierarchyPosition;

	    Members: IMetaMembers;

	    Mem, MemClone: IMetaMember;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Edit;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    Members := HInstance.GetRootMembers;

	    Mem := Members.Current;

	    RootPosition := HInstance.RootPosition;

	    MemClone := Mem.Clone(RootPosition);

	End Sub UserProc;


После выполнения примера в переменной «MemClone» будут содержаться копия
 корневого элемента справочника показателей.


См. также:


[IMetaMember](IMetaMember.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

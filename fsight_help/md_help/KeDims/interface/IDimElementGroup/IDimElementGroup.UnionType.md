# IDimElementGroup.UnionType

IDimElementGroup.UnionType
-


# IDimElementGroup.UnionType


## Синтаксис


UnionType: [UnionGroupType](../../Enums/UnionGroupType.htm);


## Описание


Свойство UnionType определяет тип взаимодействия между собой нескольких примитивов группы элементов.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Mobj, Mobj1: IMetabaseObject;

	    ElemGroup : IDimElementGroup;

	Begin

	    Mb:= MetabaseClass.Active;

	    Mobj:=Mb.ItemById("D_TO").Edit;

	    If MB.ItemById("D_TO").Children.Count<>0 Then

	        Mobj1:=Mobj.Children.Item(0).Edit;

	        ElemGroup:=Mobj1 As IDimElementGroup;

	        ElemGroup.UnionType:=UnionGroupType.Intersection;

	        Mobj1.Save;

	    End If;

	    Mobj.Save;

	End Sub UserProc;


После выполнения примера тип взаимодействия между примитивами «0» группы элементов будет пересечение.


См. также:


[IDimElementGroup](IDimElementGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IDimElementGroup.RemovePrimitive

IDimElementGroup.RemovePrimitive
-


# IDimElementGroup.RemovePrimitive


## Синтаксис


RemovePrimitive(Index: Integer): Boolean;


## Параметры


Index. Индекс удаляемого примитива.


## Описание


Метод RemovePrimitive осуществляет удаление примитивов из группы элементов справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника с идентификатором «D_TO». Для справочника создана группа элементов. В данной группе имеется несколько примитивов для выборки элементов.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObjDesc: IMetabaseObjectDescriptor;

	    MObj: IMetabaseObject;

	    ElemGroup: IDimElementGroup;

	Begin

	    MB:=MetabaseClass.Active;

	    If MB.ItemById("D_TO").Children.Count<>0 Then

	        MObjDesc:=MB.ItemById("D_TO");

	        MObj:=MObjDesc.Children.Item(0).Edit;

	        ElemGroup:=MObj As IDimElementGroup;

	        ElemGroup.RemovePrimitive(ElemGroup.Count-1);

	        MObj.Save;

	    End If;

	End Sub UserProc;


После выполнения примера будет удален последний примитив первой группы элементов справочника.


См. также:


[IDimElementGroup](IDimElementGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

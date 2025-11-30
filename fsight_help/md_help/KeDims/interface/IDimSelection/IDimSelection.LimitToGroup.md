# IDimSelection.LimitToGroup

IDimSelection.LimitToGroup
-


# IDimSelection.LimitToGroup


## Синтаксис


LimitToGroup(Group: [IDimElementGroup](../IDimElementGroup/IDimElementGroup.htm));


## Параметры


Group - группа элементов справочника,
 которую необходимо оставить в отметке.


## Описание


Метод LimitToGroup изменяет
 отметку элементов, оставляя отмеченными только те элементы, которые содержатся
 в группе элементов Group.


## Пример


Для выполнения примера, предполагается наличие формы, расположенной
 на ней кнопкой с наименованием "Button1", компонентов DimensionTree и компонента UiDimension с наименованием "UiDimension1",
 являющегося источником данных для DimensionTree.
 Справочник, загруженный в "UiDimension1" имеет группу элементов.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Sel: IDimSelection;

	    MObj: IMetabaseObject;

	    Group: IDimElementGroup;

	Begin

	    Sel := UiDimension1.Selection;

	    MObj := (UiDimension1.Dimension As IMetabaseobject);

	    Group := MObj.Children.Item(0).Bind As IDimElementGroup;

	    Sel.LimitToGroup(Group);

	    //Обновление отметки в DimensionTree

	    DimensionTree1.Selection.Parse(Sel.ToVariant);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в списке отмеченных элементов
 компонента DimensionTree1 будут оставлены только элементы, содержащиеся
 в группе элементов справочника.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

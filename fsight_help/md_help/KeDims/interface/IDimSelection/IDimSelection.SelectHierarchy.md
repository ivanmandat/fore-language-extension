# IDimSelection.SelectHierarchy

IDimSelection.SelectHierarchy
-


# IDimSelection.SelectHierarchy


## Синтаксис


SelectHierarchy: [IDimHierarchyInstance](../IDimHierarchyInstance/IDimHierarchyInstance.htm);


## Описание


Свойство SelectHierarchy определяет
 и добавляет альтернативную иерархию в отметку справочника.


## Комментарии


Для работы в отметке с отмеченными элементами, входящими в указанную
 альтернативную иерархию, используйте [IDimSelection.LimitToHierarchy](IDimSelection.LimitToHierarchy.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие:


	- формы, содержащей компоненты:


		- DimensionTree с
		 идентификатором «DimensionTree1»;


		- UiDimension с идентификатором
		 «UiDimension1», который является источником данных для «DimensionTree1»;


	- справочника, содержащего в себе альтернативную иерархию. Справочник
	 является источником данных для «UiDimension1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    dim: IDimInstance;

    hier: IDimHierarchyInstance;

Begin

    dim := UiDimension1.DimInstance;

    hier := dim.Hierarchies.Item(0);

    UiDimension1.Selection.SelectAll;

    UiDimension1.Selection.LimitToHierarchy(hier);

    UiDimension1.Selection.SelectHierarchy := hier;

End Sub Button1OnClick;


При нажатии на кнопку останутся отмеченными только те элементы, которые
 входят в указанную альтернативную иерархию.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

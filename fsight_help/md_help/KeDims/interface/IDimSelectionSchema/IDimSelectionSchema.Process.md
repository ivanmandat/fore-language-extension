# IDimSelectionSchema.Process

IDimSelectionSchema.Process
-


# IDimSelectionSchema.Process


## Синтаксис


Process(


Selection: [IDimSelection](../IDimSelection/IDimSelection.htm);


[Group: [IDimElementGroup](../IDimElementGroup/IDimElementGroup.htm)
 = Null]): [IDimSelection](../IDimSelection/IDimSelection.htm);


## Параметры


Selection - отметка элементов
 справочника, в копии которой необходимо применить схему отметки.


Group - необязательный параметр,
 определяющий группу элементов из Selection,
 в рамках которых будет применяться схема отметки. По умолчанию схема отметки
 применяется для всех элементов, входящих в Selection.


## Описание


Метод Process применяет схему
 отметки для элементов отметки, передаваемой посредством параметра Selection и возвращает копию отметки
 с выделенными элементами.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента DimensionTree
 с наименованием "DimensionTree1" и компонента UiDimension
 с наименованием "UiDimension1", являющегося источником данных
 для "DimensionTree1". Справочник, загруженный в "UiDimension1",
 содержит одну схему отметки и одну группу элементов.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    DimSS: IDimSelection;

	    MDesc: IMetabaseObject;

	    Child: IMetabaseObjectDescriptors;

	    SelectionSchema: IDimSelectionSchema;

	    ElemGroup: IDimElementGroup;

	Begin

	    MDesc := (UiDimension1.Dimension As IMetabaseObject);

	    Child := MDesc.Children;

	    If Child.Count <> 0 Then

	        SelectionSchema := Child.Item(0).Bind As IDimSelectionSchema;

	        ElemGroup := Child.Item(1).Bind As IDimElementGroup;

	        DimSS := SelectionSchema.Process(DimensionTree1.Selection, ElemGroup);

	        DimSS.SelectElement(10, False);

	        DimSS.SelectElement(20, False);

	        DimSS.SelectElement(30, False);

	        DimensionTree1.Selection := DimSS;

	    End If;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет получена отметка
 элементов справочника, отображаемого в компоненте "DimensionTree1".
 Для данных элементов, в рамках первой группы элементов справочника, будет
 выставлена отметка соответствующая первой схеме отметки справочника. В
 полученой отметке будет выделено еще три элемента, после чего данная отметка
 будет применена для компонента "DimensionTree1".


См. также:


[IDimSelectionSchema](IDimSelectionSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

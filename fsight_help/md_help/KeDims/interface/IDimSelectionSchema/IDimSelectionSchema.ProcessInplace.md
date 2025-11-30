# IDimSelectionSchema.ProcessInplace

IDimSelectionSchema.ProcessInplace
-


# IDimSelectionSchema.ProcessInplace


## Синтаксис


ProcessInplace(


Selection: [IDimSelection](../IDimSelection/IDimSelection.htm);


[Group: [IDimElementGroup](../IDimElementGroup/IDimElementGroup.htm)
 = Null]);


## Параметры


Selection - отметка элементов
 справочника, для которых необходимо применить схему отметки.


Group - необязательный параметр,
 определяющий группу элементов из Selection,
 в рамках которых будет применяться схема отметки. По умолчанию схема отметки
 применяется для всех элементов, входящих в Selection.


## Описание


Метод ProcessInplace применяет
 схему отметки для элементов отметки, передаваемой посредством параметра
 Selection.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента DimensionTree
 с наименованием "DimensionTree1" и компонента UiDimension
 с наименованием "UiDimension1", являющегося источником данных
 для "DimensionTree1". Справочник, загруженный в "UiDimension1",
 содержит одну схему отметки и одну группу элементов.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

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

	        SelectionSchema.ProcessInplace(DimensionTree1.Selection, ElemGroup);

	    End If;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для элементов справочника,
 отображаемого в компоненте "DimensionTree1", в рамках первой
 группы элементов справочника, будет выставлена отметка соответствующая
 первой схеме отметки справочника.


См. также:


[IDimSelectionSchema](IDimSelectionSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

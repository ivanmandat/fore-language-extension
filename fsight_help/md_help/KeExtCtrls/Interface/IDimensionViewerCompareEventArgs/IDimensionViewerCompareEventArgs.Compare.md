# IDimensionViewerCompareEventArgs.Compare

IDimensionViewerCompareEventArgs.Compare
-


# IDimensionViewerCompareEventArgs.Compare


## Синтаксис


Compare: Integer;


## Описание


Свойство Compare определяет
 признак сортировки.


## Комментарии


Для свойства должно быть установлено одно из следующих значений:


	- 0 - если элементы равны;


	- меньше 0 - если [LeftItem](IDimensionViewerCompareEventArgs.LeftItem.htm)
	 < [RightItem](IDimensionViewerCompareEventArgs.RightItem.htm);


	- больше 0 - если [LeftItem](IDimensionViewerCompareEventArgs.LeftItem.htm)
	 > [RightItem](IDimensionViewerCompareEventArgs.RightItem.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента DimensionTree с наименованием
 «DimensionTree1». Элементы во втором столбце содержат целочисленные значения.


	Class TestForm: Form

	    DimensionTree1: DimensionTree;

	    UiDimension1: UiDimension;

	    Button1: Button;

	    AttrInst: IDimAttributeInstance;


	    Sub DimensionTree1OnCompareItems(Sender: Object; Args: IDimensionViewerCompareEventArgs);

	    Var

	        i, j: Integer;

	    Begin

	        i := AttrInst.Value(Args.LeftItem);

	        j := AttrInst.Value(Args.RightItem);

	        If i > j Then

	            Args.Compare := -1;

	        Else

	            Args.Compare := 1;

	        End If;

	    End Sub DimensionTree1OnCompareItems;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Inst: IDimInstance;

	    Begin

	        Inst := UiDimension1.DimInstance;

	        AttrInst := Inst.Attributes.Item(1);

	        DimensionTree1.SortType := ControlSortType.Custom;

	        DimensionTree1.SortColumn := 1;

	        DimensionTree1.Sorted := True;

	        DimensionTree1.SortDefault;

	    End Sub Button1OnClick;

	End Class TestForm;


После выполнения примера при нажатии на кнопку будет осуществлена пользовательская
 сортировка по значения второй колонки компонента. Значения будут упорядочены
 по убыванию.


См. также:


[IDimensionViewerCompareEventArgs](IDimensionViewerCompareEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

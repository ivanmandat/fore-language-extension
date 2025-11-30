# IDimensionViewer.SortColumn

IDimensionViewer.SortColumn
-


# IDimensionViewer.SortColumn


## Синтаксис


SortColumn: Integer;


## Описание


Свойство SortColumn определяет
 индекс столбца, по которому будет осуществляться сортировка. Используется
 вместе со свойствами [Sorted](IDimensionViewer.Sorted.htm)
 и [SortType](IDimensionViewer.SortType.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопкой с наименованием «Button1», компонента DimensionTree с наименованием
 «DimensionTree1» и компонента UiDimension, являющегося источником данных
 для «DimensionTree1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    DimensionTree1.SortType := ControlSortType.Text;

	    DimensionTree1.SortColumn := 0;

	    DimensionTree1.Sorted := True;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будут осуществлена сортировка
 элементов компонента «DimensionTree1» по первому столбцу.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

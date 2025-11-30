# ITabRange.Expand

ITabRange.Expand
-


# ITabRange.Expand


## Синтаксис


Expand;


## Описание


Метод Expand осуществляет изменение
 размеров текущего диапазона до размеров объединенного диапазона, в который
 он входит.


Примечание.
 Метод актуален для диапазона, входящего в какой-либо объединенный диапазон
 ячеек.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 с наименованием «TabSheetBox1» и какого-либо источника данных для «TabSheetBox1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	Begin

	    TSheet := TabSheetBox1.Source.GetTabSheet;

	    TRange := TSheet.View.Selection.Range;

	    TRange.Merge;

	    TRange := TSheet.Cell(TRange.Top, TRange.Left);

	    TRange.Expand;

	    Debug.WriteLine(TRange.Left.ToString + " " + TRange.Top.ToString + " " +

	        TRange.Right.ToString + " " + TRange.Bottom.ToString);

	End Sub Button1OnClick;


При нажатии на кнопку диапазон ячеек, выделенный в компоненте «TabSheetBox1»
 будет объединен. В переменной «TRange» будет содержаться верхняя левая
 ячейка данного объединения. Границы данной ячейки будут изменены до границ
 объединенного диапазона, в который она входит. Значения границ ячейки
 будут выведены в консоль среды разработки.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

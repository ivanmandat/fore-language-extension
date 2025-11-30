# ITabRange.DependenceCells

ITabRange.DependenceCells
-


# ITabRange.DependenceCells


## Синтаксис


DependenceCells([DirectOnly: Boolean = True]): Array;


## Параметры


DirectOnly. Параметр, определяющий
 режим поиска зависимых ячеек.


Если в качестве значения параметра передается True,
 то будет произведен поиск ячеек, от которых непосредственно зависит заданная
 ячейка (В формуле заданной ячейки имеется прямая ссылка на ячейку).


Если в качестве значения параметра передается False,
 то будет произведен поиск всех ячеек, от которых непосредственно или косвенно
 зависит заданная ячейка.


## Описание


Метод DependenceCells производит
 поиск ячеек, от которых зависит данная ячейка.


## Комментарии


Данный метод можно выполнить только для диапазона, состоящего из одной
 ячейки.


Результатом работы метода является массив. Каждая ячейка массива содержит
 составной диапазон ячеек, в формулах которых имеется ссылка на текущую
 ячейку.


Примечание.
 Составной диапазон строится из ячеек одной таблицы. Количество элементов
 массива соответствует количеству таблиц, на которых есть ячейки, влияющие
 на вычисление текущей.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiReport
 с наименованием «UiReport1» и компонента ReportBox,
 отображающего данные регламентного отчета, подключенного к «UiReport1».


Добавьте ссылки на системные сборки Drawing, Report, Tab, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Sheet: IPrxTable;

	    Cell, DepRange, DepCell: ITabRange;

	    Style: ITabCellStyle;

	    Arr: Array Of Variant;

	    i, j: Integer;

	Begin

	    Sheet := (UiReport1.Instance As IPrxReport).ActiveSheet As IPrxTable;

	    Cell := Sheet.TabSheet.View.Selection.Range;

	    If Cell.Count = 1 Then

	        Arr := Cell.DependenceCells(False);

	        If Not IsNull(Arr) And (Arr.Length > 0) Then

	            For i := 0 To Arr.Length - 1 Do

	                DepRange := Arr[i] As ITabRange;

	                For j := 0 To DepRange.PartCount - 1 Do

	                    DepCell := DepRange.Part(j);

	                    Style := DepCell.Style;

	                    Style.BorderColor(TabBorder.Outline) := GxColor.FromName("Red");

	                    Style.BorderStyle(TabBorder.Outline) := TabBorderStyle.Continuous;

	                End For;

	            End For;

	        Else

	            Debug.WriteLine("Зависимые ячейки не обнаружены.");

	        End If;

	    Else

	        Debug.WriteLine("Должна быть выделена только одна ячейка.");

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку будет осуществлен поиск всех ячеек, от которых
 зависит данная ячейка, выделенная в текущий момент. Границы найденных
 ячеек будут выделены красной линией.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

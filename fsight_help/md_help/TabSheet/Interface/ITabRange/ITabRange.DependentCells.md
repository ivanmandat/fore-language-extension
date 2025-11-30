# ITabRange.DependentCells

ITabRange.DependentCells
-


# ITabRange.DependentCells


## Синтаксис


DependentCells([DirectOnly: Boolean = True]): Array;


## Параметры


DirectOnly. Параметр, определяющий
 режим поиска зависимых ячеек.


Если в качестве значения параметра передается True,
 то будет произведен поиск ячеек, непосредственно зависящих от данной ячейки
 (В формулах ячеек имеется прямая ссылка на данную ячейку).


Если в качестве значения параметра передается False,
 то будет произведен поиск всех ячеек, которые непосредственно или косвенно
 зависят от данной ячейки.


## Описание


Метод DependentCells производит
 поиск ячеек, которые зависят от данной ячейки.


## Комментарии


Данный метод можно выполнить только для диапазона, состоящего из одной
 ячейки.


Результатом работы метода является массив. Каждая ячейка массива содержит
 составной диапазон ячеек, в формулах которых имеется ссылка на текущую
 ячейку.


Примечание.
 Составной диапазон строится из ячеек одной таблицы. Количество элементов
 массива соответствует количеству таблиц, в ячейках которых имеются ссылки
 на данную ячейку.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiReport
 с наименованием «UiReport1» и компонента ReportBox,
 отображающего данные регламентного отчета, подключенного к «UiReport1».


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

	        Arr := Cell.DependentCells(False);

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

	            WinApplication.InformationBox("Зависимые ячейки не обнаружены.");

	        End If;

	    Else

	    WinApplication.ExclamationBox("Должна быть выделена только одна ячейка.");

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку будет осуществлен поиск всех ячеек, зависящих
 от ячейки, выделенной в текущий момент. Границы найденных ячеек будут
 выделены красной линией.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

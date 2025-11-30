# IEaxRangeCellStyles.Count

IEaxRangeCellStyles.Count
-


# IEaxRangeCellStyles.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 стилей в коллекции.


## Комментарии


Емкость коллекции - это количество элементов, которое может содержать
 коллекция. Свойство Count - это
 количество элементов, которое в действительности содержится в коллекции.


Емкость всегда больше или равна значению свойства Count.
 Если при добавлении элементов в коллекцию значение свойства Count
 превышает емкость, то она автоматически увеличивается.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox
 и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для LanerBox.
 В «UiErAnalyzer1» должна быть загружена рабочая книга базы
 данных временных рядов. Добавьте ссылку на системную сборку «Drawing».


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    CellStyle: ITabCellStyle;

	    i, count: Integer;

	    a: String;

	    RangeStyle: IEaxRangeCellStyle;

	    TabCellStyle: ITabCellStyle;

	Begin

	    Grid := UiErAnalyzer1.ErAnalyzer.Grid;

	    Style := Grid.Style;

	    CStyles := Style.RangeCellStyles;

	    count := CStyles.Count;

	    Debug.WriteLine("Количество стилей: " + count.ToString);

	    For i := 0 To count - 1 Do

	        RangeStyle := CStyles.Item(i);

	        TabCellStyle := RangeStyle.Style;

	        If RangeStyle.TabRange <> Null Then

	            a := " (используется)";

	        Else

	            a := " (не используется)";

	        End If;

	        Debug.WriteLine("Стиль №" + i.ToString + a);

	        If TabCellStyle.Font <> Null Then

	            Debug.WriteLine("   шрифт - " + TabCellStyle.Font.Name);

	            If TabCellStyle.Font.Color <> Null Then

	                Debug.WriteLine("   цвет шрифта - " + TabCellStyle.Font.Color.Name);

	            End If;

	        End If;

	    End For;

	    If count> 0 Then

	        CStyles.Remove(count - 1);

	    End If;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведена информация о
 стилях, заданных для рабочей области. Затем последний стиль в коллекции
 будет удален.


См. также:


[IEaxRangeCellStyles](IEaxRangeCellStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

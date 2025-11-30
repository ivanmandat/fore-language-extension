# IEaxRangeFormatConditions.Item

IEaxRangeFormatConditions.Item
-


# IEaxRangeFormatConditions.Item


## Синтаксис


Item(Index: Integer): [IEaxRangeFormatCondition](../IEaxRangeFormatCondition/IEaxRangeFormatCondition.htm);


## Параметры


Index. Индекс стиля в коллекции.


## Описание


Свойство Item возвращает стиль
 из коллекции по его индексу.


## Комментарии


Item обеспечивает возможность
 доступа к определенному стилю из коллекции. Значение параметра Index
 должно быть неотрицательным числом, но меньше значения свойства [IEaxRangeFormatConditions.Count](IEaxRangeFormatConditions.Count.htm).
 Индекс первого стиля в коллекции - «0», последнего - «[IEaxRangeFormatConditions.Count](IEaxRangeFormatConditions.Count.htm)
 - 1». Нумерация индексов - сплошная.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox
 и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для LanerBox.
 В «UiErAnalyzer1» должна быть загружена рабочая книга базы
 данных временных рядов.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    RangeFCond: IEaxRangeFormatConditions;

	    Count, i: Integer;

	    RangeFormat: IEaxRangeFormatCondition;

	    a: String;

	    CondType: TabConditionType;

	Begin

	    Grid := UiErAnalyzer1.ErAnalyzer.Grid;

	    Style := Grid.Style;

	    RangeFCond := Style.RangeFormatConditions;

	    Count := RangeFCond.Count;

	    If Count > 0 Then

	        For i := 0 To Count - 1 Do

	            RangeFormat := RangeFCond.Item(i);

	            If RangeFormat.TabRange <> Null Then

	                a := " (используется)";

	            Else

	                a := " (не используется)";

	            End If;

	            Debug.WriteLine("Стиль №" + i.ToString + a);

	            CondType := RangeFormat.Condition.Type;

	            Select Case CondType

	                Case TabConditionType.Average: a := "форматировать ячейки со значениями выше/ниже среднего";

	                Case TabConditionType.CellContent: a := "форматирование ячейки с определенными значениями";

	                Case TabConditionType.Duplicate: a := "форматировать ячейки с уникальными/дублирующимися значениями";

	                Case TabConditionType.Formula: a := "форматировать ячейки, удовлетворяющие формуле";

	                Case TabConditionType.MinMax: a := "форматировать ячейки с наибольшими/наименьшими значениями";

	                Case TabConditionType.Values: a := "форматирование ячеек на основе их значений";

	            End Select;

	            Debug.WriteLine("    тип: " + a);

	        End For;

	        RangeFCond.Remove(Count - 1);

	    End If;

	    Grid.Refresh;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведена информация о
 стилях условного форматирования, применяемых в таблице. Затем последний
 стиль в коллекции будет удален.


См. также:


[IEaxRangeFormatConditions](IEaxRangeFormatConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

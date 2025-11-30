# ILanerResultsBoxCoefficients.ColumnType

ILanerResultsBoxCoefficients.ColumnType
-


# ILanerResultsBoxCoefficients.ColumnType


## Синтаксис


ColumnType(Index: Integer): [LanerBoxCoefficentColumns](../../Enums/LanerBoxCoefficentColumns.htm);


## Параметры


Index.
 Индекс колонки.


## Описание


Свойство ColumnType возвращает
 тип колонки коэффициентов по ее индексу.


## Комментарии


Значение параметра Index должно
 входить в диапазон [0, [ILanerResultsBoxCoefficients.ColumnCount](ILanerResultsBoxCoefficients.ColumnCount.htm)-1].


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox, компонента
 LanerResultsBox с наименованием «LanerResultsBox1» и компонента UiErAnalyzer,
 являющегося источником данных для LanerBox и LanerResultsBox. В «UiErAnalyzer1»
 должна быть загружена рабочая книга базы данных временных рядов.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Results: ILanerResultsBoxResults;

	    Coefficients: ILanerResultsBoxCoefficients;

	    ColumnIndex, i: Integer;

	Begin

	    Results := LanerResultsBox1.Results;

	    Coefficients := Results.Coefficients;

	    If Coefficients.TermCount > 0 Then

	        Debug.WriteLine("Уравнение:   " + Coefficients.Equation);

	        For i := 0 To Coefficients.ColumnCount - 1 Do

	            If Coefficients.ColumnType(i) = LanerBoxCoefficentColumns.Coefficient Then

	                ColumnIndex := i;

	            End If;

	        End For;

	        For i := 0 To Coefficients.TermCount - 1 Do

	            Debug.WriteLine(Coefficients.Value(i, ColumnIndex));

	        End For;

	    Else

	        Debug.WriteLine("Коэффициенты не рассчитывались");

	    End If;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведено идентифицированное
 уравнение и наименования коэффициентов, расположенных на вкладке «Коэффициенты» панели «Результаты вычислений».


См. также:


[ILanerResultsBoxCoefficients](ILanerResultsBoxCoefficients.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

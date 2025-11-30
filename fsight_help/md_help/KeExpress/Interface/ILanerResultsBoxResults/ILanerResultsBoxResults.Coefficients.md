# ILanerResultsBoxResults.Coefficients

ILanerResultsBoxResults.Coefficients
-


# ILanerResultsBoxResults.Coefficients


## Синтаксис


Coefficients: [ILanerResultsBoxCoefficients](../ILanerResultsBoxCoefficients/ILanerResultsBoxCoefficients.htm);


## Описание


Свойство Coefficients возвращает
 параметры для работы со значениями на вкладке «Коэффициенты».


## Комментарии


Значения Coefficients вычисляются
 для рядов, рассчитанных с помощью методов моделирования (сглаживание,
 прогноз, регрессия).


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

	    i, j: Integer;

	    s: string;

	Begin

	    Results := LanerResultsBox1.Results;

	    Coefficients := Results.Coefficients;

	    If Coefficients.TermCount > 0 Then

	        Debug.WriteLine("Уравнение:   " + Coefficients.Equation);

	        For i := 0 To Coefficients.ColumnCount - 1 Do

	            s := s + "    " + Coefficients.ColumnName(i);

	        End For;

	        Debug.WriteLine(s);

	        For i := 0 To Coefficients.TermCount - 1 Do

	            s := "";

	            For j := 0 To Coefficients.ColumnCount - 1 Do

	                s := s + "    " + Coefficients.Value(i, j);

	            End For;

	            Debug.WriteLine(s);

	        End For;

	    Else

	        Debug.WriteLine("Коэффициенты не рассчитывались");

	    End If;

	End Sub Button1OnClick;


После выполнения примера в консоль будут выведены значения, расположенные
 на вкладке «Коэффициенты» панели
 «Результаты вычислений». Например:


Уравнение: Y = 55 382,95/t -883,72


     Коэффициент    Значение
    Стандартная ошибка    t-статистика    Вероятность


     A1    55382.948531310874
    16166.599801141016    3.4257635626881804
    0.0064843977258993921


     (константа) - 883.72143942968978
 5838.2406712916127 - 0.15136776456907886 0.88269567999419207


См. также:


[ILanerResultsBoxResults](ILanerResultsBoxResults.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

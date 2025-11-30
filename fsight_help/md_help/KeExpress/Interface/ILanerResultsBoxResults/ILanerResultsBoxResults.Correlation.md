# ILanerResultsBoxResults.Correlation

ILanerResultsBoxResults.Correlation
-


# ILanerResultsBoxResults.Correlation


## Синтаксис


Correlation: [ILanerResultsBoxCorrelation](../ILanerResultsBoxCorrelation/ILanerResultsBoxCorrelation.htm);


## Описание


Свойство Correlation возвращает
 параметры для работы со значениями на вкладке «Корреляция».


## Комментарии


Значения Correlation вычисляются
 только для рядов, рассчитанных с помощью метода моделирования «Линейная
 регрессия».


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

	    Correlation: ILanerResultsBoxCorrelation;

	    i, j: Integer;

	    s: string;

	Begin

	    Results := LanerResultsBox1.Results;

	    Correlation := Results.Correlation;

	    s := "";

	    For i := 0 To Correlation.TermCount - 1 Do

	        s := s + "    " + Correlation.Comment(i);

	    End For;

	    Debug.WriteLine(s);

	    s := "";

	    For i := 0 To Correlation.TermCount - 1 Do

	        s := s + "    " + Correlation.Name(i);

	    End For;

	    Debug.WriteLine(s);

	    For i := 0 To Correlation.TermCount - 1 Do

	        s := "";

	        For j := 0 To Correlation.TermCount - 1 Do

	            s := s + "    " + Correlation.Value(i, j).ToString;

	        End For;

	        Debug.WriteLine(s);

	    End For;

	End Sub Button1OnClick;


После выполнения примера в консоль будет выведена таблица корреляции,
 содержащая наименование, значение и комментарий к переменным, которые
 участвовали в расчете. Например:


Комментарии:


     Новый ряд 1    Nigeria|BCA|A[t]
    Nigeria|BCI|A[t]


Таблица корреляции:


     Y    X1
    X2


     1    -0.68230830806241394
    0.49928242789261545


     -0.68230830806241394
    1    -0.1197660822009501


     0.49928242789261545
    -0.1197660822009501    1


См. также:


[ILanerResultsBoxResults](ILanerResultsBoxResults.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IPivotEvaluatorDimCalculatesList.Item

IPivotEvaluatorDimCalculatesList.Item
-


# IPivotEvaluatorDimCalculatesList.Item


## Синтаксис


Item(Index: Integer): Integer;


## Параметры


Index - индекс вычисляемого
 показателя в коллекции показателей, созданных относительно элемента измерения
 [Element](IPivotEvaluatorDimCalculatesList.Element.htm).


## Описание


Свойство Item возвращает индекс
 вычисляемого показателя в коллекции показателей всего измерения.


## Комментарии


Индекс вычисляемого показателя, созданного относительно элемента [Element](IPivotEvaluatorDimCalculatesList.Element.htm), передается
 посредством параметра Index.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента UiErAnalyzer
 с наименованием "UiErAnalyzer1", и каких либо компонентов, используемых
 для отображения данных отчета, загруженного в "UiErAnalyzer1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    OLAP: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Pivot: IPivot;

	    Dim: IDimInstance;

	    Calcs: IPivotEvaluatorDimCalculates;

	    Calc: IPivotEvaluatorDimCalculatesItem;

	    List: IPivotEvaluatorDimCalculatesList;

	    i: Integer;

	Begin

	    OLAP := UiErAnalyzer1.ErAnalyzer;

	    Grid := OLAP.Grid;

	    Pivot := OLAP.Pivot;

	    Dim := Pivot.TopHeader.Dim(0);

	    Calcs := Pivot.Evaluator.DimCalculates;

	    Calc := Calcs.FindByDimKey(Dim.Key);

	    List := Calc.FindByDimElement(0);

	    For i := 0 To List.Count - 1 Do

	        Debug.WriteLine(Calc.CalculatedName(List.Item(i)));

	    End For;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет осуществлен поиск
 вычисляемых показателей, созданных относительно первого элемента измерения,
 расположенного в отчете по столбцам. Наименования найденных вычисляемых
 показателей будут выведены в консоль среды разработки.


См. также:


[IPivotEvaluatorDimCalculatesList](IPivotEvaluatorDimCalculatesList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IPivotEvaluatorDimCalculatesItem.CalculatedName

IPivotEvaluatorDimCalculatesItem.CalculatedName
-


# IPivotEvaluatorDimCalculatesItem.CalculatedName


## Синтаксис


CalculatedName(Index: Integer): String;


## Параметры


Index -
 индекс вычисляемого элемента по данному измерению.


## Описание


Свойство CalculatedName определяет
 наименование вычисляемого элемента, индекс которого передается посредством
 параметра Index.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента TabSheetBox
 и компонента UiErAnalyzer с наименованием
 "UiErAnalyzer1", являющегося источником данных для TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    OLAP: IEaxAnalyzer;

	    Pivot: IPivot;

	    Calcs: IPivotEvaluatorDimCalculates;

	    Calc: IPivotEvaluatorDimCalculatesItem;

	    i: Integer;

	Begin

	    OLAP := UiErAnalyzer1.ErAnalyzer;

	    Pivot := OLAP.Pivot;

	    Calcs := Pivot.Evaluator.DimCalculates;

	    Debug.WriteLine(Calcs.Count);

	    For Each Calc In Calcs Do

	        Debug.WriteLine(Calc.Dim.Name);

	        Debug.Indent;

	        For i := 0 To Calc.Count - 1 Do

	            Debug.WriteLine("Name: " + Calc.CalculatedName(i));

	            Debug.WriteLine("Expression: " + Calc.Expression(i).AsString);

	        End For;

	        Debug.Unindent;

	    End For;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в консоль будет выведены
 наименования измерений. По каждому измерению будет выведен список наименований
 и формул, по которым рассчитываются вычисляемые элементы.


См. также:


[IPivotEvaluatorDimCalculatesItem](IPivotEvaluatorDimCalculatesItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

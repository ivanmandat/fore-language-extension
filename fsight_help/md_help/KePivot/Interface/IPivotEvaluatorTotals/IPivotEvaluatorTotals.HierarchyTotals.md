# IPivotEvaluatorTotals.HierarchyTotals

IPivotEvaluatorTotals.HierarchyTotals
-


# IPivotEvaluatorTotals.HierarchyTotals


## Синтаксис


HierarchyTotals: Boolean;


## Описание


Свойство HierarchyTotals определяет,
 будут ли рассчитываться итоги по иерархии.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Итоги рассчитываются по иерархии.


	- False. Итоги рассчитываются
	 без учета иерархии.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных
 для TabSheetBox. Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    OLAP: IEaxAnalyzer;

	    Pivot: IPivot;

	    Totals: IPivotEvaluatorTotals;

	Begin

	    OLAP := UiErAnalyzer1.ErAnalyzer;

	    Pivot := OLAP.Pivot;

	    Totals := Pivot.Evaluator.Totals;

	    Totals.RowTypes := PivotEvaluatorElementType.Sum;

	    Totals.HierarchyTotals := True;

	    Totals.LevelTotals := False;

	End Sub Button1OnClick;


После выполнения примера для таблицы по всем уровням иерархии будут
 рассчитываться итоги (сумма значений).


См. также:


[IPivotEvaluatorTotals](IPivotEvaluatorTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

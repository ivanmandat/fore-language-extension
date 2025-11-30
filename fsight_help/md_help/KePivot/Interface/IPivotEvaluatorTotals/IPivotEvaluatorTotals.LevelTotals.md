# IPivotEvaluatorTotals.LevelTotals

IPivotEvaluatorTotals.LevelTotals
-


# IPivotEvaluatorTotals.LevelTotals


## Синтаксис


LevelTotals: Boolean;


## Описание


Свойство LevelTotals определяет,
 будут ли рассчитываться итоги по уровням измерений.


## Комментарии


Если свойству установлено значение True,
 то при отображении итогов будут отображены итоги по уровням. Если свойству
 установлено значение False, то
 итоги рассчитываются без учета уровней измерений.


По умолчанию свойству установлено значение True.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных
 для TabSheetBox. Пример будет выполняться при нажатии на кнопку.


Добавьте ссылки на системные сборки: Express, Pivot.


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

	    Totals.LevelTotals := True;

	    Totals.OverallTotal := False;

	    Totals.HierarchyTotals := False;

	End Sub Button1OnClick;


После выполнения примера для таблицы будут рассчитываться итоги (сумма
 значений): итоги по уровням включены, общий итог и итоги по иерархии выключены.


См. также:


[IPivotEvaluatorTotals](IPivotEvaluatorTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

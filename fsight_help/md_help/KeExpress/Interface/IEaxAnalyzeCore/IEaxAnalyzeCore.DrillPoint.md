# IEaxAnalyzeCore.DrillPoint

IEaxAnalyzeCore.DrillPoint
-


# IEaxAnalyzeCore.DrillPoint


## Синтаксис


DrillPoint(Point: [IChartSeriePoint](Chart.chm::/Interface/IChartSeriePoint/IChartSeriePoint.htm)):
 [IEaxDrillPointResult](../IEaxDrillPointResult/IEaxDrillPointResult.htm);


## Параметры


Point. Точка ряда данных.


## Описание


Метод DrillPoint возвращает
 информацию о привязке точки ряда данных к данным.


## Комментарии


Для получения параметров точки ряда данных, для которой был выполнен
 метод DrillPoint используйте свойство
 [IEaxDrillPointResult.Point](../IEaxDrillPointResult/IEaxDrillPointResult.Point.htm).


## Пример


Для выполнения на форме расположите компоненты UiErAnalyzer
 с идентификатором «UiErAnalyzer» и кнопку с идентификатором «Button1».
 Добавьте ссылку на системную сборку Dimensions.


Пример является обработчиком события для кнопки «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Expr: IEaxAnalyzer;

	    Point: IChartSeriePoint;

	    DrillPoint: IEaxDrillPointResult;

	    DimSelection: IDimSelectionSet;

	Begin

	    Expr := UiErAnalyzer1.Instance As IEaxAnalyzer;

	    Point := Expr.Chart.Chart.Series.Item(0).SeriePoint(0);

	    DrillPoint := Expr.DrillPoint(Point);

	    //Отметка источников данных

	    If DrillPoint <> Null Then

	        DimSelection := DrillPoint.Selection;

	        Debug.WriteLine("Измерений в отметке: " + DimSelection.Count.ToString);

	    End If;

	End Sub Button1OnClick;


Нажмите кнопку. В окне консоли будет отображено количество отметок справочников
 в кубе, являющимся источником данных для указанной точки ряда данных.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

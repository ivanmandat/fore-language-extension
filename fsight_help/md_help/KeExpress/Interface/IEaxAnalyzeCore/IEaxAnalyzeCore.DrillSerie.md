# IEaxAnalyzeCore.DrillSerie

IEaxAnalyzeCore.DrillSerie
-


# IEaxAnalyzeCore.DrillSerie


## Синтаксис


DrillSerie(Serie: [IChartSerie](Chart.chm::/Interface/IChartSerie/IChartSerie.htm)):
 [IEaxDrillSerieResult](../IEaxDrillSerieResult/IEaxDrillSerieResult.htm);


## Параметры


Serie. Ряд данных.


## Описание


Метод DrillSerie возвращает
 информацию о привязке ряда к данным.


## Комментарии


Для получения параметров ряда, для которого был выполнен метод DrillSerie, используйте свойство
 [IEaxDrillSerieResult.Serie](../IEaxDrillSerieResult/IEaxDrillSerieResult.Serie.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с наименованием «Button1»,
 компонент ChartBox с наименованием
 «ChartBox1» и компонент UiErAnalyzer
 с наименованием «UiErAnalyzer1», являющийся источником данных для компонента
 «ChartBox1».

В качестве источника данных для компонента «UiErAnalyzer1» укажите экспресс-отчёт
 с диаграммой, содержащей хотя бы один ряд с данными. Установите для компонента
 «UiErAnalyzer1» свойство Active = True.


Добавьте ссылки на системные сборки Chart,
 Dimensions.


Процедура является обработчиком события OnClick
 для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Expr: IEaxAnalyzer;

	    Serie: IChartSerie;

	    DrillSerie: IEaxDrillSerieResult;

	    DimSelection: IDimSelectionSet;

	    CountSel, i: Integer;

	Begin

	    Expr := UiErAnalyzer1.Instance As IEaxAnalyzer;

	    Serie := Expr.Chart.Chart.Series.Item(0);

	    DrillSerie := Expr.DrillSerie(Serie);

	    If DrillSerie <> Null Then

	        DimSelection := DrillSerie.Selection;

	        Debug.WriteLine("Элементы в отметке:");

	        CountSel := DimSelection.Count;

	        For i := 0 To CountSel - 1 Do

	            Debug.WriteLine("• " + DimSelection.Item(i).ToString("NAME", ", ", True));

	        End For;

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку в окно консоли для первого ряда данных будет
 выведен список элементов, содержащихся в отметке по всем измерениям.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

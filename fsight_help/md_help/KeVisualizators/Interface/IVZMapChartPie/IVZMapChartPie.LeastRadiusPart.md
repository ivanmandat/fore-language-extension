# IVZMapChartPie.LeastRadiusPart

IVZMapChartPie.LeastRadiusPart
-


# IVZMapChartPie.LeastRadiusPart


## Синтаксис


LeastRadiusPart: Double;


## Описание


Свойство LeastRadiusPart определяет
 наименьшее значение радиуса [кругового показателя](UiMaps.chm::/Configure/Diagrams.htm)
 на карте.


## Пример


Для выполнения примера разместите на форме компоненты Button,
 UiErAnalyzer, FloatEdit,
 EaxMapBox с наименованиями «Button1»,
 «UiErAnalyzer1», «FloatEdit1» и «EaxMapBox1» соответственно. Для UiErAnalyzer задайте свойству Active значение True,
 свойству Object - экспресс-отчёт,
 содержащий карту с [круговыми
 показателями](UiMaps.chm::/Configure/Diagrams.htm).
 Для EaxMapBox задайте свойству
 Source значение «UiErAnalyzer1».


Добавьте ссылки на системные сборки: Express, Map, Visualizators, Forms.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var Eax: IEaxAnalyzer;

	    Map: IVZMapChart;

	    Pies: IVZPiesArray;

	    i: Integer;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    Map := Eax.MapChart.MapChart;

	    Pies := Map.RootLayer.SubLayers.Item(0).Pies;

	    // Зададим радиус кругового показателя на карте

	    For i := 0 To Pies.Count - 1 Do

	        Pies.Item(i).LeastRadiusPart := FloatEdit1.Value;

	    End For;

	    FloatEdit1.Value := Map.RootLayer.SubLayers.Item(0).Pies.Item(0).LeastRadiusPart;

	    // Обновим экспресс-отчёт

	    Eax.MapChart.Refresh;

	End Sub Button1OnClick;


После выполнения примера задайте значение для радиуса круговых показателей
 в компоненте FloatEdit и нажмите
 на кнопку. На карте экспресс-отчёта изменится радиус круговых диаграмм.


См. также:


[IVZMapChartPie](IVZMapChartPie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

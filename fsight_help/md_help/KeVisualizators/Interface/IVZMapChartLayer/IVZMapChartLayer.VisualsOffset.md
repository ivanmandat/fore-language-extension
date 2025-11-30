# IVZMapChartLayer.VisualsOffset

IVZMapChartLayer.VisualsOffset
-


# IVZMapChartLayer.VisualsOffset


## Синтаксис


VisualsOffset: Double;


## Описание


Свойство VisualsOffset определяет
 расстояние между визуализаторами разных типов, расположенными на одной
 линии на слое карты.


## Комментарии


Для задания расстояния между визуализаторами разных типов необходимо,
 чтобы свойство [IVZMapChartLayer.PlaceVisualsOneByOne](IVZMapChartLayer.PlaceVisualsOneByOne.htm)
 принимало значение True.


Виды визуализаторов на карте:


	- [круговые показатели](IVZMapChartLayer.Pies.htm);


	- [столбиковые показатели](IVZMapChartLayer.Bars.htm);


	- [пузырьковые показатели](IVZMapChartLayer.Bubbles.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего карту с круговыми и столбиковыми
 показателями.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Map: IVZMapChart;

	    Layer: IVZMapChartLayer;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим карту

	    Map := Express.MapChart.MapChart;

	    // Получим слой на карте

	    Layer := Map.RootLayer.SubLayers.Item(0);

	    // Визуализаторы на карте будут располагаться на одной линии

	    If Not Layer.PlaceVisualsOneByOne Then

	        Layer.PlaceVisualsOneByOne := True;

	    End If;

	    // Расстояние между визуализаторами

	    Layer.VisualsOffset := 10;

	    // Обновим и сохраним отчёт

	    Express.RefreshAll;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера визуализаторы на карте будут располагаться
 на одной линии, расстояние между ними будет равно десяти пикселям.


См. также:


[IVZMapChartLayer](IVZMapChartLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

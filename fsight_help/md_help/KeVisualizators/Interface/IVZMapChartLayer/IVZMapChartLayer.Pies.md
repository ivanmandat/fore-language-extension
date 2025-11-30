# IVZMapChartLayer.Pies

IVZMapChartLayer.Pies
-


# IVZMapChartLayer.Pies


## Синтаксис


Pies: [IVZPiesArray](../IVZPiesArray/IVZPiesArray.htm);


## Описание


Свойство Pies возвращает массив
 [круговых
 показателей](UiMaps.chm::/Configure/Diagrams.htm)
 на слое карты.


## Комментарии


Для получения массива [столбиковых
 показателей](UiMaps.chm::/Configure/Diagrams.htm)
 на слое карты используйте [IVZMapChartLayer.Bars](IVZMapChartLayer.Bars.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего карту. Измерение фактов имеет ключ
 «10124».


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Map: IVZMapChart;

	    Facts: IDimInstance;

	    Slice: IEaxDataAreaSlice;

	    Sel: IDimSelection;

	    Layer: IVZMapChartLayer;

	    PiesArray: IVZPiesArray;

	    Pie: IVZMapChartPie;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим карту

	    Map := Express.MapChart.MapChart;

	    // Зададим измерение фактов в качестве измерения метрик

	    Facts := Express.Pivot.Dimensions.FindByKey(10124).DimInstance;

	    Slice := Express.DataArea.Slices.Item(0);

	    Slice.IndicatorsDimension := Facts;

	    // Включим тип метрики «Круговой» и в отметку добавим все элементы

	    Sel := Express.MapChart.IndicatorSelection(EaxMapChartIndicators.PieAngle);

	    Sel.SelectAll;

	    // Получим слой на карте

	    Layer := Map.RootLayer.SubLayers.Item(0);

	    // Получим коллекцию столбиковых показателей

	    PiesArray := Layer.Pies;

	    // Получим объект для работы с круговыми показателями

	    Pie := PiesArray.Item(0);

	    // Очистим коллекцию круговых показателей

	    PiesArray.Clear;

	    // Добавим ранее полученный объект для работы с круговыми показателями

	    PiesArray.Add(Pie);

	    // Обновим и сохраним отчёт

	    Express.RefreshAll;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера на карте экспресс-отчёта появятся круговые
 показатели.


См. также:


[IVZMapChartLayer](IVZMapChartLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

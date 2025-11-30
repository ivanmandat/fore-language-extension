# IVZMapChartLayer.Bars

IVZMapChartLayer.Bars
-


# IVZMapChartLayer.Bars


## Синтаксис


Bars: [IVZBarsArray](../IVZBarsArray/IVZBarsArray.htm);


## Описание


Свойство Bars возвращает массив
 [столбиковых
 показателей](UiMaps.chm::/Configure/Diagrams.htm)
 на слое карты.


## Комментарии


Для получения массива [круговых
 показателей](UiMaps.chm::/Configure/Diagrams.htm)
 на слое карты используйте [IVZMapChartLayer.Pies](IVZMapChartLayer.Pies.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего карту. Измерение фактов имеет ключ
 «10124».


Добавьте ссылки на системные сборки: Dimensions, Drawing, Express, Metabase,
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

	    BarsArray: IVZBarsArray;

	    Bar: IVZMapChartBar;

	    BarAxis: IVZMapChartBarAxis;

	    Color: IGxColor;

	    PenBase: IGxPenBase;

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

	    // Включим тип метрики «Столбиковый» и в отметку добавим все элементы

	    Sel := Express.MapChart.IndicatorSelection(EaxMapChartIndicators.BarHeight);

	    Sel.SelectAll;

	    // Получим слой на карте

	    Layer := Map.RootLayer.SubLayers.Item(0);

	    // Получим коллекцию столбиковых показателей

	    BarsArray := Layer.Bars;

	    // Получим объект для работы со столбиковыми показателями

	    Bar := BarsArray.Item(0);

	    // Очистим коллекцию столбиковых показателей

	    BarsArray.Clear;

	    // Добавим ранее полученный объект для работы со столбиковыми показателями

	    BarsArray.Add(Bar);

	    // Создадим и установим ось Х для столбиковых показателей

	    BarAxis := New VZMapChartBarAxis.Create;

	    BarAxis.Visibility := MapChartBarAxisVisibility.Visible;

	    Color := New GxColor.CreateRGB(120, 0, 120);

	    PenBase := New GxPen.CreateSolid(Color, 3);

	    BarAxis.Pen := PenBase;

	    Bar.Axis := BarAxis;

	    // Скроем столбики нулевой высоты

	    If Not Bar.HideZeroHeight Then

	        Bar.HideZeroHeight := True;

	    End If;

	    // Настроим для столбиков отображение данных по годам

	    Bar.IsAllPeriod := False;

	    // Установим расстояние между столбиками

	    Bar.BarDistance := 10.0;

	    // Установим толщину границ столбиков

	    Bar.BorderThickness := 2.0;

	    // Установим минимальную высоту столбиков

	    Bar.LeastHeightPart := 0.0;

	    // Установим минимальную ширину столбиков

	    Bar.LeastWidthPart := 10.0;

	    // Установим максимальное количество отображаемых столбиков

	    Bar.MaxBarsCount := 2;

	    // Обновим и сохраним отчёт

	    Express.RefreshAll;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера на карте экспресс-отчёта появятся столбиковые
 показатели. Для столбиковых показателей будут заданы следующие настройки:


	- включена ось X фиолетового цвета;


	- столбики нулевой высоты будут скрыты;


	- настроено отображение данных в столбиках по годам;


	- установлено расстояние между столбиками - 10;


	- установлена толщина границ столбиков - 2;


	- установлена минимальная высота столбиков - 0;


	- установлена минимальная ширина столбиков - 10;


	- установлено максимальное количество отображаемых столбиков -
	 2.


См. также:


[IVZMapChartLayer](IVZMapChartLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

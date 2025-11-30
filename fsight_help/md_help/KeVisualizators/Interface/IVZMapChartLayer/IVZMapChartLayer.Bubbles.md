# IVZMapChartLayer.Bubbles

IVZMapChartLayer.Bubbles
-


# IVZMapChartLayer.Bubbles


## Синтаксис


Bubbles: [IVZBubblesArray](../IVZBubblesArray/IVZBubblesArray.htm);


## Описание


Свойство Bubbles возвращает
 массив пузырьковых показателей на слое карты.


## Комментарии


Пузырьковый показатель позволяет
 отобразить дополнительную информацию о территориях, например соотношение
 значений показателя.


Для включения данного вида показателей используйте настройку в реестре:
 [HKEY_CURRENT_USER\Software\Foresight\Foresight Analytics Platform\10.0\Visualizers\MapChart\EnableBubbleIndicator]
 = 1. Если конечного раздела «MapChart»
 и параметра EnableBubbleIndicator =1»
 типа REG_DWORD нет в реестре, то создайте их вручную.


Работа с пузырьковыми показателями осуществляется по тому же принципу,
 что и с [круговыми показателями](../IVZPiesArray/IVZPiesArray.htm).


Пример карты с пузырьковыми показателями:


![](bubbles.png)


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

	    BubblesArray: IVZBubblesArray;

	    Bubble: IVZMapChartBubble;

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

	    // Включим тип метрики «Цвет пузырьков» и в отметку добавим все элементы

	    Sel := Express.MapChart.IndicatorSelection(EaxMapChartIndicators.BubbleColor);

	    Sel.SelectAll;

	    // Получим слой на карте

	    Layer := Map.RootLayer.SubLayers.Item(0);

	    // Получим коллекцию пузырьковых показателей

	    BubblesArray := Layer.Bubbles;

	    // Получим объект для работы с пузырьковыми показателями

	    Bubble := BubblesArray.Item(0);

	    // Изменим минимальный радиус пузырьковых показателей

	    Bubble.LeastSizeRadius := 15.0;

	    // Очистим коллекцию пузырьковых показателей

	    BubblesArray.Clear;

	    // Добавим ранее полученный объект для работы с пузырьковыми показателями

	    BubblesArray.Add(Bubble);

	    // Обновим и сохраним отчёт

	    Express.RefreshAll;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера на карте экспресс-отчёта появятся пузырьковые
 показатели. Для пузырьковых показателей будет задан минимальный радиус
 - 15.


См. также:


[IVZMapChartLayer](IVZMapChartLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

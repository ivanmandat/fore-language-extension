# IVZMapChartVisualElement.ToolTipStyle

IVZMapChartVisualElement.ToolTipStyle
-


# IVZMapChartVisualElement.ToolTipStyle


## Синтаксис


ToolTipStyle: [IVZToolTipStyle](../IVZToolTipStyle/IVZToolTipStyle.htm);


## Описание


Свойство ToolTipStyle определяет
 стиль всплывающих подсказок дополнительного визуального элемента на карте.


## Комментарии


К дополнительным визуальным элементам на карте относятся:


	- [круговые
	 показатели](UiMaps.chm::/Configure/Diagrams.htm);


	- [столбиковые
	 показатели](UiMaps.chm::/Configure/Diagrams.htm);


	- [пузырьковые
	 показатели](../IVZBubblesArray/IVZBubblesArray.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего карту с [круговыми показателями](UiMaps.chm::/Configure/Diagrams.htm).


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Map: IVZMapChart;

	    Layer: IVZMapChartLayer;

	    Pie: IVZMapChartVisualElement;

	    ToolTip: IVZTooltipStyle;

	    Color: IGxColor;

	    Brush: IGxBrush;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим карту

	    Map := Express.MapChart.MapChart;

	    // Получим слой карты

	    Layer := Map.RootLayer.SubLayers.Item(0);

	    // Получим круговой показатель

	    Pie := Layer.Pies.Item(0) As IVZMapChartVisualElement;

	    // Получим, изменим фон всплывающей подсказки и применим её к круговому показателю

	    ToolTip := Layer.ItemsToolTipStyle;

	    Color := New GxColor.CreateRGB(120, 0, 120);

	    Brush := New GxSolidBrush.Create(Color);

	    ToolTip.Background := Brush;

	    Pie.ToolTipStyle := ToolTip;

	    // Обновим и сохраним отчёт

	    Express.RefreshAll;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера изменится фон всплывающих подсказок круговых
 показателей.


См. также:


[IVZMapChartVisualElement](IVZMapChartVisualElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

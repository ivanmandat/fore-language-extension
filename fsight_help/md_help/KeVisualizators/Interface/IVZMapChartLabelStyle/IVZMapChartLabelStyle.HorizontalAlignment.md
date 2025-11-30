# IVZMapChartLabelStyle.HorizontalAlignment

IVZMapChartLabelStyle.HorizontalAlignment
-


# IVZMapChartLabelStyle.HorizontalAlignment


## Синтаксис


HorizontalAlignment: [VisualizerLabelHorizontalAlignment](../../Enums/VisualizerLabelHorizontalAlignment.htm);


## Описание


Свойство HorizontalAlignment
 определяет положение подписей слоя карты по горизонтали относительно позиции
 из топоосновы.


## Комментарии


Для определения положения подписи слоя карты по вертикали используйте
 свойство [IVZMapChartLabelStyle.VerticalAlignment](IVZMapChartLabelStyle.VerticalAlignment.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS_IVZMAPCHARTLABELSTYLE_VERTICALALIGNMENT, в котором
 обязательно должна быть карта с включенными подписями.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    EMap: IVZMapChart;

	    Layer: IVZMapChartLayer;

	    LabelStyle: IVZMapChartLabelStyle;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS_IVZMAPCHARTLABELSTYLE_VERTICALALIGNMENT").Edit As IEaxAnalyzer;

	    // Получим карту экспресс-отчёта

	    EMap := EaxAnalyzer.MapChart.MapChart;

	    // Получим слой карты

	    Layer := EMap.RootLayer.LayerById("Regions");

	    // Получим подписи слоя карты для редактирования

	    LabelStyle := Layer.LabelsStyle;

	    // Изменим положение подписи по вертикали и горизонтали

	    LabelStyle.VerticalAlignment := VisualizerLabelVerticalAlignment.Bottom;

	    LabelStyle.HorizontalAlignment := VisualizerLabelHorizontalAlignment.Left;

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера положение подписей слоя «Regions» карты
 в экспресс-отчёте сместится вниз и влево относительно позиции из топоосновы.


См. также:


[IVZMapChartLabelStyle](IVZMapChartLabelStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

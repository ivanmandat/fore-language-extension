# IVZMapChartShape.Selected

IVZMapChartShape.Selected
-


# IVZMapChartShape.Selected


## Синтаксис


Selected: Boolean;


## Описание


Свойство Selected определяет,
 будет ли отмечена область карты.


## Комментарии


Допустимые значения:


	- True. Область карты
	 будет отмечена;


	- False. Значение по умолчанию.
	 Область карты не будет отмечена.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. В экспресс-отчете должна содержаться карта
 со слоем «Regions».


Добавьте ссылки на системные сборки: Drawing, Express, Metabase
 и Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    EMap: IVZMapChart;

	    MapShape: IVZMapChartShape;

	    Layer: IVZMapChartLayer;

	    ShapeId: String;

	    Color: IGxColor;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим карту экспресс-отчёта в качестве визуализатора

	    EMap := EaxAnalyzer.MapChart.MapChart;

	    // Получим слой карты

	    Layer := EMap.RootLayer.LayerById("Regions");

	    // Выберем область

	    ShapeId := Layer.Shapes.Item(20).ShapeId;

	    MapShape := Layer.ShapeById(ShapeId);

	    // Отметим область на карте

	    MapShape.Selected := True;

	    // Выделим область на карте, изменив цвет границы

	    Color := New GxColor.CreateRGB(85, 157, 170);

	    MapShape.Border := New GxPen.CreateSolid(Color, 4);

	    // Зададим фон области слоя карты без заливки

	    MapShape.IsStrokedShape := True;

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера на карте будет отмечена область с заданным
 идентификатором, цвет границ области будет изменён, фон области слоя карты
 отобразится без заливки.


См. также:


[IVZMapChartShape](IVZMapChartShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

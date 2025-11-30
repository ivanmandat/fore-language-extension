# IVZMapChartShape.Background

IVZMapChartShape.Background
-


# IVZMapChartShape.Background


## Синтаксис


Background: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm);


## Описание


Свойство Background определяет
 кисть для заливки фона области слоя карты.


## Комментарии


Заливка фона отображается, если не используются [метрики](UiSelection.chm::/Selection/Dimension_type.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. В отчёте содержится карта с областями и идентификатором
 слоя «Regions».


Добавьте ссылки на системные сборки: Metabase, Express, Drawing, Visualizators.


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

	    // Настроим заливку фона для области слоя карты

	    Color := New GxColor.CreateRGB(47, 47, 234);

	    MapShape.Background := New GxSolidBrush.Create(Color);

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера на карте будет отмечена область с заданным
 идентификатором, фон области будет изменён на синий цвет.


См. также:


[IVZMapChartShape](IVZMapChartShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

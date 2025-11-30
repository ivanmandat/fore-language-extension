# IVZMapChartShape.Name

IVZMapChartShape.Name
-


# IVZMapChartShape.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 области слоя карты.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. В отчёте содержится карта с областями и идентификатором
 слоя «Regions».


Добавьте ссылки на системные сборки: Metabase, Express, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    EMap: IVZMapChart;

	    MapShape: IVZMapChartShape;

	    Layer: IVZMapChartLayer;

	    ShapeId: String;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим карту экспресс-отчёта в качестве визуализатора

	    EMap := EaxAnalyzer.MapChart.MapChart;

	    // Получим слой карты

	    Layer := EMap.RootLayer.LayerById("Regions");

	    // Выберем область

	    ShapeId := Layer.Shapes.Item(20).ShapeId;

	    MapShape := Layer.ShapeById(ShapeId);

	    // Отметим область на карте

	    MapShape.Selected := True;

	    Debug.WriteLine("Наименование активной области карты: " + MapShape.Name);

	    Debug.WriteLine("Наименование родительского слоя карты: " + MapShape.ParentLayer.Name);

	End Sub UserProc;


После выполнения примера в консоль будет выведено наименование активной
 области и наименование родительского слоя карты.


См. также:


[IVZMapChartShape](IVZMapChartShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

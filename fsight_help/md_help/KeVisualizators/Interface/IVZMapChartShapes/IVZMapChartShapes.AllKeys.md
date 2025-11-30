# IVZMapChartShapes.AllKeys

IVZMapChartShapes.AllKeys
-


# IVZMapChartShapes.AllKeys


## Синтаксис


AllKeys: [IVZStringArray](../IVZStringArray/IVZStringArray.htm);


## Описание


Свойство AllKeys возвращает
 массив ключей областей слоя карты.


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

	    Layer: IVZMapChartLayer;

	    Shapes: IVZMapChartShapes;

	    Shape: IVZMapChartShape;

	    i, c: Integer;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим карту экспресс-отчёта в качестве визуализатора

	    EMap := EaxAnalyzer.MapChart.MapChart;

	    // Получим слой карты

	    Layer := EMap.RootLayer.LayerById("Regions");

	    // Получим области

	    Shapes := Layer.Shapes;

	    c := Shapes.Count;

	    For i := 0 To c - 1 Do

	        Shape := Shapes.ItemByKey(Shapes.AllKeys.Item(i));

	        Debug.WriteLine(Shape.Name + " (ID=" + Shape.ShapeId + ')');

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены наименования
 и идентификаторы всех областей слоя «Regions».


См. также:


[IVZMapChartShapes](IVZMapChartShapes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

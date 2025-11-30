# IVZMapChartArrows.Add

IVZMapChartArrows.Add
-


# IVZMapChartArrows.Add


## Синтаксис


Add(Value: [IVZMapChartArrow](../IVZMapChartArrow/IVZMapChartArrow.htm)):
 Integer;


## Параметры


Value. Стрелка на карте.


## Описание


Метод Add добавляет стрелку
 в коллекцию.


## Комментарии


Для очищения коллекции стрелок используйте [IVZMapChartArrows.Clear](IVZMapChartArrows.Clear.htm).


Для удаления стрелки из коллекции по её индексу используйте [IVZMapChartArrows.Remove](IVZMapChartArrows.Remove.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего карту со стрелками.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    Map: IVZMapChart;

	    Arrows: IVZMapChartArrows;

	    Arrow: IVZMapChartArrow;

	    ArrowStyle: IVZMapChartArrowStyle;

	    Color: IGxColor;

	    Pen: IGxPenBase;

	    LabelStyle: IVZLabelStyle;

	    Brush: IGxBrush;

	    Font: IGxFontBase;

	    TtStyle: IVZToolTipStyle;

	    AV: IVZMapChartArrowVisual;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим карту экспресс-отчёта

	    Map := EaxAnalyzer.MapChart.MapChart;

	    // Получим стрелки на карте

	    Arrows := Map.Arrows;

	    Arrow := Arrows.Item(0);

	    Arrows.Clear;

	    Arrows.Add(Arrow);

	    // Изменим идентификатор, точки входа и выхода стрелки

	    Arrow.ArrowId := "ArrowID";

	    Arrow.StartShapeId := Map.RootLayer.SubLayers.Item(0).Shapes.Item(10).ShapeId;

	    Arrow.EndShapeId := Map.RootLayer.SubLayers.Item(0).Shapes.Item(30).ShapeId;

	    // Получим стиль стрелки по умолчанию и изменим его

	    ArrowStyle := Map.DefaultArrowStyle;

	    // Изменим угол изгиба стрелки

	    ArrowStyle.Angle := 45;

	    // Изменим тип стрелки на фигурную

	    ArrowStyle.ArrowType := MapChartArrowType.Figured;

	    // Размеры наконечника стрелки не зависят от её длины

	    If ArrowStyle.IsRelativeWidth Then

	        ArrowStyle.IsRelativeWidth := False;

	    End If;

	    // Зададим размеры наконечника

	    ArrowStyle.PointerLength := 30;

	    ArrowStyle.PointerWidth := 30;

	    // Изменим расположение подписи стрелки по всей длине

	    ArrowStyle.TextOrientation := MapChartArrowTextOrientation.AlongTheArrow;

	    // Создадим границу для стрелки

	    Color := New GxColor.CreateRGB(0, 0, 0);

	    Pen := New GxPen.CreateSolid(Color, 2);

	    ArrowStyle.Border := Pen;

	    // Применим стиль подписи

	    LabelStyle := New VZLabelStyle.Create;

	    Brush := New GxSolidBrush.Create(New GxColor.CreateRGB(120, 0, 120));

	    LabelStyle.Background := Brush;

	    LabelStyle.BorderPen := Pen;

	    Font := New GxFont.Create("Arial", 12, GxFontStyle.Bold, GxUnit.Point);

	    LabelStyle.Font := Font;

	    LabelStyle.FontShadowColor := New GxColor.CreateRGB(180, 5, 180);

	    LabelStyle.MaskText := "Arrow";

	    LabelStyle.NoDataText := "NoData";

	    ArrowStyle.LabelStyle := LabelStyle;

	    // Применим стиль подсказки

	    TtStyle := New VZTooltipStyle.Create;

	    TtStyle.HoverMode := VisualizatorHoverMode.Click;

	    TtStyle.Background := Brush;

	    TtStyle.BorderPen := Pen;

	    TtStyle.Font := Font;

	    TtStyle.FontShadowColor := New GxColor.CreateRGB(180, 5, 180);

	    TtStyle.MaskText := "Arrow";

	    TtStyle.NoDataText := "NoData";

	    ArrowStyle.ToolTipStyle := TtStyle;

	    // Выведем в консоль тип метрик

	    AV := ArrowStyle.ArrowVisual;

	    Debug.WriteLine("Тип метрики для сопоставления данных цвету стрелки - " + AV.BackgroundMapping.AttributeId);

	    Debug.WriteLine("Тип метрики для сопоставления размеру стрелки - " + AV.BasementWidthMapping.AttributeId);

	    // Сохраним изменения

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- будут удалены все стрелки из коллекции, кроме одной;


	- для стрелки будут изменен идентификатор, точки входа и выхода;


	- будет создана подпись со стилем;


	- будет создана подсказка по щелчку на стрелке;


	- в консоль будут выведены типы метрик для сопоставления различных
	 настроек.


См. также:


[IVZMapChartArrows](IVZMapChartArrows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

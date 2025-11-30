# IVZMapChartBaseObject.MapChart

IVZMapChartBaseObject.MapChart
-


# IVZMapChartBaseObject.MapChart


## Синтаксис


MapChart: [IVZMapChart](../IVZMapChart/IVZMapChart.htm);


## Описание


Свойство MapChart возвращает
 объект, содержащий параметры отображения карты в экспресс-отчёте.


## Комментарии


[Карта](UiMaps.chm::/Map.htm) предназначена
 для отображения картографических данных, строится на базе двумерной таблицы
 и обычно представляет собой одну строку/столбец из этой таблицы в виде
 закраски территорий. Закраска территорий определяется начальным и конечным
 цветами, которые соответствуют минимальному и максимальному значению на
 карте соответственно.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS_BO, содержащего карту со стрелками.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    Map: IVZMapChart;

	    Arrows: IVZMapChartArrows;

	    Arrow1, Arrow2: IVZMapChartArrow;

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

	    EaxAnalyzer := Metabase.ItemById("EXPRESS_BO").Edit As IEaxAnalyzer;

	    // Получим карту экспресс-отчёта

	    Map := EaxAnalyzer.MapChart.MapChart;

	    // Получим стрелки на карте

	    Arrows := Map.Arrows;

	    Arrow1 := Arrows.Item(0);

	    // Получим карту от стрелки

	    Map := Arrow1.MapChart;

	    // Получим стрелки на карте

	    Arrows := Map.Arrows;

	    Arrow2 := Arrows.Item(1);

	    Arrows.Clear;

	    Arrows.Add(Arrow2);

	    // Изменим идентификатор, точки входа и выхода стрелки

	    Arrow2.ArrowId := "ArrowID";

	    Arrow2.StartShapeId := Map.RootLayer.SubLayers.Item(0).Shapes.Item(30).ShapeId;

	    Arrow2.EndShapeId := Map.RootLayer.SubLayers.Item(0).Shapes.Item(30).ShapeId;

	    // Получим стиль стрелки по умолчанию и изменим его

	    ArrowStyle := Map.DefaultArrowStyle;

	    // Изменим угол изгиба стрелки

	    ArrowStyle.Angle := 45;

	    // Изменим тип стрелки на фигурную

	    ArrowStyle.ArrowType := MapChartArrowType.Figured;

	    // Размеры наконечника стрелки не зависят от ее длины

	    If ArrowStyle.IsRelativeWidth Then

	        ArrowStyle.IsRelativeWidth := False;

	    End If;

	    // Размеры наконечника

	    ArrowStyle.PointerLength := 20;

	    ArrowStyle.PointerWidth := 20;

	    // Изменим расположение подписи стрелки по всей длине

	    ArrowStyle.TextOrientation := MapChartArrowTextOrientation.Horizontal;

	    // Создадим границу для стрелки

	    Color := New GxColor.CreateRGB(0, 0, 0);

	    Pen := New GxPen.CreateSolid(Color, 1);

	    ArrowStyle.Border := Pen;

	    // Применим стиль подписи

	    LabelStyle := New VZLabelStyle.Create;

	    Brush := New GxSolidBrush.Create(New GxColor.CreateRGB(128, 128, 128));

	    LabelStyle.Background := Brush;

	    LabelStyle.BorderPen := Pen;

	    Font := New GxFont.Create("Tahoma", 12, GxFontStyle.Bold, GxUnit.Point);

	    LabelStyle.Font := Font;

	    LabelStyle.FontShadowColor := New GxColor.CreateRGB(0, 5, 0);

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


В результате выполнения примера будут удалены все стрелки из коллекции,
 кроме одной; для стрелки будут изменен идентификатор, точки входа и выхода;
 будет создана подпись со стилем; будет создана подсказка при щелчке основной
 кнопкой мыши по стрелке; в окно консоли будут выведены типы метрик для
 сопоставления различных настроек, карта для стрелок будет получена от
 стрелки с карты экспресс-отчета.


См. также:


[IVZMapChartBaseObject](IVZMapChartBaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

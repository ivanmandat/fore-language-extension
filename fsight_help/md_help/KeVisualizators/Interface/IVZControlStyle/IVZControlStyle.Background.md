# IVZControlStyle.Background

IVZControlStyle.Background
-


# IVZControlStyle.Background


## Синтаксис


Background: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm);


## Описание


Свойство Background определяет
 фон элемента управления.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT, в котором содержится [пузырьковое
 дерево](UiVisualizators.chm::/BubbleTree/BubbleTree.htm). Временная шкала пузырькового дерева выглядит
 так, как показано на странице описания интерфейса [IVZBubbleTree](../IVZBubbleTree/IVZBubbleTree.htm).
 Установим новые значения для свойств временной шкалы: фон, граница, шрифт,
 цвет шрифта, отступы, поля и цвет теней.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.
 Указанная процедура должна вызываться из точки входа Main.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    Timeline: IVZTimeLine;

	    Style: IVZControlStyle;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим временную шкалу

	    Timeline := BubbleTree.TimeLine;

	    // Получим стиль временной
	 шкалы

	    Style := Timeline.Style;

	    // Установим новый фон

	    Style.Background := New GxSolidBrush.Create(New GxColor.CreateRGB(206, 157, 182));

	    // Установим новый цвет границы

	    Style.BorderPen := New GxPen.CreateSolid(New GxColor.CreateRGB(167, 84, 125), 2);

	    // Установим радиус скругления границы

	    Style.BorderRadius := 1;

	    // Установим новый шрифт

	    Style.Font := New GxFont.Create("Tahoma", 15);

	    // Установим новый цвет шрифта

	    Style.FontColor := New GxColor.CreateRGB(0, 0, 0);

	    // Установим цвет теней

	    Style.FontShadowColor := New GxColor.CreateRGB(255, 0, 0);

	    // Установим отступы элемента

	    Style.Margin := New GxRectF.Create(15, 15, 15, 15);

	    // Установим поля элемента

	    Style.Padding := New GxRectF.Create(10, 10, 10, 10);

	    // Установим цвет теней

	    Style.ShadowColor := New GxColor.CreateRGB(255, 0, 0);

	    // Установим измененный стиль

	    Timeline.Style := Style;

	    // Установим измененную временную шкалу

	    BubbleTree.TimeLine := Timeline;

	    // Сохраним изменения в экспресс-отчёте

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в экспресс-отчёте будут изменены свойства временной
 шкалы пузырькового дерева: фон, граница, шрифт, цвет шрифта, отступы,
 поля и цвет теней:


![](IVZControlStyle_Background.gif)


См. также:


[IVZControlStyle](IVZControlStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

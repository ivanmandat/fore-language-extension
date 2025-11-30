# IVZControlStyle.SetBackground

IVZControlStyle.SetBackground
-


# IVZControlStyle.SetBackground


## Синтаксис


SetBackground(state: [VisualizatorControlState](../../Enums/VisualizatorControlState.htm);
 Value: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm));


## Параметры


state. Состояние элемента управления;


Value. Кисть фона элемента
 управления.


## Описание


Метод SetBackground устанавливает
 кисть, определяющую фон элемента управления для указанного состояния.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase, Drawing и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


До выполнения примера временная шкала пузырькового дерева выглядит так,
 как показано на странице [описания
 интерфейса IVZBubbleTree](../IVZBubbleTree/IVZBubbleTree.htm). Установим новые значения фона и границ
 для данной шкалы, получим тип кисти заливки фона и ширину линии границ:


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

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим временную шкалу

	    Timeline := BubbleTree.TimeLine;

	    // Получим стиль временной шкалы

	    Style := Timeline.Style;

	    // Установим новый фон

	    Style.SetBackground(VisualizatorControlState.ControlStateReleased,

	        New GxSolidBrush.Create(New GxColor.CreateRGB(127, 199, 255)));

	    // Установим новый цвет границы

	    Style.SetBorderPen(VisualizatorControlState.ControlStateReleased,

	        New GxPen.CreateSolid(New GxColor.CreateRGB(255, 0, 0), 3));

	    // Выведем тип кисти заливки фона

	    Select Case Style.GetBackground(VisualizatorControlState.ControlStateReleased).BrushType

	        Case GxBrushType.SolidColor: Debug.WriteLine("Тип кисти заливки фона - SolidColor");

	        Case GxBrushType.HatchFill: Debug.WriteLine("Тип кисти заливки фона - HatchFill");

	        Case GxBrushType.TextureFill: Debug.WriteLine("Тип кисти заливки фона - TextureFill");

	        Case GxBrushType.PathGradient: Debug.WriteLine("Тип кисти заливки фона - PathGradient");

	        Case GxBrushType.LinearGradient: Debug.WriteLine("Тип кисти заливки фона - LinearGradient");

	    End Select;

	    // Выведем ширину линии границы

	    Debug.WriteLine("Ширина линии границы: " +

	        Style.GetBorderPen(VisualizatorControlState.ControlStateReleased).Width.ToString);

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера был изменен цвет фона и границы временной
 шкалы пузырькового дерева:


![](IVZControlStyle_SetBackground.png)


Также в консоль среды разработки будет выведен тип кисти заливки фона
 и ширина линии границ:


Тип кисти заливки фона - SolidColor


Ширина линии границы: 3


См. также:


[IVZControlStyle](IVZControlStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

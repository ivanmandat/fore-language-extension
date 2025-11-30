# IVZDataScale.Less

IVZDataScale.Less
-


# IVZDataScale.Less


## Синтаксис


Less(Index: Integer, useInactiveItem: Boolean):
 Variant;


## Параметры


Index. Индекс элемента шкалы;


useInactiveItem. Признак использования
 неактивного элемента. Если свойство равно значению True,
 то будет учитываться неактивный элемент, иначе - не будет.


## Описание


Свойство Less возвращает элемент
 шкалы визуализатора со значением, меньшим, чем значение элемента с указанным
 индексом.


## Комментарии


Свойство возвращает кисть, описываемую интерфейсом [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm),
 или числовое значение в зависимости от [типа
 шкалы](IVZDataScale.Type.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT, в котором содержится [пузырьковое
 дерево](UiVisualizators.chm::/BubbleTree/BubbleTree.htm). Цветовая шкала пузырькового дерева выглядит
 так, как показано на странице описания интерфейса [IVZDataScale](IVZDataScale.htm).
 Установим количество интервалов шкалы равное 4, а также определим начальное
 и конечное значение первого интервала. Затем получим цвета элементов пузырькового
 дерева со значением, меньшим и большим значения элемента с индексом 1.


Добавьте ссылки на системные сборки: Metabase, Express, Drawing, Visualizators.
 Указанная процедура должна вызываться из точки входа Main.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    Scale: IVZDataScale;

	    Item: IGxSolidBrush;

	    MinValue: Double;

	    MaxValue: Double;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим шкалу цветов пузырькового дерева

	    Scale := EaxAnalyzer.BubbleTree.BubbleTree.ColorVisual.ColorMapping.Scale;

	    // Установим количество интервалов шкалы

	    Scale.IntervalsCount := 4;

	    // Получим значения, соответствующие границам первого интервала

	    Scale.GetValuesPair(0, MinValue, MaxValue);

	    Debug.WriteLine("Начальное значение первого интервала: " + MinValue.ToString);

	    Debug.WriteLine("Конечное значение: " + MaxValue.ToString);

	    // Получим элемент со значением, меньшим значения элемента с индексом 1

	    Item := Scale.Less(1, False) As IGxSolidBrush;

	    If Item <> Null Then

	        Debug.WriteLine("Цвет меньшего элемента: (" +

	            Item.Color.R.ToString + ", " + Item.Color.G.ToString + ", " +

	            Item.Color.B.ToString + ")");

	    End If;

	    // Получим элемент со значением, большим значения с индексом 1

	    Item := Scale.Greater(1, False) As IGxSolidBrush;

	    If Item <> Null Then

	        Debug.WriteLine("Цвет большего элемента: (" +

	            Item.Color.R.ToString + ", " + Item.Color.G.ToString + ", " +

	            Item.Color.B.ToString + ")");

	    End If;

	    // Сохраним изменения в экспресс-отчёте

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для шкалы пузырькового дерева будет установлено
 количество интервалов равное 4:


![](IVZDataScale_Less.png)


В окне консоли будет выведено минимальное и максимальное значение первого
 интервала, а также цвета элементов пузырькового дерева со значением, меньшим
 и большим значения элемента с индексом 1:


Начальное значение первого интервала: 14.5


Конечное значение: 20.5


Цвет меньшего элемента: (235, 175, 54)


Цвет большего элемента: (255, 217, 0)


См. также:


[IVZDataScale](IVZDataScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

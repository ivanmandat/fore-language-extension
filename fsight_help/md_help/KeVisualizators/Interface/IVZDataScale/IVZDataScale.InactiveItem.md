# IVZDataScale.InactiveItem

IVZDataScale.InactiveItem
-


# IVZDataScale.InactiveItem


## Синтаксис


InactiveItem: Variant;


## Описание


Свойство InactiveItem определяет
 настройки неактивного элемента визуализатора.


## Комментарии


В качестве значения свойства указывается кисть, описываемая интерфейсом
 [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm),
 или числовое значение в зависимости от [типа
 шкалы](IVZDataScale.Type.htm).


Элемент визуализатора считается неактивным, если он относится к интервалу,
 который не выбран для отображения в легенде.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT, в котором содержится [пузырьковое
 дерево](UiVisualizators.chm::/BubbleTree/BubbleTree.htm). Цветовая шкала пузырькового дерева выглядит
 так, как показано на странице описания интерфейса [IVZDataScale](IVZDataScale.htm).
 Установим новые цвета для элементов шкалы.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    Scale: IVZDataScale;

	    Color: IGxColor;

	    ColorLegend: IVZColorLegendBase;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим шкалу цветов пузырькового дерева

	    Scale := BubbleTree.ColorVisual.ColorMapping.Scale;

	    // Создадим фиолетовый цвет

	    Color := New GxColor.CreateRGB(102, 0, 204);

	    // Определим этот цвет для пузырьков элемента легенды

	    Scale.InactiveItem := New GxSolidBrush.Create(Color);

	    // Установим цвет пузырьков со второго интервала легенды

	    Scale.IsInactiveItem(1) := True;

	    // Создадим оливковый цвет

	    Color := New GxColor.CreateRGB(128, 128, 0);

	    // Определим кисть для элемента легенды «Нет данных»

	    Scale.NoData := New GxSolidBrush.Create(Color);

	    // Получим легенду

	    ColorLegend := BubbleTree.Legends.Item(0) As IVZColorLegendBase;

	    // Включим возможность подсветки элементов легенды

	    ColorLegend.DoHighlight := True;

	    // Создадим горчичный цвет

	    Color := New GxColor.CreateRGB(205, 205, 0);

	    ColorLegend.HighlightBrush := New GxSolidBrush.Create(Color);

	    // Зададим возможность выделения элементов легенды по щелчку

	    ColorLegend.HoverMode := VisualizatorHoverMode.Click;

	    // Сохраним изменения в экспресс-отчёте

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- при выборе элементов со второго интервала легенды будет установлен
	 фиолетовый цвет пузырьков;


	- для элемента легенды «Нет данных» будет установлен оливковый
	 цвет;


	- для подсветки активных интервалов легенды будет установлен горчичный
	 цвет.


См. также:


[IVZDataScale](IVZDataScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

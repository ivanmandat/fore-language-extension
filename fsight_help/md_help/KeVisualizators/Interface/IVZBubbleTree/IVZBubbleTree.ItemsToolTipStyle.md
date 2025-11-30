# IVZBubbleTree.ItemsToolTipStyle

IVZBubbleTree.ItemsToolTipStyle
-


# IVZBubbleTree.ItemsToolTipStyle


## Синтаксис


ItemsToolTipStyle: [IVZToolTipStyle](../IVZToolTipStyle/IVZToolTipStyle.htm);


## Описание


Свойство ItemsToolTipStyle возвращает
 объект для работы со стилем всплывающих подсказок.


## Комментарии


Для определения, используется ли стандартный цвет шрифта всплывающей
 подсказки используйте [IVZBubbleTree.LabelAutoColor](IVZBubbleTree.LabelAutoColor.htm).


## Пример


Для выполнения примера необходимо наличие экспресс-отчета с идентификатором
 EXPRESS_IVZBUBBLETREE, который содержит пузырьковое дерево.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    analyzer: IEaxAnalyzer;

	    bt: IEaxBubbleTree;

	    BubbleTree: IVZBubbleTree;

	    ItemsTooltipStyle: IVZToolTipStyle;

	    color: GxColor;

	Begin

	    // Получим текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    analyzer := mb.ItemById("EXPRESS_IVZBUBBLETREE").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    bt := analyzer.BubbleTree;

	    // Получим пузырьковое дерево в качестве визуализатора

	    BubbleTree := bt.BubbleTree;

	    // Получим стиль всплывающей подсказки

	    ItemsTooltipStyle := bubbletree.ItemsToolTipStyle;

	    // Отключим стандартный цвет шрифта подсказки

	    BubbleTree.LabelAutoColor := False;

	    // Создадим новый цвет

	    color := New GxColor.CreateRGB(120, 0, 120);

	    // Зададим новый цвет шрифта подсказки

	    ItemsTooltipStyle.FontColor := color;

	    // Сохраним изменения

	    (analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера изменится цвет шрифта всплывающей подсказки.


См. также:


[IVZBubbleTree](IVZBubbleTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

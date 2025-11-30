# IVZColorLegendBase.Items

IVZColorLegendBase.Items
-


# IVZColorLegendBase.Items


## Синтаксис


Items: [IVZLegendItems](../IVZLegendItems/IVZLegendItems.htm);


## Описание


Свойство Items определяет коллекцию
 пунктов цветовой легенды.


## Комментарии


Для определения, будет ли количество столбцов в легенде для пунктов
 цветовой легенды устанавливаться автоматически, используйте [IVZColorLegendBase.AutoColumnsCount](IVZColorLegendBase.AutoColumnsCount.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего пузырьковое дерево.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    ColorLegend: IVZColorLegendBase;

	    IntervalsLegend: IVZIntervalsLegend;

	    Items: IVZLegendItems;

	    ItemO, ItemT: IVZLegendItem;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    // Получим цветовую шкалу дерева

	    ColorLegend := BubbleTree.Legends.Item(0) As IVZColorLegendBase;

	    // Отключим автоматическое количество столбцов

	    ColorLegend.AutoColumnsCount := False;

	    // Зададим количество столбцов

	    IntervalsLegend := ColorLegend As IVZIntervalsLegend;

	    IntervalsLegend.ColumnsCount := 1;

	    // Создадим новые пункты для легенды пузырькового дерева

	    Items := New VZLegendItems.Create;

	    ItemO := New VZLegendItem.Create;

	    ItemT := New VZLegendItem.Create;

	    ItemO.Text := "TEXT1";

	    ItemO.Color := GxColor.FromName("Blue");

	    ItemT.Text := "TEXT2";

	    ItemT.Color := GxColor.FromName("Black");

	    Items.Add(ItemO);

	    Items.Add(ItemT);

	    ColorLegend.Items := Items;

	    // Обновим отчёт и сохраним изменения

	    Analyzer.RefreshAll;

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в легенде цвета пузырькового дерева будут отображаться
 два новых, разного цвета пункта, расположенные в одном столбце.


См. также:


[IVZColorLegendBase](IVZColorLegendBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

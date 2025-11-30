# IVZTreeItem.Selected

IVZTreeItem.Selected
-


# IVZTreeItem.Selected


## Синтаксис


Selected: Boolean;


## Описание


Свойство Selected определяет,
 используется ли выделение области дерева визуализатора.


## Комментарии


Допустимые значения:


	- True. Используется выделение
	 области дерева визуализатора;


	- False. Не используется
	 выделение области дерева визуализатора.


## Пример


Для выполнения примера предполагается наличие экспресс-отчёта с идентификатором
 EXPRESS. В экспресс-отчёте настроено отображение пузырькового дерева.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    RootItem: IVZTreeItem;

	    Items: IVZTreeItems;

	    Index: Integer;

	    Item: IVZTreeItem;

	    Model: IVZTreeModel;

	Begin

	    Metabase := MetabaseClass.Active;

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Модель дерева

	    Model := BubbleTree.Model;

	    // Корневой элемент пузырькового дерева

	    RootItem := Model.RootItem;

	    RootItem.Selected := True;

	    Debug.WriteLine("Идентификатор корневого элемента: " + RootItem.ID);

	    // Дочерние элементы дерева

	    Items := RootItem.Items;

	    Debug.WriteLine("=== Дочерние элементы ===");

	    For Index := 0 To Items.Count-1 Do

	        // Идентификаторы дочерних элементов по индексу

	        Item := Items.Item(Index);

	        Debug.WriteLine((Index+1).ToString + ". Идентификатор: " + " " + Item.ID + ", родитель: " + Item.Parent.ID);

	    End For;

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в консоль будет выведена следующая информация:


	- идентификатор корневого элемента;


	- идентификаторы дочерних элементов и соответствующие идентификаторы
	 родительских элементов.


См. также:


[IVZTreeItem](IVZTreeItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

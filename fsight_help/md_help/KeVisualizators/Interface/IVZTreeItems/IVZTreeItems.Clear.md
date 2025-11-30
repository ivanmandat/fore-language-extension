# IVZTreeItems.Clear

IVZTreeItems.Clear
-


# IVZTreeItems.Clear


## Синтаксис


Clear;


## Описание


Метод Clear очищает коллекцию
 элементов дерева визуализатора.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. Модуль, в котором размещается пример, должен
 иметь ссылки на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


Получим корневой элемент пузырькового дерева и его дочерних элементов,
 добавим элемент, а затем удалим все элементы:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    RootItem: IVZTreeItem;

	    Model: IVZTreeModel;

	    Items: IVZTreeItems;

	    Item: IVZTreeItem;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим модель дерева

	    Model := BubbleTree.Model;

	    // Получим корневой элемент пузырькового дерева

	    RootItem := Model.RootItem;

	    Debug.WriteLine("Количество элементов до добавления: " + RootItem.Items.Count.ToString);

	    // Добавим элемент

	    Items := RootItem.Items;

	    Item := Items.Item(RootItem.Items.Count-1);

	    RootItem.Items.Add(Item);

	    Debug.WriteLine("Количество элементов после добавления: " + RootItem.Items.Count.ToString);

	    Debug.WriteLine("Количество элементов до удаления: " + RootItem.Items.Count.ToString);

	    // Очистим все элементы в коллекции

	    RootItem.Items.Clear;

	    Debug.WriteLine("Количество элементов после удаления: " + RootItem.Items.Count.ToString);

	End Sub UserProc;


В результате выполнения примера были удалены все дочерние элементы корневого
 элемента пузырькового дерева, о чём свидетельствует уведомления в консоли
 среды разработки:


Количество элементов до добавления: 1


Количество элементов после добавления: 2


Количество элементов до удаления: 2


Количество элементов после удаления: 0


См. также:


[IVZTreeItems](IVZTreeItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

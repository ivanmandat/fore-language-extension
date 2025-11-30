# IVZTreeItems.Item

IVZTreeItems.Item
-


# IVZTreeItems.Item


## Синтаксис


Item(Index: Integer): [IVZTreeItem](../IVZTreeItem/IVZTreeItem.htm);


## Описание


Свойство Item возвращает элемент
 из коллекции элементов дерева по указанному индексу.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


Определим идентификаторы корневого элемента пузырькового дерева и его
 дочерних элементов, которые затем удалим:


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

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим модель дерева

	    Model := BubbleTree.Model;

	    // Получим корневой элемент пузырькового дерева

	    RootItem := Model.RootItem;

	    Debug.WriteLine("Идентификатор корневого элемента: " +

	        RootItem.ID);

	    // Получим дочерние элементы дерева

	    Items := RootItem.Items;

	    Debug.WriteLine("Дочерние элементы: ");

	    // Выведем идентификаторы дочерних элементов

	    For Index := 0 To Items.Count-1 Do

	        // Получим дочерний элемент по индексу

	        Item := Items.Item(Index);

	        Debug.WriteLine(Item.ID + ", родитель: " + Item.Parent.ID);

	        // Удалим элемент

	        Items.Remove(Index);

	    End For;

	    Debug.WriteLine("Количество элементов после удаления: " +

	        RootItem.Items.Count.ToString);

	End Sub UserProc;


В результате выполнения примера в консоли среды разработки были выведены
 идентификатор корневого элемента пузырькового дерева, а также идентификаторы
 его дочерних элементов, которые затем были удалены:


Идентификатор корневого элемента: 10000


Дочерние элементы:


10001, родитель: 10000


Количество элементов после удаления: 0


См. также:


[IVZTreeItems](IVZTreeItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

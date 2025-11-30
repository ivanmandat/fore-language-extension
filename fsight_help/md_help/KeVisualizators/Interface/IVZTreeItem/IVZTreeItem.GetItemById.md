# IVZTreeItem.GetItemById

IVZTreeItem.GetItemById
-


# IVZTreeItem.GetItemById


## Синтаксис


GetItemById(Value: String): [IVZTreeItem](IVZTreeItem.htm);


## Параметры


Value. Идентификатор дочернего
 элемента.


## Описание


Метод GetItemById возвращает
 дочерний элемент дерева визуализатора по идентификатору.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. В отчёте содержится пузырьковое дерево, для
 которого заданы [объекты
 наблюдения](UiSelection.chm::/Selection/Dimension_type.htm)
 по отметке измерения. Среди элементов измерения содержится элемент с идентификатором
 ELEM.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    RootItem, ItemID, ItemNext, ItemPrev: IVZTreeItem;

	    Items, Items2: IVZTreeItems;

	    Item: IVZTreeItem;

	    Model: IVZTreeModel;

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

	    Debug.WriteLine("Идентификатор корневого элемента: " + RootItem.ID);

	    // Получим дочерние элементы дерева

	    Items := RootItem.Items;

	    // Получим элемент с идентификатором ELEM

	    ItemID := RootItem.GetItemById("ELEM");

	    // Выведем в консоль идентификаторы соседних элементов

	    ItemNext := ItemID.GetNext(True);

	    ItemPrev := ItemID.GetPrev(True);

	    Debug.WriteLine("Соседние элементы: " + ItemNext.Id + ", " + ItemPrev.Id);

	End Sub UserProc;


После выполнения примера в консоль будут выведены идентификаторы соседних
 элементов дочернего элемента с идентификатором ELEM.


См. также:


[IVZTreeItem](IVZTreeItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

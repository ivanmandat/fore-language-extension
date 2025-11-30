# IRibbonPanels.Insert

IRibbonPanels.Insert
-


# IRibbonPanels.Insert


## Синтаксис


Insert(Index: Integer; Value: [IRibbonPanel](../IRibbonPanel/IRibbonPanel.htm));


## Параметры


Index. Позиция, в которую осуществляется
 вставка.


Value. Панель, которую необходимо
 вставить в позицию Index.


## Описание


Метод Insert вставляет указанную
 панель в указанную позицию в коллекции.


## Комментарии


Если вкладка создается динамически, то после создания она должна быть
 добавлена на ленту. Для этого ее необходимо включить в коллекцию с помощью
 метода [Add](IRibbonPanels.Add.htm), либо Insert.
 После этого можно будет изменять параметры вкладки. При перемещении панели
 предварительно она должен быть удалена из коллекции.


	Var

	    RCategory1, RCategory2: IRibbonCategory;

	    RPanels1, RPanels2: IRibbonPanels;

	    RPanel: IRibbonPanel;

	Begin

	    RCategory1 := Ribbon1.Categories.Item(0);

	    RCategory2 := Ribbon1.Categories.Item(1);

	    RPanels1 := RCategory1.Panels;

	    RPanels2 := RCategory2.Panels;

	    RPanel := RPanels1.Item(0);

	    RPanels1.Remove(RPanel);

	    RPanels2.Insert(RPanels2.Count, RPanel);


См. также:


[IRibbonPanels](IRibbonPanels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

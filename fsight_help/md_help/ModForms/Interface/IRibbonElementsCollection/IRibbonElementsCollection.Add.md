# IRibbonElementsCollection.Add

IRibbonElementsCollection.Add
-


# IRibbonElementsCollection.Add


## Синтаксис


Add(Element: [IBaseRibbonElement](../IBaseRibbonElement/IBaseRibbonElement.htm));


## Параметры


Element. Элемент управления,
 который необходимо включить в коллекцию.


## Описание


Метод Add добавляет указанный
 элемент управления в коллекцию.


## Комментарии


Если элемент управления создается динамически, то после создание он
 должен быть добавлен на ленту. Для этого его необходимо включить в какую-либо
 коллекцию с помощью метода Add,
 либо [Insert](IRibbonElementsCollection.Insert.htm).
 Метод Add добавляет элемент в
 конец коллекции. После добавления можно будет изменять параметры элемента
 управления.


	RButton: RibbonButton;

	//...

	Var

	    RPanel: IRibbonPanel;

	Begin

	    //...

	    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

	    RButton := New RibbonButton.Create;

	    RPanel.Elements.Add(RButton);

	    RButton.Text := ...

	    //...


При переносе элемента управления из одной коллекции в другую предварительно
 он должен быть удален из исходной коллекции.


	RButton: RibbonButton;

	//...

	Sub Sample;

	Var

	    RPanel1, RPanel2: IRibbonPanel;

	Begin

	    //...

	    RPanel1 := Ribbon1.ActiveCategory.Panels.Item(0);

	    RPanel2 := Ribbon1.ActiveCategory.Panels.Item(1);

	    //...

	    RPanel1.Elements.Remove(RButton);

	    RPanel2.Elements.Add(RButton);

	    //...


См. также:


[IRibbonElementsCollection](IRibbonElementsCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

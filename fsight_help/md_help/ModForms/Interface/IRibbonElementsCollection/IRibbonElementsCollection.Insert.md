# IRibbonElementsCollection.Insert

IRibbonElementsCollection.Insert
-


# IRibbonElementsCollection.Insert


## Синтаксис


Insert(Index: Integer; Value: [IBaseRibbonElement](../IBaseRibbonElement/IBaseRibbonElement.htm));


## Параметры


Index. Позиция, в которую осуществляется
 вставка.


Value. Элемент управления,
 который необходимо вставить в позицию Index.


## Описание


Метод Insert вставляет указанный
 элемент управления в указанную позицию в коллекции.


## Комментарии


Если элемент управления создается динамически, то после создание он
 должен быть добавлен на ленту. Для этого его необходимо включить в какую-либо
 коллекцию с помощью метода [Add](IRibbonElementsCollection.Add.htm),
 либо Insert. После этого можно
 будет изменять параметры элемента управления.


	RButton: RibbonButton;

	//...

	Var

	    RPanel: IRibbonPanel;

	    Elements: IRibbonElementsCollection;

	Begin

	    //...

	    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

	    Elements := RPanel.Elements;

	    RButton := New RibbonButton.Create;

	    Elements.Insert(Elements.Count, RButton);

	    RButton.Text := ...

	    //...


При перемещении элемента управления в рамках одной коллекции предварительно
 он должен быть удален из коллекции.


	Var

	    RPanel: IRibbonPanel;

	    Elements: IRibbonElementsCollection;

	    Element: IBaseRibbonElement;

	Begin

	    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

	    Elements := RPanel.Elements;

	    Element := Elements.Item(0);

	    Elements.Remove(Element);

	    Elements.Insert(Elements.Count, Element);


См. также:


[IRibbonElementsCollection](IRibbonElementsCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

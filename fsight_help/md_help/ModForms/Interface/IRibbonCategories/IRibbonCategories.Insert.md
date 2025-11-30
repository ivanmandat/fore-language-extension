# IRibbonCategories.Insert

IRibbonCategories.Insert
-


# IRibbonCategories.Insert


## Синтаксис


Insert(Index: Integer; Value: [IRibbonCategory](../IRibbonCategory/IRibbonCategory.htm));


## Параметры


Index. Позиция, в которую осуществляется вставка.


Value. Вкладка, которую необходимо вставить в позицию Index.


## Описание


Метод Insert вставляет указанную вкладку в указанную позицию в коллекции.


## Комментарии


Если вкладка создается динамически, то после создания она должна быть добавлена на ленту. Для этого ее необходимо включить в коллекцию с помощью метода [Add](IRibbonCategories.Add.htm), либо Insert. После этого можно будет изменять параметры вкладки. При перемещении вкладки предварительно она должен быть удалена из коллекции.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Ribbon с наименованием «Ribbon1». На ленте создано несколько вкладок.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RCategories: IRibbonCategories;

    RCategory: IRibbonCategory;

Begin

    RCategories := Ribbon1.Categories;

    RCategory := RCategories.Item(0);

    RCategories.Remove(RCategory);

    RCategories.Insert(RCategories.Count, RCategory);

End Sub Button1OnClick;


При нажатии на кнопку первая вкладка будет перемещена в конец ленты.


См. также:


[IRibbonCategories](IRibbonCategories.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

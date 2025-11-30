# IRibbon.ActiveCategory

IRibbon.ActiveCategory
-


# IRibbon.ActiveCategory


## Синтаксис


ActiveCategory: [IRibbonCategory](../IRibbonCategory/IRibbonCategory.htm);


## Описание


Свойство ActiveCategory определяет активную вкладку ленты.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Ribbon с наименованием «Ribbon1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Categories: IRibbonCategories;

Begin

    Categories := Ribbon1.Categories;

    Ribbon1.ActiveCategory := Categories.Item(Categories.Count - 1);

End Sub Button1OnClick;


При нажатии на кнопку в качестве активной вкладки ленты будет установлена последняя вкладка.


См. также:


[IRibbon](IRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

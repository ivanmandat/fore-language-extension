# IRibbonCategories.Add

IRibbonCategories.Add
-


# IRibbonCategories.Add


## Синтаксис


Add(Element: [IRibbonCategory](../IRibbonCategory/IRibbonCategory.htm));


## Параметры


Element. Вкладка, которую необходимо добавить в коллекцию вкладок компонента.


## Описание


Метод Add добавляет указанную вкладку в коллекцию вкладок ленты.


## Комментарии


Если вкладка создается динамически, то после создания она должна быть добавлена на ленту. Для этого ее необходимо включить в коллекцию с помощью метода Add, либо [Insert](IRibbonCategories.Insert.htm). Метод Add добавляет вкладку в конец коллекции. После добавления можно будет изменять параметры вкладки.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента Ribbon с наименованием «Ribbon1» и двух компонентов ImageList с наименованиями «SImage» и «LImage». В компоненты «SImage» и «LImage» загружены маленькие и большие изображения, которые будут использоваться элементами управления вкладки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RCategory: IRibbonCategory;

Begin

    RCategory := New RibbonCategory.Create;

    Ribbon1.Categories.Add(RCategory);

    RCategory.Text := "Редактирование";

    RCategory.LargeImages := LImage;

    RCategory.SmallImages := SImage;

    RCategory.Keys := "Р";

End Sub Button1OnClick;


При нажатии на кнопку будет создана новая вкладка ленты. Для вкладки будут настроены различные параметры.


См. также:


[IRibbonCategories](IRibbonCategories.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

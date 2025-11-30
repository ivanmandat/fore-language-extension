# IRibbonContexts.Add

IRibbonContexts.Add
-


# IRibbonContexts.Add


## Синтаксис


Add(Element: [IRibbonContext](../IRibbonContext/IRibbonContext.htm));


## Параметры


Element. Контекстная вкладка,
 которую необходимо добавить в коллекцию.


## Описание


Метод Add добавляет указанную
 контекстную вкладку в коллекцию.


## Комментарии


Если контекстная вкладка создается динамически, то после создания она
 должна быть добавлена на ленту. Для этого ее необходимо включить в коллекцию
 с помощью метода Add, либо [IRibbonContexts.Insert](IRibbonContexts.Insert.htm).
 Метод Add добавляет вкладку в
 конец коллекции. После добавления можно будет изменять параметры контекстной
 вкладки.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента Ribbon
 с наименованием «Ribbon1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RContext: IRibbonContext;

    ChildCategory: IRibbonCategory;

    ChildPanel: IRibbonPanel;

Begin

    RContext := New RibbonContext.Create;

    Ribbon1.Contexts.Add(RContext);

    RContext.Text := "Таблица";

    RContext.Visible := True;

    ChildCategory := RContext.Categories.Item(0);

    ChildCategory.Text := "Данные";

    ChildPanel := New RibbonPanel.Create;

    ChildCategory.Panels.Add(ChildPanel);

    ChildPanel.Text := "Буфер
 обмена";

End Sub Button1OnClick;


При нажатии на кнопку на ленте будет создана контекстная вкладка. В
 области дочерней вкладки, которая автоматически создается для контекстной
 вкладки, будет создана панель.


См. также:


[IRibbonContexts](IRibbonContexts.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IRibbonPanels.Add

IRibbonPanels.Add
-


# IRibbonPanels.Add


## Синтаксис


Add(Element: [IRibbonPanel](../IRibbonPanel/IRibbonPanel.htm));


## Параметры


Element. Панель, которую необходимо
 добавить в коллекцию панелей вкладки.


## Описание


Метод Add добавляет указанную
 панель в коллекцию панелей вкладки.


## Комментарии


Если панель создается динамически, то после создания она должна быть
 добавлена на ленту. Для этого ее необходимо включить в коллекцию с помощью
 метода Add, либо [Insert](IRibbonPanels.Insert.htm).
 Метод Add добавляет панель в конец
 коллекции. После добавления можно будет изменять параметры панели.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента Ribbon
 с наименованием «Ribbon1». На ленте компонента «Ribbon1» создана вкладка.
 В свойстве ленты [Images](../IRibbon/IRibbon.Images.htm) указан
 источник изображений.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RCategory: IRibbonCategory;

    RPanel: IRibbonPanel;

    LaunchButton, RButton1, RButton2: IRibbonButton;

    RSeparator: IBaseRibbonElement;

    ChildElements: IRibbonElementsCollection;

Begin

    RCategory := Ribbon1.ActiveCategory;

    RPanel := New RibbonPanel.Create;

    RCategory.Panels.Add(RPanel);

    RPanel.CenterColumnsVertically := True;

    RPanel.ImageIndex := 0;

    RPanel.Keys := "P";

    RPanel.LaunchButtonEnabled := True;

    LaunchButton := RPanel.LaunchButton;

    LaunchButton.Hint := "Настроить содержимое панели";

    LaunchButton.Name := "PanelParameters";

    ChildElements := RPanel.Elements;

    RButton1 := New RibbonButton.Create;

    RSeparator := New RibbonSeparator.Create;

    RButton2 := New RibbonButton.Create;

    ChildElements.Add(RButton1);

    ChildElements.Add(RSeparator);

    ChildElements.Add(RButton2);

    RButton1.Text := "Открыть";

    RButton2.Text := "Закрыть";

End Sub Button1OnClick;


При нажатии на кнопку в области активной вкладки будет создана новая
 панель. У панели будет доступна для использования кнопка запуска, также
 на панель будут добавлены две кнопки, между кнопками - разделитель.


См. также:


[IRibbonPanels](IRibbonPanels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

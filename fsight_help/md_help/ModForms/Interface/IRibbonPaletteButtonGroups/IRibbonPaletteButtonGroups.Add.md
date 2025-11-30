# IRibbonPaletteButtonGroups.Add

IRibbonPaletteButtonGroups.Add
-


# IRibbonPaletteButtonGroups.Add


## Синтаксис


Add(Value: [IRibbonPaletteButtonGroup](../IRibbonPaletteButtonGroup/IRibbonPaletteButtonGroup.htm));


## Параметры


Value. Группа графических кнопок,
 которую необходимо добавить в коллекцию.


## Описание


Метод Add добавляет в коллекцию
 указанную группу графических кнопок.


## Комментарии


Для создания новой группы графических кнопок инициализируйте объект
 класса [RibbonPaletteButtonGroup](../../Class/RibbonPaletteButtonGroup/RibbonPaletteButtonGroup.htm),
 настройте его свойства и добавьте в коллекцию с помощью метода Add.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента Ribbon с наименованием
 «Ribbon1» и компонента ImageList с наименованием «PaletteImg». На ленте
 компонента «Ribbon1» создана вкладка и панель. В «PaletteImg» загружен
 ряд изображений.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    PlButton: IRibbonPaletteButton;

    PlGroup: IRibbonPaletteButtonGroup;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    PlButton := New RibbonPaletteButton.Create;

    RPanel.Elements.Add(PlButton);

    PlButton.Text := "Создать";

    PlGroup := New RibbonPaletteButtonGroup.Create;

    PlGroup.Images := PaletteImg;

    PlGroup.Name := "Дополнительные объекты";

    PlButton.Groups.Add(PlGroup);

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создана кнопка для вызова
 комбинированного меню. В рамках меню будет создана группа графических
 кнопок, изображения которых будут загружены из компонента «PaletteImg».


См. также:


[IRibbonPaletteButtonGroups](IRibbonPaletteButtonGroups.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

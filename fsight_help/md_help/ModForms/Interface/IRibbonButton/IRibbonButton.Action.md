# IRibbonButton.Action

IRibbonButton.Action
-


# IRibbonButton.Action


## Синтаксис


Action: [IActionItem](../IActionItem/IActionItem.htm);


## Описание


Свойство Action определяет действие,
 ассоциируемое с кнопкой ленты.


## Комментарии


В качестве значения свойства укажите одно из действий, которое создано
 в коллекции компонента [ActionList](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/ActionList.htm).
 При установке действия значения всех свойств, которые заданы для кнопки,
 будут игнорироваться. Вместо них будут использоваться значения соответствующих
 свойств выбранного действия.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента Ribbon
 с наименованием «Ribbon1» и компонента ActionList,
 в котором создано действие с наименованием «ActionItem1». В ленте компонента
 «Ribbon1» создана вкладка и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Category: IRibbonCategory;

    RButton, SubButton1, SubButton2: IRibbonButton;

    SubItems: IRibbonElementsCollection;

Begin

    Self.BeginUpdate;

    Category := Ribbon1.ActiveCategory;

    RButton := New RibbonButton.Create;

    Category.Panels.Item(0).Elements.Add(RButton);

    RButton.ImageIndex := 0;

    RButton.LargeImageIndex := 0;

    RButton.Action := ActionItem1;

    RButton.Text := "Test";

    RButton.SplitButton := False;

    //Подэлементы

    SubButton1 := New RibbonButton.Create;

    SubButton2 := New RibbonButton.Create;

    SubItems := RButton.SubItems;

    SubItems.Add(SubButton1);

    SubItems.Add(SubButton2);

    SubButton1.Action := ActionItem1;

    SubButton2.Action := ActionItem1;

    SubButton1.Text := "Test 1";

    SubButton2.Text := "Test 2";

    Self.EndUpdate;

End Sub Button1OnClick;


При нажатии на кнопку на панели активной вкладки будет создана кнопка.
 Для кнопки будут настроены различные свойства, а также будут созданы два
 подэлемента.


См. также:


[IRibbonButton](IRibbonButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

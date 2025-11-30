# IRibbonComboBox.AutoComplete

IRibbonComboBox.AutoComplete
-


# IRibbonComboBox.AutoComplete


## Синтаксис


AutoComplete: Boolean;


## Описание


Свойство AutoComplete определяет
 признак использования автодополнения вводимого в компоненте текста.


## Комментарии


Свойство доступно для использования, если для компонента установлен
 стиль [DropDown](../../Enums/ComboboxStyle.htm).


Если свойству установлено значение True,
 то при вводе текста в редакторе компонента будет производиться поиск элементов,
 содержащих введенный текст и автоматическая подстановка первого найденного
 элемента. Если установлено значение False,
 то поиск элементов не производится.


По умолчанию свойству установлено значение False.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента Ribbon с наименованием
 Ribbon1. На ленте компонента Ribbon1 создана вкладка и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    RCombo: IRibbonComboBox;

    Items: IStringList;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    RCombo := New RibbonComboBox.Create;

    RPanel.Elements.Add(RCombo);

    RCombo.AutoComplete := True;

    RCombo.ImageIndex := 0;

    RCombo.InnerWidth := 150;

    RCombo.DropDownCount := 3;

    RCombo.MinDropDownWidth := 500;

    Items := RCombo.Items;

    Items.Add("Один");

    Items.Add("Два");

    Items.Add("Три");

    Items.Add("Четыре");

    Items.Add("Пять");

    RCombo.ResizeList := True;

    RCombo.SearchMode := True;

    RCombo.SearchPrompt := "Выберите количество";

    RCombo.Style := ComboboxStyle.DropDown;

    RCombo.TextAlign := TextAlignment.Center;

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создан комбинированный список.
 Для списка будут настроены основные параметры.


См. также:


[IRibbonComboBox](IRibbonComboBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

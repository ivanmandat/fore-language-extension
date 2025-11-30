# IRibbonCheckBox.Checked

IRibbonCheckBox.Checked
-


# IRibbonCheckBox.Checked


## Синтаксис


Checked: Boolean;


## Описание


Свойство Checked определяет
 состояние флажка элемента управления.


## Комментарии


Если свойству установлено значение True,
 то флажок отмечен, иначе не отмечен.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента Ribbon
 с наименованием «Ribbon1». На ленте компонента «Ribbon1» создана вкладка
 и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    RCheck: IRibbonCheckBox;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    RCheck := New RibbonCheckBox.Create;

    RPanel.Elements.Add(RCheck);

    RCheck.Text := "Автоматическое сохранение";

    RCheck.Checked := True;

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создан флажок. Для флажка
 будет задан текст, флажок будет отмечен.


См. также:


[IRibbonCheckBox](IRibbonCheckBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

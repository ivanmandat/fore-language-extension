# IPPSwitchButton.Down

IPPSwitchButton.Down
-


# IPPSwitchButton.Down


## Синтаксис


Down: Boolean;


## Описание


Свойство Down определяет в каком
 состоянии находится кнопка.


## Комментарии


Если свойству установлено значение True,
 то кнопка отображается в нажатом состоянии, при значении False
 - в ненажатом. По умолчанию свойству установлено значение False.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента PPButtonGroup с наименованием
 «PPButtonGroup1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    cSwitchNormal, cSwitchBold, cSwitchItalic: IPPSwitchButton;

Begin

    Self.BeginUpdate;

    cSwitchNormal := New PPSwitchButton.Create;

    cSwitchBold := New PPSwitchButton.Create;

    cSwitchItalic := New PPSwitchButton.Create;

    PPButtonGroup1.Add(cSwitchNormal);

    PPButtonGroup1.Add(cSwitchBold);

    PPButtonGroup1.Add(cSwitchItalic);

    cSwitchNormal.Text := "Normal";

    cSwitchBold.Text := "Bold";

    cSwitchItalic.Text := "Italic";

    cSwitchNormal.Down := True;

    Self.EndUpdate;

End Sub Button1OnClick;


При нажатии на кнопку в компоненте «PPButtonGroup1» будет создана группа
 из трех кнопок. По умолчанию будет нажата кнопка с текстом «Normal».


См. также:


[IPPSwitchButton](IPPSwitchButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

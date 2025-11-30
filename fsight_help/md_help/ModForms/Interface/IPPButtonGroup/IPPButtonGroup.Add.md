# IPPButtonGroup.Add

IPPButtonGroup.Add
-


# IPPButtonGroup.Add


## Синтаксис


Add(pButton: [IPPButton](../IPPButton/IPPButton.htm));


## Параметры


pButton.
 Кнопка, которую необходимо включить в группу.


## Описание


Метод Add добавляет указанную
 кнопку в группу.


## Комментарии


В качестве значения параметра pButton
 необходимо указать кнопку, реализуемую классом [PPSwitchButton](../../Class/PPSwitchButton/PPSwitchButton.htm).
 Кнопка добавляется в конец всей группы. При добавлении кнопки в группу
 в качестве родительского компонента для нее автоматически будет установлен
 текущий компонент PPButtonGroup.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на нем компонента PPButtonGroup
 с наименованием «PPButtonGroup1».


			Class SampleForm: Form

    PPButtonGroup1: PPButtonGroup;


    Sub PPBUTTONGROUP_SAMPLEFormOnCreate(Sender: Object; Args: IEventArgs);

    Var

        b1, b2, b3: PPSwitchButton;

    Begin

        Self.BeginUpdate;

        b1 := New PPSwitchButton.Create;

        b2 := New PPSwitchButton.Create;

        b3 := New PPSwitchButton.Create;

        b1.Name := "b1";

        b2.Name := "b2";

        b3.Name := "b3";

        b1.Text := "Normal";

        b2.Text := "Bold";

        b3.Text := "Italic";

        b1.OnClick := BtnOnClick;

        b2.OnClick := BtnOnClick;

        b3.OnClick := BtnOnClick;

        b1.Down := True;

        PPButtonGroup1.Add(b1);

        PPButtonGroup1.Add(b2);

        PPButtonGroup1.Add(b3);

        Self.EndUpdate;

    End Sub PPBUTTONGROUP_SAMPLEFormOnCreate;


    Sub BtnOnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        Select Case (Sender As IControl).Name

            Case "b1": //Обработка действия для кнопки "b1"

            Case "b2": //Обработка действия для кнопки "b2"

            Case "b3": //Обработка действия для кнопки "b3"

        End Select;

    End Sub BtnOnClick;


End Class SampleForm;


При запуске формы динамически будут созданы и добавлены в группу компонента
 «PPButtonGroup1» три кнопки PPButton. Для всех кнопок будет установлен
 обработчик событие OnClick, в котором по имени кнопки будет определяться,
 какая их кнопок была нажата.


См. также:


[IPPButtonGroup](IPPButtonGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IRibbonRadioButton.Checked

IRibbonRadioButton.Checked
-


# IRibbonRadioButton.Checked


## Синтаксис


Checked: Boolean;


## Описание


Свойство Checked определяет состояние переключателя элемента управления.


## Комментарии


Если свойству установлено значение True, то текущей переключатель выбран.


Если переключатель выбран, то у всех остальных переключателей, входящих в [одну группу](IRibbonRadioButton.GroupIndex.htm), выбор будет сброшен.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Ribbon с наименованием «Ribbon1». На ленте компонента «Ribbon1» создана вкладка и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    RGroup1, RGroup2: IRibbonGroup;

    RRadioBtn1, RRadioBtn2, RRadioBtn3, RRadioBtn4: IRibbonRadioButton;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    //Группы для переключателей
    RGroup1 := New RibbonGroup.Create;

    RGroup2 := New RibbonGroup.Create;

    RPanel.Elements.Add(RGroup1);

    RPanel.Elements.Add(RGroup2);

    //Переключатели
    RRadioBtn1 := New RibbonRadioButton.Create;

    RRadioBtn2 := New RibbonRadioButton.Create;

    RRadioBtn3 := New RibbonRadioButton.Create;

    RRadioBtn4 := New RibbonRadioButton.Create;

    RGroup1.Elements.Add(RRadioBtn1);

    RGroup1.Elements.Add(RRadioBtn2);

    RGroup2.Elements.Add(RRadioBtn3);

    RGroup2.Elements.Add(RRadioBtn4);

    //Параметры переключателей
    RRadioBtn1.Text := "Вариант 1";

    RRadioBtn1.Checked := True;

    RRadioBtn2.Text := "Вариант 2";

    RRadioBtn3.Text := "Фактор 1";

    RRadioBtn3.GroupIndex := 1;

    RRadioBtn3.Checked := True;

    RRadioBtn4.Text := "Фактор 2";

    RRadioBtn4.GroupIndex := 1;

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создано две группы переключателей. Для каждого переключателя будет определен текст, первый переключатель каждой группы будет выбран.


См. также:


[IRibbonRadioButton](IRibbonRadioButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

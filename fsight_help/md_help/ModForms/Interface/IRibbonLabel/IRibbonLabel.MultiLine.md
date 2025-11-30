# IRibbonLabel.MultiLine

IRibbonLabel.MultiLine
-


# IRibbonLabel.MultiLine


## Синтаксис


MultiLine: Boolean;


## Описание


Свойство MultiLine определяет признак расположения текста в несколько строк.


## Комментарии


Если свойству установлено значение True, то текст элемента управления будет разбит на несколько строк. Разбиение производится по символам пробела в тексте. Размер строк определяется компонентом [Ribbon](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/Ribbon.htm) автоматически.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Ribbon с наименованием «Ribbon1». На ленте компонента «Ribbon1» создана вкладка и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    RLabel: IRibbonLabel;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    RLabel := New RibbonLabel.Create;

    RPanel.Elements.Add(RLabel);

    RLabel.MultiLine := True;

    RLabel.Text := "На данной вкладке расположены элементы управления для ...";

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создан статический текст. Данный текст будет информировать о назначении вкладки.


См. также:


[IRibbonLabel](IRibbonLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

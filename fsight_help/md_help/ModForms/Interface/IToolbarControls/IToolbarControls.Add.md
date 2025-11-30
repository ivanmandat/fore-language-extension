# IToolbarControls.Add

IToolbarControls.Add
-


# IToolbarControls.Add


## Синтаксис


Add(Value: [IComponent](../IComponent/IComponent.htm));


## Параметры


Value. Компонент, который необходимо
 добавить на панель инструментов.


## Описание


Метод Add осуществляет добавление
 компонента на панель инструментов.


## Комментарии


На панели инструментов могут располагаться компоненты [ToolbarButton](../../Class/ToolbarButton/ToolbarButton.htm)
 и [ToolbarComboBox](../../Class/ToolbarComboBox/ToolbarComboBox.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента Toolbar с наименованием
 Toolbar1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    BarButton: IToolbarButton;

Begin

    BarButton := New ToolbarButton.Create;

    BarButton.Text := "Новая кнопка";

    Toolbar1.Controls.Add(BarButton);

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку на панели инструментов
 будет создана новая кнопка.


См. также:


[IToolbarControls](IToolbarControls.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

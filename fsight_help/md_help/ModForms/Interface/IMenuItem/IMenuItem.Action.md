# IMenuItem.Action

IMenuItem.Action
-


# IMenuItem.Action


## Синтаксис


Action: [IActionItem](../IActionItem/IActionItem.htm);


## Описание


Свойство Action определяет действие,
 ассоциируемое с пунктом меню.


## Комментарии


В качестве значения свойства укажите одно из действий, которое создано
 в коллекции компонента [ActionList](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/ActionList.htm).
 При установке действия значения всех свойств, которые заданы для пункта
 меню, будут игнорироваться. Вместо них будут использоваться значения соответствующих
 свойств выбранного действия.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента MainMenu с наименованием
 «MainMenu1», компонента Toolbar с наименованием «Toolbar1» и компонента
 ActionList с наименованием «ActionList1».


			Class TESTForm: Form

    MainMenu1: MainMenu;

    ActionList1: ActionList;

    Toolbar1: Toolbar;

    Button1: Button;

    MenuItem1, MenuItem2: MenuItem;

    TButton1, TButton2: ToolbarButton;

    Action1, Action2: ActionItem;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        //Создание пунктов меню

        MenuItem1 := New MenuItem.Create;

        MenuItem2 := New MenuItem.Create;

        MainMenu1.Items.Add(MenuItem1);

        MainMenu1.Items.Add(MenuItem2);

        //Создание кнопок на панели инструментов

        TButton1 := New ToolbarButton.Create;

        TButton2 := New ToolbarButton.Create;

        Toolbar1.Controls.Add(TButton1);

        Toolbar1.Controls.Add(TButton2);

        //Создание действий и их подключение к пунктам меню/кнопкам

        Action1 := New ActionItem.Create;

        Action1.Caption := "Открыть";

        Action1.OnExecute := Action1OnExecute;

        Action2 := New ActionItem.Create;

        Action2.Caption := "Закрыть";

        Action2.OnExecute := Action2OnExecute;

        ActionList1.AddAction(Action1);

        ActionList1.AddAction(Action2);

        MenuItem1.Action := Action1;

        MenuItem2.Action := Action2;

        TButton1.Action := Action1;

        TButton2.Action := Action2;

    End Sub Button1OnClick;


    Sub Action1OnExecute(Sender: Object; Args: IEventArgs);

    Begin

        //Обработчик действия Action1

    End Sub Action1OnExecute;


    Sub Action2OnExecute(Sender: Object; Args: IEventArgs);

    Begin

        //Обработчик действия Action2

    End Sub Action2OnExecute;

End Class TESTForm;


При нажатии на кнопку будут выполнены следующие действия:


	- В меню формы созданы два пункта меню;


	- На панели инструментов созданы две кнопки;


	- В списке действий компонента «ActionList1» созданы два действия,
	 для действий определено базовое свойство Caption и указаны различные
	 обработчики события OnExecute.


Созданные действия будут назначены для пунктов меню и кнопок панели
 инструментов. Если выбрать пункт меню или кнопку, имеющие одинаковый текст,
 то будет выполнено одинаковое действие.


См. также:


[IMenuItem](IMenuItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

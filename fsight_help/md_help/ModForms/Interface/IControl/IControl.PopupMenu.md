# IControl.PopupMenu

IControl.PopupMenu
-


# IControl.PopupMenu


## Синтаксис


PopupMenu: [IPopupMenu](../IPopupMenu/IPopupMenu.htm);


## Описание


Свойство PopupMenu определяет
 контекстное меню, которое будет появляться при щелчке правой кнопкой мыши
 на компоненте.


## Комментарии


Если в реализацию компонента заложено какое-либо системное контекстное
 меню, то при установке значения в свойстве PopupMenu
 системное контекстное меню будет заменено собственным контекстным меню.


В список допустимых значений входят компоненты [PopupMenu](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/PopupMenu.htm),
 которые добавлены на форму или созданные динамически в прикладном коде.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента PopupMenu с наименованием «PopupMenu1», ReportBox с
 наименованием «ReportBox1» и компонента UiReport с наименованием «UiReport1».
 «UiReport1» является источником данных для «ReportBox1»


			Class TESTForm: Form

    PopupMenu1: PopupMenu;

    UiReport1: UiReport;

    ReportBox1: ReportBox;

    TView: ITabView;


    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

    Var

        Items: IMenuItems;

        Item: MenuItem;

    Begin

        TView := (ReportBox1.Report.Report.ActiveSheet As IPrxTable).TabSheet.View;

        //Создание пункта меню

        Items := PopupMenu1.Items;

        Items.Clear;

        Item := New MenuItem.Create;

        Item.Text := "Формат";

        Item.OnClick := MenuItem1OnClick;

        Items.Add(Item);

        //Установка контекстного меню для компонента ReportBox

        ReportBox1.PopupMenu := PopupMenu1;

    End Sub TESTFormOnCreate;


    Sub MenuItem1OnClick(Sender: Object; Args: IEventArgs);

    Begin

        TView.ShowFormatDialogEx(Self As IWin32Window);

    End Sub MenuItem1OnClick;

End Class TESTForm;


При выполнении примера для компонента «ReportBox1» будет установлено
 контекстное меню, которое будет доступно в области листов отчета. В меню
 будет доступна одна команда - Формат. При выполнении команды будет вызываться
 окно формата для текущего выделенного диапазона ячеек.


См.также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

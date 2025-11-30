# IUndoRedo.Enabled

IUndoRedo.Enabled
-


# IUndoRedo.Enabled


## Синтаксис


Enabled: Boolean;


## Описание


Свойство Enabled определяет
 доступность стека изменений (отмены/повтора) для пользователя.


## Комментарии


При значении False стек отмены
 не используется. Для задействования стека изменений установите в свойстве
 Enabled значение True.
 После этого все действия, производимые пользователем, будут сохраняться
 в стеке и при необходимости могут быть отменены/повторены. Количество
 действий, которые могут быть сохранены в стеке, ограничивается количеством,
 заданным в свойстве [IUndoRedo.Limit](IUndoRedo.Limit.htm).


Для отмены произведенных действий используйте метод [IUndoRedo.Undo](IUndoRedo.Undo.htm),
 для повтора отмененных действий - метод [IUndoRedo.Redo](IUndoRedo.Redo.htm).


При изменении значения данного свойства автоматически изменится значение
 свойства Enable в стеках изменений
 всех дочерних объектов.


## Пример


Для выполнения примера предполагается наличие на форме компонентов ReportBox,
 UiReport, Toolbar с наименованиями ReportBox1, UiReport1, Toolbar1 соответственно.
 Панель инструментов Toolbar1 содержит пять кнопок. Для каждой кнопки добавлены
 обработчики событий. Компонент UiReport является источником данных для
 ReportBox.


	Class SAMPLEForm: Form

	    ReportBox1: ReportBox;

	    UiReport1: UiReport;

	    Toolbar1: Toolbar;

	    ToolbarButton1: ToolbarButton;

	    ToolbarButton2: ToolbarButton;

	    ToolbarButton3: ToolbarButton;

	    ToolbarButton4: ToolbarButton;

	    ToolbarButton5: ToolbarButton;

	    UnRed: IUndoRedo;


	    Sub SAMPLEFormOnCreate(Sender: Object; Args: IEventArgs);

	    Var

	        MB: IMetabase;

	        Report: IPrxReport;

	    Begin

	        MB := MetabaseClass.Active;

	        Report := MB.ItemById("Report_1").Edit As IPrxReport;

	        UiReport1.Instance := Report;

	        UnRed := Report.UndoRedo;

	        UnRed.Enabled := True;

	        UnRed.Limit := 10;

	    End Sub SAMPLEFormOnCreate;


	    Sub ToolbarButton1OnClick(Sender: Object; Args: IEventArgs);

	    Begin

	        If UnRed.UndoCount > 0 Then

	            UnRed.Undo;

	        End If;

	    End Sub ToolbarButton1OnClick;


	    Sub ToolbarButton2OnClick(Sender: Object; Args: IEventArgs);

	    Begin

	        If UnRed.RedoCount > 0 Then

	            UnRed.Redo;

	        End If;

	    End Sub ToolbarButton2OnClick;


	    Sub ToolbarButton3OnClick(Sender: Object; Args: IEventArgs);

	    Begin

	        UnRed.Flush;

	    End Sub ToolbarButton3OnClick;


	    Sub ToolbarButton4OnClick(Sender: Object; Args: IEventArgs);

	    Begin

	        If UnRed.UndoCount > 0 Then

	            text := UnRed.UndoState(UnRed.UndoCount - 1).Action;

	        End If;

	    End Sub ToolbarButton4OnClick;


	    Sub ToolbarButton5OnClick(Sender: Object; Args: IEventArgs);

	    Begin

	        If UnRed.RedoCount > 0 Then

	            text := UnRed.RedoState(UnRed.RedoCount - 1).Action;

	        End If;

	    End Sub ToolbarButton5OnClick;


	End Class SAMPLEForm;


После выполнения примера при нажатии кнопки:


	- Button1 будет произведена отмена последнего выполненного действия;


	- Button2 будет произведен повтор отмененного действия;


	- Button3 будет произведена очистка стека изменений;


	- Button4 в текст формы будет выводиться описание последнего действия,
	 хранящегося в стеке отмены;


	- Button5 в текст формы будет выводиться описание последнего действия,
	 хранящегося в стеке повтора.


См. также:


[IUndoRedo](IUndoRedo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

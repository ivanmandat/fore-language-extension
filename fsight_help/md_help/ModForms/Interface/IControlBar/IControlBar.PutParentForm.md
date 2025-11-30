# IControlBar.PutParentForm

IControlBar.PutParentForm
-


# IControlBar.PutParentForm


## Синтаксис


PutParentForm(Parent: [IFormControl](../IFormControl/IFormControl.htm));


## Параметры


Parent. Родительская форма.


## Описание


Метод PutParentForm устанавливает
 родительскую форму для всплывающей панели. Метод используется при динамическом
 создании панелей.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием Button1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    NewControlBar: ControlBar;

	Begin

	    NewControlBar := New ControlBar.Create;

	    NewControlBar.PutParentForm(Self);

	    NewControlBar.MetabaseObject := "Form_From_Panel";

	    NewControlBar.AllowDocking := True;

	    NewControlBar.AllowFloat := True;

	    NewControlBar.AutoHide := True;

	    NewControlBar.Visible := True;

	    NewControlBar.Text := "New ControlBar";

	    NewControlBar.Float;

	End Sub Button1OnClick;


При нажатии на кнопку будет создана всплывающая панель. В качестве родительской
 формы будет установлена текущая форма.


См. также:


[IControlBar](IControlBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

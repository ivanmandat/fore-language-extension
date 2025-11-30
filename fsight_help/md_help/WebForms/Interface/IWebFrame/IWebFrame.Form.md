# IWebFrame.Form

IWebFrame.Form
-


# IWebFrame.Form


## Синтаксис


Form: [IWebForm](KeSom.chm::/Interface/IWebForm/IWebForm.htm);


## Описание


Свойство Form возвращает веб-форму
 репозитория, которая отображается в компоненте.


## Комментарии


Свойство позволяет получить доступ к веб-форме, отображаемой в компоненте,
 и взаимодействовать с ней посредством отправки каких-либо команд.


## Пример


Для выполнения примера в репозитории предполагается наличие двух веб-форм.
 На первой веб-форме расположены компоненты Button и Frame. Ключ второй
 веб-формы задан в качестве значения свойства mobj у компонента Frame.
 На второй веб-форме могут располагаться любые компоненты, также для неё
 задан обработчик события OnCommand, код которого представлен ниже.


	// Код первой формы

	Class ONEWebForm: WebForm

	    Button1: WebButton;

	    Frame1: WebFrame;


	    Sub Button1OnClick;

	    Begin

	        Self.Text := Frame1.Form.SendCommand("command1");

	    End Sub Button1OnClick;

	End Class ONEWebForm;


	// Код второй формы

	Class TWOWebForm: WebForm

	    Sub TWOWebFormOnCommand(Args: IWebCommandEventArgs);

	    Begin

	        If Args.Command = "command1" Then

	            Args.Result := "1";

	        Elseif args.Command = "command2" Then

	            Args.Result := "2";

	        Else

	            Args.Result := "0";

	        End If;

	    End Sub TWOWebFormOnCommand;

	End Class TWOWebForm;


После запуска первой веб-формы содержимое второй веб-формы будет отображено
 в компоненте Frame. При нажатии на кнопку второй веб-форме отправляется
 команда. Результат выполнения команды будет выведен в заголовок первой
 веб-формы.


См. также:


[IWebFrame](IWebFrame.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

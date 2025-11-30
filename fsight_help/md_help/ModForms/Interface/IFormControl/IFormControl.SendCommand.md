# IFormControl.SendCommand

IFormControl.SendCommand
-


# IFormControl.SendCommand


## Синтаксис


SendCommand(Command: String; [Argument: Variant
 = Null]): Variant;


## Параметры


Command. Наименование команды,
 которая будет отправлена форме.


Argument. Аргумент команды.


## Описание


Метод SendCommand позволяет
 послать форме команду и получить результат её выполнения.


## Комментарии


Обработка команд осуществляется в событии [Form.OnCommand](../../Class/Form/Form.OnCommand.htm).


## Пример


Для выполнения примера предполагается наличие двух форм:


	- Форма с идентификатором «SOURCEFORM», на форме расположена кнопка
	 «Button1».


	- Форма с идентификатором «DESTINATIONFORM».


Для формы «SOURCEFORM» в инспекторе сборок необходимо добавить ссылку
 на форму «DESTINATIONFORM». Для класса формы «DESTINATIONFORM» необходимо
 добавить модификатор доступа Public.


Для кнопки «Button1» добавьте обработчик нажатия со следующим кодом:


	Class SOURCEFORMForm: Form

	    Button1: Button;

	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        DestForm: DESTINATIONFORMForm;

	    Begin

	        DestForm := New DESTINATIONFORMForm.CreateForm;

	        Result := DestForm.SendCommand("Квадрат", 20);

	        Self.Text := Result;

	    End Sub Button1OnClick;

	End Class SOURCEFORMForm;


Для формы «DESTINATIONFORM» добавьте обработчик события «OnCommand»
 со следующим кодом:


	Public Class DESTINATIONFORMForm: Form

	    Sub DESTINATIONFORMFormOnCommand(Sender: Object; Args: ICommandEventArgs);

	    Begin

	        If Args.Command = "Разность" Then

	            Args.Result := Args.Argument - Args.Argument;

	        Elseif Args.Command = "Сумма" Then

	            Args.Result := Args.Argument + Args.Argument;

	        Elseif Args.Command = "Квадрат" Then

	            Args.Result := Args.Argument * Args.Argument;

	        End If;

	    End Sub DESTINATIONFORMFormOnCommand;

	End Class DESTINATIONFORMForm;


При нажатии на кнопку «Button1» создается экземпляр формы «DESTINATIONFORM»
 и ему отправляется команда «Квадрат» с аргументом «20». Результат выполнения
 команды будет выведен в заголовок формы «SOURCEFORM».


См. также:


[IFormControl](IFormControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

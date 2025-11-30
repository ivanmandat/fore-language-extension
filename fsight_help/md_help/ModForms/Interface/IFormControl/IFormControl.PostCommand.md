# IFormControl.PostCommand

IFormControl.PostCommand
-


# IFormControl.PostCommand


## Синтаксис


PostCommand(Command: String; [Argument: Variant
 = Null]);


## Параметры


Command. Наименование команды,
 которая будет отправлена форме.


Argument. Аргумент команды.


## Описание


Метод PostCommand позволяет
 послать форме команду.


## Комментарии


Обработка команд осуществляется в событии [Form.OnCommand](../../Class/Form/Form.OnCommand.htm).


Примечание.
 Данный метод выполняется только после всех команд в отдельно взятой процедуре.


## Пример


Для выполнения примера предполагается наличие двух форм:


	- Форма с идентификатором «SOURCEFORM», на форме расположена кнопка
	 «Button1».


	- Форма с идентификатором «DESTINATIONFORM», на форме расположен
	 компонент «Label1».


Для формы «SOURCEFORM» в инспекторе сборок необходимо добавить ссылку
 на форму «DESTINATIONFORM». Для класса формы «DESTINATIONFORM» и описания
 компонента «Label1» необходимо добавить модификатор доступа Public.


Для кнопки «Button1» добавьте обработчик события «OnClick» со следующим
 кодом:


	Class SOURCEFORMForm: Form

	    Button1: Button;

	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        DestForm: DESTINATIONFORMForm;

	    Begin

	        DestForm := New DESTINATIONFORMForm.CreateForm;

	        DestForm.PostCommand("ChangeLabel", "LastName");

	        DestForm.Label1.Text := "NewName";

	        DestForm.Visible := True;

	    End Sub Button1OnClick;

	End Class SOURCEFORMForm;


Для формы «DESTINATIONFORM» добавьте обработчик события «OnCommand»
 со следующим кодом:


	Public Class DESTINATIONFORMForm: Form

	    Public Label1: Label;

	    Sub DESTINATIONFORMFormOnCommand(Sender: Object; Args: ICommandEventArgs);

	    Begin

	        If Args.Command = "ChangeLabel" Then

	            Label1.Text := Args.Argument As String;

	        End If;

	    End Sub DESTINATIONFORMFormOnCommand;

	End Class DESTINATIONFORMForm;


При нажатии на кнопку «Button1» создается экземпляр формы «DESTINATIONFORM»
 и ему отправляется команда «ChangeLabel» с аргументом «LastName». Эта
 команда должна будет переименовать текст компонента «Label1» в «LastName».
 Следующей строкой текст «Label1» должен измениться на "NewName",
 но, так как метод «PostCommand» выполняется после всех остальных команд,
 то текст компонента «Label1» будет равен «LastName».


См. также:


[IFormControl](IFormControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ICommandEventArgs.Argument

ICommandEventArgs.Argument
-


# ICommandEventArgs.Argument


## Синтаксис


Argument: Variant;


## Описание


Свойство Argument возвращает
 значение аргумента команды, посланной форме.


## Пример


Допустим, нам надо отправить команду из формы SOURCEFORM форме DESTINATIONFORM.
 Для этого в форме SOURCEFORM в инспекторе сборок необходимо добавить ссылку
 на форму DESTINATIONFORM. Затем в описании класса формы DESTINATIONFORM
 необходимо добавить слово Public.


После всех действий текст макроса для формы SOURCEFORM будет выглядеть
 следующим образом:


	Class SOURCEFORMForm: Form

	    Button1: Button;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        DestForm: DESTINATIONFORMForm;

	        Res: string;

	    Begin

	        DestForm := New DESTINATIONFORMform.CreateForm;

	        Res := DestForm.SendCommand("Квадрат", 21) As String;

	        WinApplication.InformationBox(Res);

	    End Sub Button1OnClick;

	End Class SOURCEFORMForm;


Для формы DESTINATIONFORM:


	Public Class DESTINATIONFORMForm: Form

	    Sub DESTINATIONFORMFormOnCommand(Sender: Object; Args: ICommandEventArgs);

	    Begin

	        If Args.Command = "Сумма" Then

	            Args.Result := Args.Argument + Args.Argument;

	        Elseif Args.Command = "Квадрат" Then

	            Args.Result := Args.Argument * Args.Argument;

	        Elseif Args.Command = "Разность" Then

	            Args.Result := Args.Argument - Args.Argument;

	        End If;

	    End Sub DESTINATIONFORMFormOnCommand;

	End Class DESTINATIONFORMForm;


После нажатия на кнопку Button1 на форме SOURCEFORM произойдет посылка
 значения 21 форме DESTINATIONFORM, которая в свою очередь возведет это
 значение в квадрат и вернет результат.


См.также:


[ICommandEventArgs](ICommandEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

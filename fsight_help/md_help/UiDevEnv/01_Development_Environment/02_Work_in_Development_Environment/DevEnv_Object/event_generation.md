# Генерация событий

Генерация событий
-


# Генерация событий


Вызов события обеспечивается классом, предоставляющим параметры события,
 и классом, вызывающим событие. Для ручного вызова события сначала следует
 создать класс, реализующий аргументы этого события, а затем вызвать само
 событие. Необходимо помнить, что для вызываемого события должен быть описан
 обработчик.


## Пример


Для выполнения примера разместите на форме компонент [Button](../../../02_Components_constructor_forms/01_Standart_Components/Button.htm)
 с наименованием «Button1».


	Sub UserProc;

	Var

	    Argument: CommandEventArgs;

	Begin

	    Argument := New CommandEventArgs.Create("Квадрат", 3, Null);

	    Self.OnCommand(Self, Argument);

	    Debug.WriteLine(Argument.Result);

	End Sub UserProc;


После выполнения процедуры UserProc
 для текущей формы будет сгенерирована обработка события [OnCommand](ModForms.chm::/Class/Form/Form.OnCommand.htm).


	Sub UserProc1;

	Var

	    Argument: MouseEventArgs;

	Begin

	    Argument := New MouseEventArgs.CreateArgs(ShiftState.Left, Self.ScreenToClient(0, 0));

	    Button1.OnClick(Button1, Argument);

	End Sub UserProc1;


После выполнения процедуры UserProc1
 для компонента Button будет сгенерирована
 обработка события [OnClick](ModForms.chm::/Interface/IControl/IControl.OnClick.htm).


См. также:


[Генерация
 событий](event_generation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

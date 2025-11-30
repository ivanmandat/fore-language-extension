# Ошибка: Определены не все обязательные индексы при чтении свойства &lt;имяСвойства&gt;

Ошибка: Определены не все обязательные индексы при чтении свойства <имяСвойства>
-


# Определены не все обязательные индексы при чтении свойства <имяСвойства>


## Описание


При чтении значения свойства были пропущены значения одного или более
 обязательного индекса.


## Способ устранения


Установите значения всех обязательных индексов свойства.


## Пример


	Class TestClass: Object

	    s: Array Of String;


	    Public Constructor Create(Length: Integer);

	    Begin

	        s := New String[Length]

	    End Constructor Create;


	    Public Property Item(i: Integer): String

	        Get

	        Begin

	            Return s[i];

	        End Get

	        Set

	        Begin

	            s[i] := Value;

	        End Set

	    End Property Item;


	End Class TestClass;


	Sub UserProc;

	Var

	    Obj: TestClass;

	    s: String;

	Begin

	    Obj := New TestClass.Create(4);

	    s := Obj.Item;

	End Sub UserProc;


При компиляции указанного кода на строке «s := Obj.Item;»
 будет сгенерирована ошибка «Определены не все обязательные индексы при
 чтении свойства Item». Для разрешения ошибки необходимо указать значение
 обязательного индекса «i».


См. также:


[Ошибки компилятора](compiler_errors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Ошибка: Определены не все обязательные индексы при записи свойства &lt;имяСвойства&gt;

Ошибка: Определены не все обязательные индексы при записи свойства <имяСвойства>
-


# Определены не все обязательные индексы при записи свойства <имяСвойства>


## Описание


При установке значения свойству были пропущены значения одного или более
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

	Begin

	    Obj := New TestClass.Create(4);

	    Obj.Item := 1;

	End Sub UserProc;


При компиляции указанного кода на строке «Obj.Item := 1;»
 будет сгенерирована ошибка «Определены не все обязательные индексы при
 записи свойства Item». Для разрешения ошибки необходимо указать значение
 обязательного индекса «i».


См. также:


[Ошибки компилятора](compiler_errors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

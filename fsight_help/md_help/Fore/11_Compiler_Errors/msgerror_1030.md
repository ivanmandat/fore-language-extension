# Ошибка: В классе может быть только одно свойство 'по умолчанию'

Ошибка: В классе может быть только одно свойство 'по умолчанию'
-


# В классе может быть только одно свойство 'по умолчанию'


## Описание


В классе встретилось более одного описания свойств с директивой Default.


## Способ устранения


Измените описания свойств таким образом, чтобы директива Default присутствовала
 в описании только одного свойства.


## Пример


	Class TestClass: Object

	    d: Array Of Double;

	    s: Array Of String;


	    Property Item(i: Integer): Double

	        Get

	        Begin

	            Return d[i];

	        End Get

	        Set

	        Begin

	            d[i] := Value;

	        End Set

	    End Property Item; Default;


	    Property Text(i: Integer): Double

	        Get

	        Begin

	            Return s[i];

	        End Get

	        Set

	        Begin

	            s[i] := Value;

	        End Set

	    End Property Text; Default;


	End Class TestClass;


При компиляции указанного кода будет сгенерирована ошибка «В классе
 может быть только одно свойство 'по умолчанию'». Для разрешения ошибки
 необходимо удалить директиву Default из описания свойства «Item» либо
 «Text».


См. также:


[Ошибки компилятора](compiler_errors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Ошибка: Делегат ссылается на метод, не принадлежащий классу

Ошибка: Делегат ссылается на метод, не принадлежащий классу
-


# Делегат ссылается на метод, не принадлежащий классу


## Описание


Делегат ссылается на метод, не являющийся членом класса.


## Способ устранения


Перенести описание метода под класс и изменить ссылку на метод с учётом
 класса.


## Пример


	Delegate Delegate3(index: integer);


	Sub Main;

	Var

	    cl1: Class1;

	Begin

	    cl1 := New Class1.Create;

	    cl1.DelegateEvent := cl1.DelegateFunc1;

	    cl1.DelegateEvent(1);

	    cl1.DelegateEvent := DelegateFunc2;

	    cl1.DelegateEvent(2);

	End Sub Main;


	Public Class Class1: Object

	    Friend Event DelegateEvent: Delegate3;

	    Public Sub DelegateFunc1(index: integer);

	    Begin

	        Debug.WriteLine("DelegateFunc1  из Class1 " + index.ToString)

	    End Sub DelegateFunc1;

	End Class Class1;


	Public Sub DelegateFunc2(index: integer);

	Begin

	    Debug.WriteLine("DelegateFunc2 " + index.ToString)

	End Sub DelegateFunc2;


При компиляции указанного кода на строке «cl1.DelegateEvent := DelegateFunc2;»
 будет сгенерирована ошибка «Делегат ссылается на метод, не принадлежащий
 классу». Для разрешения ошибки необходимо перенести описание метода DelegateFunc2 под класс Class1
 и заменить строку «cl1.DelegateEvent := DelegateFunc2;» на «cl1.DelegateEvent
 := cl1.DelegateFunc2;».


См. также:


[Ошибки компилятора](compiler_errors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

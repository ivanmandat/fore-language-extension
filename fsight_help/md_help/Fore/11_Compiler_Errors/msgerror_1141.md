# Ошибка: Определение процедуры в классе отличается от определения события в классе

Ошибка: Определение процедуры в классе отличается от определения события в классе
-


# Определение процедуры <процедура> в классе <класс1> отличается
 от определения события в классе <класс2>


## Описание


Сигнатура процедуры, которая используется для обработки события отличается
 от сигнатуры, установленной в делегате пользовательского события.


## Способ устранения


Измените сигнатуру процедуры, либо делегата события.


## Пример


	Delegate MyEvent(a: Integer; b: String);


	Class EventClass: Object

	    Friend Event OnMyEvent: MyEvent;


	    Sub MyEvent(Sender: Object; Args: IEventArgs);

	    Var

	        a: Integer;

	        b: String;

	    Begin

	        If OnMyEvent <> Null Then

	            OnMyEvent(a, b);

	        End If;

	    End Sub MyEvent;


	End Class EventClass;


	Class TestForm: Form

	    Obj: EventClass;


	    Sub TestFormOnCreate(Sender: Object; Args: IEventArgs);

	    Begin

	        Obj := New EventClass.Create;

	        //Подписка на событие

	        Obj.OnMyEvent := HandleEvent;

	    End Sub TestFormOnCreate;


	    Sub HandleEvent(a: Integer; b: Double);

	    Begin

	        //Обработка события

	    End Sub HandleEvent;

	End Class TestForm;


При компиляции указанного кода будет сгенерирована ошибка «Определение
 процедуры HandleEvent в классе TestForm отличается от определения события
 в классе EventClass>». Для разрешения ошибки необходимо в описании
 процедуры «HandleEvent» и в делегате «MyEvent» установить одинаковый тип
 параметра «b».


См. также:


[Ошибки компилятора](compiler_errors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

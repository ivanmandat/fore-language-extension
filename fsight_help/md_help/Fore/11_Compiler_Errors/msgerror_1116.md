# Ошибка: Тип &lt;имяТипа&gt; не поддерживается оператором For Each

Ошибка: Тип <имяТипа> не поддерживается оператором For Each
-


# Тип <имяТипа> не поддерживается оператором For Each


## Описание


В коде реализована пользовательская коллекция, не поддерживаемая циклом
 For Each.


## Способ устранения


Если необходимо использовать цикл For Each, то реализуйте пользовательскую
 коллекцию за счет наследования от базовых классов, содержащихся в сборке
 Collection, либо для работы с коллекцией используйте цикл For...End For.


## Пример


	Interface IMyItem

	    Public Property Text: String

	        Get

	    End Property Text;

	    Public Property Value: Variant

	        Get

	    End Property Value;

	End Interface IMyItem;


	Interface IMyItems

	    Public Property Item(i: Integer): IMyItem

	        Get

	        Set

	    End Property Item;


	    Public Property Count: Integer

	        Get

	    End Property Count;

	End Interface IMyItems;


	Sub TestProc;

	Var

	    Arr: IMyItems;

	    Obj: IMyItem;

	    i: Integer;

	Begin

	    //

	    For Each Obj In Arr Do


	    End For;

	    //

	End Sub TestProc;


При компиляции указанного кода на строке «For Each Obj In Arr Do»
 будет сгенерирована ошибка «Тип IMyItems не поддерживается оператором
 For Each». Для разрешения ошибки используйте цикл For...End For, либо
 реализуйте пользовательскую коллекцию за счет наследования от классов,
 содержащихся в сборке Collection.


См. также:


[Ошибки компилятора](compiler_errors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

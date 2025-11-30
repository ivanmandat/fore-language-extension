# Ошибка: Интерфейс может наследоваться только от интерфейса

Ошибка: Интерфейс может наследоваться только от интерфейса
-


# Интерфейс может наследоваться только от интерфейса


## Описание


Нарушено правило наследования интерфейсов, определенное спецификацией
 языка Fore.


## Способ устранения


Интерфейс может наследоваться только от интерфейса. Проверьте иерархию
 наследования.


## Пример


	Interface IMyInterface1


	End Interface IMyInterface1;


	Interface IMyInterface2: IMyInterface1


	End Interface IMyInterface2;


	Class MyClass: Object, IMyInterface2


	End Class MyClass;


	Interface IMyInterface3: MyClass


	End Interface IMyInterface3;


При компиляции указанного кода на строке «Interface IMyInterface3: MyClass»
 будет сгенерирована ошибка «Интерфейс может наследоваться только от интерфейса».
 Интерфейс не может быть унаследован от класса «MyClass». Необходимо изменить
 иерархию наследования, унаследовав интерфейс «IMyInterface3» от интерфейса
 «IMyInterface1» либо «IMyInterface2».


См. также:


[Ошибки компилятора](compiler_errors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

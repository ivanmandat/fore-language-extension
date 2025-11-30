# IForeCriticalSection.Leave

IForeCriticalSection.Leave
-


# IForeCriticalSection.Leave


## Синтаксис


		Leave;


## Описание


Метод Leave осуществляет выход
 из критической секции.


## Комментарии


Для работы с переменными в рамках критической секции предварительно
 должен быть вызван метод [Enter](IForeCriticalSection.Enter.htm).
 После вызова метода Leave доступ
 к переменным из других потоков будет восстановлен.


## Пример


Пример использования приведён в описании метода [IForeCriticalSection.Enter](IForeCriticalSection.Enter.htm).


См. также:


[IForeCriticalSection](IForeCriticalSection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

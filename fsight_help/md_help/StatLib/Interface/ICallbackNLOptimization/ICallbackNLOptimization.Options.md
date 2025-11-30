# ICallbackNLOptimization.Options

ICallbackNLOptimization.Options
-


# ICallbackNLOptimization.Options


## Синтаксис


Options: Array;


## Описание


Свойство Options определяет
 параметры заданного пользовательского класса.


## Комментарии


Массив Options должен содержать
 не менее 16 элементов. Первый элемент в массиве отвечает за прекращение
 итерационного процесса:


	- если первый элемент «0», расчет продолжается;


	- если первый элемент не «0», расчет прерывается.


Остальные 15 элементов в массиве Options
 не используются.


Для получения значения целевой функции используйте метод [ICallbackNLOptimization.GetObjFunValue](ICallbackNLOptimization.GetObjFunValue.htm).


## Пример


Использование свойства приведено в примере для [ICallbackNLOptimization.GetConstraintPartialDeriv](ICallbackNLOptimization.GetConstraintPartialDeriv.htm).


См. также:


[ICallbackNLOptimization](ICallbackNLOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

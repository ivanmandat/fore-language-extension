# ICallbackNLOptimization.GetObjFunPartialDeriv

ICallbackNLOptimization.GetObjFunPartialDeriv
-


# ICallbackNLOptimization.GetObjFunPartialDeriv


## Синтаксис


GetObjFunPartialDeriv(Indx: Integer): Variant;


## Параметры


Indx. Индекс переменной.


## Описание


Метод GetObjFunPartialDeriv
 рассчитывает и возвращает в метод оптимизации значение частной производной
 целевой функции по j-ой переменной.


## Комментарии


Для получения значения i-го
 ограничения используйте метод [ICallbackNLOptimization.GetConstraintValue](ICallbackNLOptimization.GetConstraintValue.htm).


## Пример


Использование свойства приведено в примере для [ICallbackNLOptimization.GetConstraintPartialDeriv](ICallbackNLOptimization.GetConstraintPartialDeriv.htm).


См. также:


[ICallbackNLOptimization](ICallbackNLOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ICallbackNLOptimization.SetArgValues

ICallbackNLOptimization.SetArgValues
-


# ICallbackNLOptimization.SetArgValues


## Синтаксис


SetArgValues(VariableNumber: Integer; Value: Double);


## Параметры


VariableNumber. Порядковый
 номер переменной, которой требуется присвоить значение;


Примечание.
 Для определения порядкового номера переменной используется свойство [ISmNonLinearOptimization.CoefficientsOrder](../ISmNonLinearOptimization/ISmNonLinearOptimization.CoefficientsOrder.htm).


Value. Значение, которое требуется
 присвоить переменной.


## Описание


Метод SetArgValues возвращает
 значения переменных, для которых требуется рассчитать значение целевой
 функции и нелинейных ограничений.


## Комментарии


Для получения значения целевой функции используйте метод [ICallbackNLOptimization.GetObjFunValue](ICallbackNLOptimization.GetObjFunValue.htm).


## Пример


Использование свойства приведено в примере для [ICallbackNLOptimization.GetConstraintPartialDeriv](ICallbackNLOptimization.GetConstraintPartialDeriv.htm).


См. также:


[ICallbackNLOptimization](ICallbackNLOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ISmNonLinearEquations.JacobianCalcFrequency

ISmNonLinearEquations.JacobianCalcFrequency
-


# ISmNonLinearEquations.JacobianCalcFrequency


## Синтаксис


JacobianCalcFrequency: Integer;


## Описание


Свойство JacobianCalcFrequency
 определяет частоту вычисления якобиана при решении системы нелинейных
 уравнений методом Ньютона.


## Комментарии


Значение по умолчанию - единица, т.е. якобиан вычисляется при каждой
 итерации. Чем больше значение данного свойства, тем реже будет вычисляться
 якобиан и тем выше будет скорость решения системы уравнений.


Метод решения системы определяется свойством [ISmNonLinearEquations.MethodType](ISmNonLinearEquations.MethodType.htm):
 оно должно иметь значение [NonLinearEquationsType.NewtonMethod](../../Enums/NonLinearEquationsType.htm).
 При других методах решения свойство JacobianCalcFrequency
 игнорируется.


## Пример


Использование свойства приведено в примере для [ISmNonLinearEquations.DerivativeShift](ISmNonLinearEquations.DerivativeShift.htm).


См. также:


[ISmNonLinearEquations](ISmNonLinearEquations.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

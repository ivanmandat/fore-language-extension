# ISmNonLinearEquations.LinearEqSolutionMethod

ISmNonLinearEquations.LinearEqSolutionMethod
-


# ISmNonLinearEquations.LinearEqSolutionMethod


## Синтаксис


LinearEqSolutionMethod: [LinearEqSolutionType](../../Enums/LinearEqSolutionType.htm);


## Описание


Свойство LinearEqSolutionMethod
 определяет способ вычисления следующего приближения для решения линеаризованной
 системы уравнений.


## Комментарии


Данная система должна быть вычислена при решении системы нелинейных
 уравнений методом Ньютона. Метод решения системы определяется свойством
 [ISmNonLinearEquations.MethodType](ISmNonLinearEquations.MethodType.htm):
 оно должно иметь значение [NonLinearEquationsType.NewtonMethod](../../Enums/NonLinearEquationsType.htm).
 При других методах решения свойство LinearEqSolutionMethod
 игнорируется.


Если свойство LinearEqSolutionMethod
 имеет значение [LinearEqSolutionType.InvMatrix](../../Enums/LinearEqSolutionType.htm),
 то полученное решение будет более надежным, а если - [LinearEqSolutionType.GaussMethod](../../Enums/LinearEqSolutionType.htm),
 то решение будет найдено более быстро.


## Пример


Пример использования данного свойства приведен в описании [ISmNonLinearEquations.JacobianCalcFrequency](ISmNonLinearEquations.JacobianCalcFrequency.htm).


См. также:


[ISmNonLinearEquations](ISmNonLinearEquations.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

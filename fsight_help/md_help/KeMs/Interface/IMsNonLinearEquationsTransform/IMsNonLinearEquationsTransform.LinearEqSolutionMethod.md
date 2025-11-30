# IMsNonLinearEquationsTransform.LinearEqSolutionMethod

IMsNonLinearEquationsTransform.LinearEqSolutionMethod
-


# IMsNonLinearEquationsTransform.LinearEqSolutionMethod


## Синтаксис


LinearEqSolutionMethod: [LinearEqSolutionType](StatLib.chm::/Enums/LinearEqSolutionType.htm);


## Описание


Свойство LinearEqSolutionMethod
 определяет способ вычисления следующего приближения для решения линеаризованной
 системы уравнений.


## Комментарии


Линеаризованная система должна быть вычислена
 при решении системы нелинейных уравнений методом Ньютона. Метод решения
 системы определяется свойством [IMsNonLinearEquationsTransform.MethodType](IMsNonLinearEquationsTransform.MethodType.htm):
 оно должно иметь значение [NonLinearEquationsType.NewtonMethod](StatLib.chm::/Enums/NonLinearEquationsType.htm)

 . При других методах решения свойство LinearEqSolutionMethod игнорируется.


Если свойство LinearEqSolutionMethod имеет значение LinearEqSolutionType.InvMatrix,
 то полученное решение будет более надежным, а если - LinearEqSolutionType.GaussMethod,
 то решение будет найдено более быстро.


## Пример


Пример использования данного свойства приведен в описании [IMsNonLinearEquationsTransform.JacobianCalcFrequency](IMsNonLinearEquationsTransform.JacobianCalcFrequency.htm).


См. также:


[IMsNonLinearEquationsTransform](IMsNonLinearEquationsTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

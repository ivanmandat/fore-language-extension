# ISmNonLinearOptimization.FunctionString

ISmNonLinearOptimization.FunctionString
-


# ISmNonLinearOptimization.FunctionString


## Синтаксис


FunctionString: String;


## Описание


Свойство FunctionString определяет
 целевую функцию.


## Комментарии


В функции могут быть использованы:


	- наименование коэффициентов, заданные в свойстве [ISmNonLinearOptimization.CoefficientsOrder](ISmNonLinearOptimization.CoefficientsOrder.htm);


	- любые арифметические операций и круглые скобки;


	- цифры.


В выражение функции может быть передана функция на языке Fore, реализованная
 в модуле, которая передается в формате:
 <Идентификатор модуля>.<Идентификатор функции>[(Параметры функции)]. Для этого
 необходимо определить репозиторий, в котором будет происходить поиск модуля.


Использование выражения, реализованного в модуле, приведено в примере
 для [ISmExpressionProvider.Metabase](../ISmExpressionProvider/ISmExpressionProvider.Metabase.htm).


## Пример


Использование свойства приведено в примере для [ISmNonLinearOptimization.InitApproximation](ISmNonLinearOptimization.InitApproximation.htm).


См. также:


[ISmNonLinearOptimization](ISmNonLinearOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

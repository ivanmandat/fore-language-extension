# ISmNonLinearLeastSquare.FunctionString

ISmNonLinearLeastSquare.FunctionString
-


# ISmNonLinearLeastSquare.FunctionString


## Синтаксис


FunctionString: String;


## Описание


Свойство FunctionString определяет
 рассчитываемую функцию.


## Комментарии


В функции могут быть использованы:


	- наименования объясняющих переменных. См. свойство [ISmNonLinearLeastSquare.Explanatories](ISmNonLinearLeastSquare.Explanatories.htm);


	- наименование коэффициентов. См. свойство [ISmNonLinearLeastSquare.CoefficientsOrder](ISmNonLinearLeastSquare.CoefficientsOrder.htm);


	- любые арифметические операций и круглые скобки;


	- цифры.


В выражение функции может быть передана функция на языке Fore, реализованная
 в модуле, которая передается в формате:
 <Идентификатор модуля>.<Идентификатор функции>[(Параметры функции)]. Для этого
 необходимо определить репозиторий, в котором будет происходить поиск модуля.


Использование выражения, реализованного в модуле, приведено в примере
 для [ISmExpressionProvider.Metabase](../ISmExpressionProvider/ISmExpressionProvider.Metabase.htm).


## Пример


Использование свойства приведено в примере для [ISmNonLinearLeastSquare.CoefficientsOrder](ISmNonLinearLeastSquare.CoefficientsOrder.htm).


См. также:


[ISmNonLinearLeastSquare](ISmNonLinearLeastSquare.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

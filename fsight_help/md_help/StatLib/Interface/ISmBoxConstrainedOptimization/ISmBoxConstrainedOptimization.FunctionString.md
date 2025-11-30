# ISmBoxConstrainedOptimization.FunctionString

ISmBoxConstrainedOptimization.FunctionString
-


# ISmBoxConstrainedOptimization.FunctionString


## Синтаксис


FunctionString: String;


## Описание


Свойство FunctionString определяет
 целевую функцию.


## Комментарии


Для получения градиента целевой функции, отвечающего найденному решению,
 используйте свойство [ISmBoxConstrainedOptimization.FunctionGradient](ISmBoxConstrainedOptimization.FunctionGradient.htm).


В выражение функции может быть передана функция на языке Fore, реализованная
 в модуле, которая передается в формате:
 <Идентификатор модуля>.<Идентификатор функции>[(Параметры функции)]. Для этого
 необходимо определить репозиторий, в котором будет происходить поиск модуля.


Использование выражения, реализованного в модуле, приведено в примере
 для [ISmExpressionProvider.Metabase](../ISmExpressionProvider/ISmExpressionProvider.Metabase.htm).


## Пример


Использование свойства приведено в примере для [ISmBoxConstrainedOptimization.Solution](ISmBoxConstrainedOptimization.Solution.htm)


См. также:


[ISmBoxConstrainedOptimization](ISmBoxConstrainedOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# INonLinearConstraint.NonLinearFunction

INonLinearConstraint.NonLinearFunction
-


# INonLinearConstraint.NonLinearFunction


## Синтаксис


NonLinearFunction: String;


## Описание


Свойство NonLinearFunction определяет
 нелинейную функцию ограничения.


## Комментарии


Для определения нижней и верхней границ нелинейного ограничения используйте
 свойства [INonLinearConstraint.BoundaryLower](INonLinearConstraint.BoundaryLower.htm)
 и [INonLinearConstraint.BoundaryUpper](INonLinearConstraint.BoundaryUpper.htm)
 соответственно.


В выражение функции может быть передана функция на языке Fore, реализованная
 в модуле, которая передается в формате:
 <Идентификатор модуля>.<Идентификатор функции>[(Параметры функции)]. Для этого
 необходимо определить репозиторий, в котором будет происходить поиск модуля.


Использование выражения, реализованного в модуле, приведено в примере
 для [ISmExpressionProvider.Metabase](../ISmExpressionProvider/ISmExpressionProvider.Metabase.htm).


## Пример


Использование свойства приведено в примере для [INonLinearConstraint.Result](INonLinearConstraint.Result.htm).


См. также:


[INonLinearConstraint](INonLinearConstraint.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

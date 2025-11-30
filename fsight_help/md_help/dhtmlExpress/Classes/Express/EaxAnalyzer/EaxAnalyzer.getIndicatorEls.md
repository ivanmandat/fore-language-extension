# EaxAnalyzer.getIndicatorEls

EaxAnalyzer.getIndicatorEls
-


# EaxAnalyzer.getIndicatorEls


## Синтаксис


getIndicatorEls(mode: [PP.Exp.Ui.EaxObjectType](../../../Enums/EaxObjectType.htm));


## Параметры


*mode.* Тип представления
 данных.


## Описание


Метод getIndicatorEls возвращает
 перечень измерений метрик заданного типа визуализатора.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим перечень измерений метрик
 для плоского дерева экспресс-отчета:


var eaxAnalyzer = expressBox.getSource();
// Получим измерения метрик плоского дерева
var metrics = eaxAnalyzer.getIndicatorEls(PP.Exp.Ui.EaxObjectType.TreeMap)
console.log("Измерения метрик: " + metrics);

В результате выполнения примера в консоли браузера будут выведены измерения
 метрик плоского дерева:


Измерения метрик: Value, Color, Size


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

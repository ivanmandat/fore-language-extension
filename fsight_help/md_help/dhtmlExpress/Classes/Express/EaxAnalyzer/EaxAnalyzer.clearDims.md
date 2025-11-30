# EaxAnalyzer.clearDims

EaxAnalyzer.clearDims
-
-


**


# EaxAnalyzer.clearDims


## Синтаксис


clearDims();


## Описание


Метод clearDims** удаляет все измерения в экспресс-отчете.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим количество измерений экспресс-отчета до и после их удаления:


var eaxAnalyzer = expressBox.getSource();
console.log("Dims count: " + eaxAnalyzer.getDims().length);
// Удаляем все измерения экспресс-отчета
eaxAnalyzer.clearDims();
console.log("Dims count after clearing: " + eaxAnalyzer.getDims().length);

В результате выполнения примера все четыре измерения экспресс-отчета были удалены:


Dims count: 4

Dims count after clearing: 0


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

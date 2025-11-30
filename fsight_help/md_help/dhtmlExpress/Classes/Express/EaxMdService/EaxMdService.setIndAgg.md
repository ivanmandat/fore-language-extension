# EaxMdService.setIndAgg

EaxMdService.setIndAgg
-


# EaxMdService.setIndAgg


## Синтаксис


setIndAgg(report, ind, agg, objectType, callback);


## Параметры


report. [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm).
 Экземпляр экспресс отчета.


ind. PP.Exp.EaxObjectIndicator.
 Варианты метрик.


agg. [PP.Exp.Ui.EaxAggregationFunction](../../../Enums/EaxAggregationFunction.htm).
 Тип агрегации


objectType. [PP.Exp.Ui.EaxObjectType](../../../Enums/EaxObjectType.htm).
 Тип визуализатора.


callback. PP.Delegate
 | Function. Функция обратного
 вызова.


## Описание


Метод setIndAgg устанавливает
 тип агрегации для метрик.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


// Установим тип метрики
ind = PP.Exp.EaxObjectIndicator.Color;
// Установим метод агрегации
agg = PP.Exp.Ui.EaxAggregationFunction.Sum;
// Установим тип визуализатора
type = PP.Exp.Ui.EaxObjectType.BubbleChart;
//  Установим тип агрегации для метрик
eaxMdService.setIndAgg(eaxAnalyzer, ind, agg, type);
// Получим установленный тип агрегации
console.debug(eaxAnalyzer.getIndAgg(ind, type));
В результате выполнения примера визуализатору пузырьковая диаграмма
 был установлен метод агрегации «сумма» для метрики «цвет», после чего
 установленный метод агрегации был выведен в консоль.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

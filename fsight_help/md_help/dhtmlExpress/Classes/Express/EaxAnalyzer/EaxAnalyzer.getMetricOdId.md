# EaxAnalyzer.getMetricOdId

EaxAnalyzer.getMetricOdId
-


# EaxAnalyzer.getMetricOdId


## Синтаксис


getMetricOdId(viewType, metric);


## Параметры


viewType. [PP.Exp.Ui.EaxObjectType](../../../Enums/EaxObjectType.htm).
 Тип визуализатора.


metric. PP.Exp.EaxObjectIndicator.
 Тип метрики.


## Описание


Метод getMetricOdId возвращает
 идентификатор метрики выбранного визуализатора.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


// Установим тип метрики
ind = PP.Exp.EaxObjectIndicator.Color;
// Установим тип визуализатора
type = PP.Exp.Ui.EaxObjectType.BubbleChart;
// Получим идентификатор метрики
console.debug(eaxAnalyzer.getMetricOdId(type, ind));
// -> Object {id: "JCNEPLLHEFHKEOAEGGKBDFINGMKPKFFEFKCFPBCCNEGIAPPP!M…COBLKDNKOHIEFIMHGPBPIACLNMOF!EaxBubbleChart!Color"}
В результате выполнения примера в консоль был выведен идентификатор
 метрики «Цвет» визуализатора «Пузырьковая диаграмма».


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

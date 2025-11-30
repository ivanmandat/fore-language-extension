# EaxAnalyzer.TopobaseOd

EaxAnalyzer.TopobaseOd
-


**


# EaxAnalyzer.TopobaseOd


## Синтаксис


TopobaseOd: Object


## Описание


Свойство TopobaseOd** содержит идентификатор топоосновы экспресс-отчета в виде JSON-объекта.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setTopobaseOd, а возвращается с помощью метода getTopobaseOd.


Свойство содержит значение в виде JSON-объекта со следующими полями: k - ключ топоосновы, i - идентификатор топоосновы, n - наименование топоосновы и др.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим информацию о топооснове экспресс-отчета:


var eaxAnalyzer = expressBox.getSource();
// Получим информацию о топобазе
var topobase = eaxAnalyzer.getTopobaseOd();
console.log("Id: " + topobase.i);
console.log("Key: " + topobase.k);
console.log("Name: " + topobase.n);

В результате выполнения примера будут выведены ключ, идентификатор и наименование топоосновы экспресс-отчета:


Id: OBJ2528

Key: 2528

Name: Россия.tbs


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

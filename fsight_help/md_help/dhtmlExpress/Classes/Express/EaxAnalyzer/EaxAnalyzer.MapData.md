# EaxAnalyzer.MapData

EaxAnalyzer.MapData
-


**


# EaxAnalyzer.MapData


## Синтаксис


MapData: Object


## Описание


Свойство MapData** содержит данные представления экспресс-отчета «Карта».


## Комментарии


Значение свойства можно установить из JSON и с помощью метода setMapData, а возвратить с помощью метода getMapData.


Свойство содержит значение в виде JSON-объекта со следующими полями: id - идентификатор пузырьковой диаграммы, meta - метаданные пузырьковой диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим количество стран на карте экспресс-отчета:


var eaxAnalyzer = expressBox.getSource();
// Получим данные карты экспресс-отчета
var mapData = eaxAnalyzer.getMapData()
// Вывыдем количетсво стран на карте
console.log("Количество стран на карте: " + mapData.MapChart.RegionsNames.RegionName.length);

В результате выполнения примера в консоли браузера будет выведено количество стран на карте экспресс-отчета:


Количество стран на карте: 83


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

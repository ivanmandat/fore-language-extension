# EaxAnalyzer.BubbleChartData

EaxAnalyzer.BubbleChartData
-


**


# EaxAnalyzer.BubbleChartData


## Синтаксис


BubbleChartData: Object


## Описание


Свойство BubbleChartData**
 содержит данные представления экспресс-отчета «Пузырьковая диаграмма».


## Комментарии


Значение свойства можно установить из JSON и с помощью метода setBubbleChartData, а возвратить
 с помощью метода getBubbleChartData.


Свойство принимает и возвращает значение в виде JSON-объекта со следующими
 полями: id - идентификатор пузырьковой диаграммы, meta - метаданные пузырьковой
 диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной пузырьковой диаграммой
 в рабочей области экспресс-отчета. Получим текущее семейство шрифтов легенды
 у данной пузырьковой диаграммы:


var eaxAnalyzer = expressBox.getSource();
// Получаем данные пузырьковой диаграммы экспресс-отчета
var bubbleChartData = eaxAnalyzer.getBubbleChartData();
// Получим настройки пузырьковой диаграммы
var options = JSON.parse(bubbleChartData.meta.options);
for (var i = 0; i < options.length; i++) {
    var option = options[i];
    if(option.Name == "chartmaster.legendpanel.fontfamily") {
        console.log(option.Name + ": " + option.Value);
    }
};

В результате выполнения примера в консоли браузера будет выведено наименование
 текущего семейства шрифтов у пузырьковой диаграммы экспресс-отчета:


chartmaster.legendpanel.fontfamily: Calibri


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

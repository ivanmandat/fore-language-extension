# EaxAnalyzer.BubbleChartChangedData

EaxAnalyzer.BubbleChartChangedData
-


**


# EaxAnalyzer.BubbleChartChangedData


## Синтаксис


BubbleChartChangedData: Object


## Описание


Свойство BubbleChartChangedData**
 содержит измененные данные и метаданные представления экспресс-отчета
 «Пузырьковая диаграмма».


## Комментарии


Значение свойства можно установить из JSON и с помощью метода setBubbleChartChangedData, а возвратить
 с помощью метода getBubbleChartChangedData.


Свойство принимает и возвращает значение в виде массива JSON-объектов
 со следующими полями: Name - наименование настройки пузырьковой диаграммы
 экспресс-отчета, Value - её значение.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Перед выполнением примера
 выберем пункт контекстного меню «Настройки» для пузырьковой диаграммы
 экспресс-отчета. Затем на вкладке «Легенда» открывшегося
 мастера управления пузырьковой диаграммой изменим количество столбцов
 легенды на 5. Далее проверим установленное количество столбцов с помощью
 метода getBubbleChartChangedData:


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

В результате выполнения примера в консоли браузера будет выведено измененное
 значение количества столбцов легенды пузырьковой диаграммы экспресс-отчета:


chartmaster.legendpanel.columnscount: 5


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

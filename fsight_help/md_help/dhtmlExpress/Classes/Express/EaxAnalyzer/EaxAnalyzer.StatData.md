# EaxAnalyzer.StatData

EaxAnalyzer.StatData
-


**


# EaxAnalyzer.StatData


## Синтаксис


StatData: Object


## Описание


Свойство StatData** содержит статистические данные экспресс-отчета.


## Комментарии


Значение свойства задается из JSON и с помощью метода setStatData, а возвращается с помощью метода getStatData.


Свойство содержит значение в виде массива JSON-объектов со следующими полями: k - ключ статистической характеристики, n - её наименование, nodeType - тип вершины html-документа, type - тип статистики, value - значение, vis - признак видимости характеристики.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Откроем представление данных «Таблица» и получим данные о статистической характеристике «Медиана»:


var eaxAnalyzer = expressBox.getSource();
var statData = eaxAnalyzer.getStatData();
for (var i = 0; i < statData.length; i++) {
    var option = statData[i];
    if (option.type == "Median") {
        console.log("Key: " + option.k);
        console.log("Name: " + option.n);
        console.log("Value: " + option.value);
        console.log("Visible: " + option.vis);
    }
}

В результате выполнения примера в консоли браузера будет выведена информация по статистике «Медиана»:


Key: 5

Name: Медиана

Value: NaN

Visible: true


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

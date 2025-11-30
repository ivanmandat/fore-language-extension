# EaxObject.SelectionChanged

EaxObject.SelectionChanged
-


# EaxObject.SelectionChanged


## Синтаксис


SelectionChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SelectionChanged наступает
 после изменения выделения элементов визуализатора экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной диаграммой в рабочей
 области экспресс-отчета. Обработаем событие SelectionChanged:


// Получаем представление диаграммы экспресс-отчета
dataView = expressBox.getDataView();
chartView = dataView.getChartView();
// Устанавливаем обработчик для события SelectionChanged
chartView.SelectionChanged.add(function (sender, args) {
    console.debug(args.Items[0] ? "Выделение содержит элементы 1 ряда" : "Выделение НЕ содержит элементы 1 ряда");
    console.debug(args.Items[1] ? "Выделение содержит элементы 2 ряда" : "Выделение НЕ содержит элементы 2 ряда");
});

В результате выполнения указанных действий, при выделении элементов
 диаграммы, в консоль будет выведена информация о том, содержатся ли в
 выделении элементы первого или второго рядов.


См. также:


[EaxObject](EaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

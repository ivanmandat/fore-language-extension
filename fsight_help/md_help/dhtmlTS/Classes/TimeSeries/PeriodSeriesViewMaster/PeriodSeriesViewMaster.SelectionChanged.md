# PeriodSeriesViewMaster.SelectionChanged

PeriodSeriesViewMaster.SelectionChanged
-


**


# PeriodSeriesViewMaster.SelectionChanged


## Синтаксис


SelectionChanged(sender: Object, args: Object);


## Параметры


sender. Источник события;


args. Информация о событии. Доступный аргумент: JSON-объект с полем Source - источник данных мастера.


## Описание


Событие SelectionChanged** наступает при изменении выделения элемента в деревьях измерений всех атрибутов мастера [PeriodSeriesViewMaster](../../../Components/TimeSeries/PeriodSeriesViewMaster/PeriodSeriesViewMaster.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [PeriodSeriesViewMaster](../../../Components/TimeSeries/PeriodSeriesViewMaster/PeriodSeriesViewMaster.htm) с наименованием «pswMaster» (см. «[Пример создания компонента PeriodSeriesViewMaster](../../../Components/TimeSeries/PeriodSeriesViewMaster/PeriodSeriesViewMaster_Example.htm)»). Обработаем событие SelectionChanged:


// Обработаем событие RequestSelectedItemsChanged
pswMaster.RequestSelectedItemsChanged.add(function (sender, args) {
    console.log("Количество выделенных измерений в дереве: " + args.Ids.length);
});
pswMaster.SelectionChanged.add(function (sender, args) {
    console.log("Изменено выделение элемента в иерархии атрибута мастера");
    // Получим панель «Ряды»
    var item = pswMaster.getItems()[0];
    // Получим дерево измерений атрибута «Ряды»
    var tree = item.getSeriesTreeView();
    // Вызовем событие RequestSelectedItemsChanged
    this.RequestSelectedItemsChanged.fire(this, {
        Ids: tree.getSelectedNodes()
    });
});

Затем щёлкнем по любому элементу в дереве измерений любого атрибута рассматриваемого мастера.


В результате выполнения примера всякий раз при подобном действии в консоли браузера будет выводиться сообщение об изменении выделения и количество выделенных измерений в дереве:


Изменено выделение элемента в иерархии атрибута мастера


Количество выделенных измерений в дереве: 3


См. также:


[PeriodSeriesViewMaster](PeriodSeriesViewMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

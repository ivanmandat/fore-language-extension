# PeriodSeriesViewMaster.AttributeFilterChanged

PeriodSeriesViewMaster.AttributeFilterChanged
-


**


# PeriodSeriesViewMaster.AttributeFilterChanged


## Синтаксис


AttributeFilterChanged(sender: Object, args: Object);


## Параметры


sender. Источник события;


args. Информация о событии. Доступный аргумент: JSON-объект с полем Source - источник данных мастера.


## Описание


Событие AttributeFilterChanged** наступает при изменении фильтра измерений атрибутов мастера [PeriodSeriesViewMaster](../../../Components/TimeSeries/PeriodSeriesViewMaster/PeriodSeriesViewMaster.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [PeriodSeriesViewMaster](../../../Components/TimeSeries/PeriodSeriesViewMaster/PeriodSeriesViewMaster.htm) с наименованием «pswMaster» (см. «[Пример создания компонента PeriodSeriesViewMaster](../../../Components/TimeSeries/PeriodSeriesViewMaster/PeriodSeriesViewMaster_Example.htm)»), а также наличие в базе данных временных рядов атрибута с наименованием «BCA». Обработаем событие AttributeFilterChanged так, чтобы при применении нового фильтра на панели «Ряды» выводился текст данного фильтра и общее количество измерений в дереве атрибута:


// Обработаем событие AttributeFilterChanged
pswMaster.AttributeFilterChanged.add(function (sender, args) {
    console.log("Текст фильтра: " + args);
});
// Обработаем событие PropertyChanged
pswMaster.PropertyChanged.add(function (sender, args) {
    console.log("Общее количество измерений в дереве атрибута: " + args.getMetadata());
});
// Получим панель «Ряды»
var item = pswMaster.getItems()[0];
// Получим поле для редактирования текста фильтра
var findTextBox = item._FindTextBox;
// Обработаем событие
findTextBox.ImageClick.add(function (sender, args) {
    // Вызовем событие AttributeFilterChanged
    pswMaster.AttributeFilterChanged.fire(findTextBox, findTextBox.getContent());
    // Вызовем событие PropertyChanged
    pswMaster.PropertyChanged.fire(this, new PP.Mb.Ui.PropertyChangedEventArgs({
        PropertyName: PP.TS.Ui.ControlType.Filter,
        // В качестве метаданных укажем количество отфильтрованных элементов
        Metadata: item.getSeriesTreeView().getNodes().getCount(),
        TypeUpdateData: [PP.TS.Ui.ViewTypeUpdate.PropertyBar]
    }));
});

Введём в строку поиска «BCA» и нажмём на соответствующий значок. В результате выполнения примера в консоли браузера будет выводиться текст фильтра и общее количество измерений в дереве атрибута:


Текст фильтра: BCA

Общее количество измерений в дереве атрибута: 4


См. также:


[PeriodSeriesViewMaster](PeriodSeriesViewMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

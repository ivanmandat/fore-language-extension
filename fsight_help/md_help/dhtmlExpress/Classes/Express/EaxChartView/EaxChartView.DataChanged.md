# EaxChartView.DataChanged

EaxChartView.DataChanged
-


**


# EaxChartView.DataChanged


## Синтаксис


DataChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы - объект класса [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства в виде элемента перечисления PP.Exp.Ui.[ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm),
 Metadata - настройки диаграммы экспресс-отчета (Data - признак изменения
 данных диаграммы , DrawData - массив данных, отредактированных с помощью
 рисования, PointIndex - индекс точки, SerieIndex - индекс ряда, Value
 - новое значение), TypeUpdateData - тип обновляемых данных, задаваемый
 с помощью перечисления PP.Exp.Ui.[ViewTypeUpdate](../../../Enums/ViewTypeUpdate.htm).


## Описание


Событие DataChanged** наступает
 после изменения данных диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной диаграммой в рабочей
 области экспресс-отчета. Обработаем событие DataChanged:


// Получаем представление диаграммы экспресс-отчета
var chartView = expressBox.getDataView().getChartView();
// Устанавливаем обработчик для события DataChanged
chartView.DataChanged.add(function (sender, args) {
    var metadata = args.getMetadata();
    console.log("Индекс ряда: " + metadata.SerieIndex);
    console.log("Новое значение: " + metadata.Value);
});

Выполним пример, а затем отредактируем данные диаграммы. Для этого на
 одноимённой вкладке нажмём на кнопку «Разрешить редактирование» и выберем
 при этом пункт «По точкам». Далее выберем произвольный столбец и растянем
 его.


В результате выполнения указанных действий, в консоли браузера будут
 выведены индекс серии, в которой были изменены данные, и новое значение
 точки:


Индекс ряда: 9

Новое значение: 718232044.2


См. также:


[EaxChartView](EaxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

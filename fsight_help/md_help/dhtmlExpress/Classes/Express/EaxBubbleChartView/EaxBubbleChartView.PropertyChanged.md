# EaxBubbleChartView.PropertyChanged

EaxBubbleChartView.PropertyChanged
-


**


# EaxBubbleChartView.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы - объект класса PP.Mb.Ui.[PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства в виде элемента перечисления PP.Exp.Ui.[ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm),
 Metadata - настройки пузырьковой диаграммы экспресс-отчета, TypeUpdateData - тип обновляемых
 данных, задаваемый с помощью перечисления PP.Exp.Ui.[ViewTypeUpdate](../../../Enums/ViewTypeUpdate.htm).


## Описание


Событие PropertyChanged**
 наступает после изменения свойств пузырьковой диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной пузырьковой диаграммой в области
 данных. Обработаем событие **PropertyChanged**,
 выполнив обновление пузырьковой диаграммы экспресс-отчета с учетом измененных свойств:


// Получаем мастер управления пузырьковой диаграммой экспресс-отчета
var master = expressBox.getPropertyBarView().getBubbleChartMaster();
// Получаем представление пузырьковой диаграммы экспресс-отчета
var bubbleChartView = master.getDataView();
// Обрабатываем событие PropertyChanged
bubbleChartView.PropertyChanged.add(function (sender, args) {
    // Обновляем экспресс-отчет
    bubbleChartView.refresh(args);
});
// Вызовем событие PropertyChanged
bubbleChartView.PropertyChanged.fire(this, new PP.Mb.Ui.PropertyChangedEventArgs({
    PropertyName: PP.Exp.Ui.ControlType.ShowMaster,
    Metadata: {
        MasterType: PP.Exp.Ui.PropertyGroups.BubbleChart
    },
    TypeUpdateData: PP.Exp.Ui.ViewTypeUpdate.BubbleChart
}));

В результате выполнения примера после наступления события **PropertyChanged**
 будет обновлена пузырьковая диаграмма экспресс-отчета в соответствии с измененным свойством
 PP.Exp.Ui.[ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm).ShowMaster.


См. также:


[EaxBubbleChartView](EaxBubbleChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# BubbleChartMaster.PropertyChanged

BubbleChartMaster.PropertyChanged
-


**


# BubbleChartMaster.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы - объект класса [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства в виде элемента перечисления PP.Exp.Ui.[ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm),
 Metadata - настройки мастера управления пузырьковой диаграммой экспресс-отчета,
 TypeUpdateData - тип обновляемых данных, задаваемый с помощью перечисления
 PP.Exp.Ui.[ViewTypeUpdate](../../../Enums/ViewTypeUpdate.htm).


## Описание


Событие PropertyChanged**
 наступает после изменения настроек мастера управления пузырьковой диаграммой
 экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Обработаем событие **PropertyChanged**:


// Получаем мастер управления пузырьковой диаграммой экспресс-отчета
var master = expressBox.getPropertyBarView().getBubbleChartMaster();
// Обрабатываем событие PropertyChanged
master.PropertyChanged.add(function () {
    console.log("Настройки мастера управления пузырьковой диаграммой экспресс-отчета изменены.");
});
// Вызываем событие PropertyChanged
master.PropertyChanged.fire(this);

В результате выполнения данного примера после вызова события PropertyChanged
 в консоли браузера будет выведено сообщение о том, что настройки мастера
 управления пузырьковой диаграммой изменены.


См. также:


[BubbleChartMaster](EaxBubbleChartMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

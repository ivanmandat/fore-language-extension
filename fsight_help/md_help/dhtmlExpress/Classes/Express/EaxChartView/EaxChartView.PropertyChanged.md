# EaxChartView.PropertyChanged

EaxChartView.PropertyChanged
-


**


# EaxChartView.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы - объект класса [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства в виде элемента перечисления PP.Exp.Ui.[ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm),
 Metadata - настройки диаграммы экспресс-отчета, TypeUpdateData - тип обновляемых
 данных, задаваемый с помощью перечисления PP.Exp.Ui.[ViewTypeUpdate](../../../Enums/ViewTypeUpdate.htm).


## Описание


Событие PropertyChanged**
 наступает после выбора пункта «Настройки» в контекстном меню диаграммы
 экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной диаграммой
 в рабочей области экспресс-отчета. Обработаем событие PropertyChanged:


// Получаем представление диаграммы экспресс-отчета
var chartView = expressBox.getDataView().getChartView();
// Устанавливаем обработчик для события PropertyChanged
chartView.PropertyChanged.add(function () {
    console.log("Свойства диаграммы экспресс-отчета были изменены.");
});

В результате выполнения примера после наступления события PropertyChanged
 (выбора пункта контекстного меню «Настройки») в консоли браузера будет
 выводиться сообщение о том, что свойства диаграммы экспресс-отчета были
 изменены.


См. также:


[EaxChartView](EaxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

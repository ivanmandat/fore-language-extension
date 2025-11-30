# EaxMapView.PropertyChanged

EaxMapView.PropertyChanged
-


**


# EaxMapView.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы: объект класса [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства в виде элемента перечисления [PP.Exp.Ui.ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm),
 Metadata - настройки пузырьковой диаграммы экспресс-отчета, TypeUpdateData
 - тип обновляемых данных, задаваемый с помощью перечисления PP.Exp.Ui.[ViewTypeUpdate](../../../Enums/ViewTypeUpdate.htm), Callback
 - возвратная функция.


## Описание


Событие PropertyChanged**
 наступает после выбора пункта «Настройки» в контекстном меню карты экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей
 области экспресс-отчета. Обработаем событие PropertyChanged:


// Получаем представление карты экспресс-отчета
var mapView = expressBox.getDataView().getMapView();
// Устанавливаем обработчик события PropertyChanged
mapView.PropertyChanged.add(function (sender, args) {
    console.log("Измененное свойство: " + args.getPropertyName());
});

В результате выполнения примера после наступления события PropertyChanged
 (выбора пункта контекстного меню «Настройки») в консоли браузера было
 выведено наименование измененного свойства:


Измененное свойство: ShowMaster


См. также:


[EaxMapView](EaxMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# EaxMapView.refreshView

EaxMapView.refreshView
-


# EaxMapView.refreshView


## Синтаксис


refreshView (args: PP.Ui.[PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 notSetSettingsToMaps: Boolean);


## Параметры


*args.*
 Настройки карты.


*notSetSettingsToMaps.* Признак того,
 что настройки не будут применены к карте экспресс-отчета. Если параметр
 равен true, то настройки не будут
 применены к карте, иначе - будут применены. Необязательный параметр. По
 умолчанию его значение не определено (undefined).


## Описание


Метод refreshView добавляет
 настройки к карте экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей
 области. Отменим возможность масштабирования карты экспресс-отчета:


// Получим представление карты экспресс-отчета
var eaxMapView = expressBox.getDataView().getMapView();
// Добавим возможность масштабирования карты
eaxMapView.refreshView(new PP.Ui.PropertyChangedEventArgs({
    PropertyName: 'MapChartSettings',
    Metadata: [{
        Name: "mapmaster.mainpanel.usezoomonwheel",
        Value: false
    }]
}));

В результате выполнения примера была отключена возможность масштабирования
 карты экспресс-отчета.


См. также:


[EaxMapView](EaxMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

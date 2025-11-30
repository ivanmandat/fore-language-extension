# EaxMapView.getState

EaxMapView.getState
-


# EaxMapView.getState


## Синтаксис


getState();


## Описание


Метод getState возвращает настройки
 представления карты в экспресс-отчёте.


## Комментарии


Метод возвращает объект типа [PP.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с идентификатором «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей
 области. Изменим размер заголовка легенды карты:


// Получим настройки карты
dataView = expressBox.getDataView();
mapView = dataView.getMapView();
state = mapView.getState();
meta = state.getMetadata();
// Изменим размер заголовка легенды карты
for (var i in meta) {
    if (meta[i].Name == "mapmaster.legendpanel.HeaderFontSize") {
        meta[i].Value = 16
    }
}
// Обновим карту
mapView.refresh(state);
В результате выполнения примера будет изменен размер заголовка легенды
 карты.


См. также:


[EaxMapView](EaxMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

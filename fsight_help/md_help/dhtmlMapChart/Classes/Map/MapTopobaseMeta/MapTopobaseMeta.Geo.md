# MapTopobaseMeta.Geo

MapTopobaseMeta.Geo
-


# MapTopobaseMeta.Geo


## Синтаксис


Geo: Array;


## Описание


Свойство Geo определяет массив объектов связи географических координат с координатами топоосновы.


## Комментарии


Значение свойства устанавливается из JSON и возвращается с помощью метода getGeo. Задать значение с помощью метода setGeo нельзя.


Свойство содержит массив объектов типа [PP.MapGeoItem](../MapGeoItem/MapGeoItem.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Размещение карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)»). Рассчитаем географические координаты центральной точки области слоя карты с идентификатором «RU-PER», используя имеющиеся географические координаты центров областей с идентификаторами «RU-MOW» и «RU-SPE» и координаты топоосновы всех трёх областей:


/* Создадим объект связи географических координат
центра области с идентификатором «RU-MOW» с координатами топоосновы */
var mowRect = map.getShape("RU-MOW").getBoundsRect();
var geoItem1 = new PP.MapGeoItem({
    Latitude: 55.751667, // Широта
    Longitude: 37.617778, // Долгота
    X: mowRect.getLeft() + mowRect.getWidth() / 2, // Координата топоосновы X
    Y: mowRect.getTop() + mowRect.getHeight() / 2, // Координата топоосновы Y
    Id: "RU-MOW"
});
// Создадим объект метаданных топоосновы карты
var meta = new PP.MapTopobaseMeta({
    // Массив объектов связи географических координат с координатами топоосновы
    Geo: [geoItem1]
});
/* Создадим и установим второй объект связи географических
координат области с идентификатором «RU-SPE» с координатами топоосновы */
var speRect = map.getShape("RU-SPE").getBoundsRect();
var geoItem2 = new PP.MapGeoItem({
    Latitude: 59.95, // Широта
    Longitude: 30.316667, // Долгота
    X: speRect.getLeft() + speRect.getWidth() / 2, // Координата топоосновы X
    Y: speRect.getTop() + speRect.getHeight() / 2, // Координата топоосновы Y
    Id: "RU-SPE"
});
meta.setGeoItem(geoItem2);
// Определим координаты центра области с идентификатором «RU-PER»
var perRect = map.getShape("RU-PER").getBoundsRect();
var center = new PP.Point({
    X: perRect.getLeft() + perRect.getWidth() / 2,
    Y: perRect.getTop() + perRect.getHeight() / 2,
});
// Определим коэффициенты связи географических координат с коорданатами топоосновы
var yCoef = Math.abs((geoItem2.getLatitude() - geoItem1.getLatitude()) / (geoItem2.getY() - geoItem1.getY()));
var xCoef = Math.abs((geoItem2.getLongitude() - geoItem1.getLongitude()) / (geoItem2.getX() - geoItem1.getX()));
// Получим географические координаты области с идентификатором «RU-PER»
var perX = Math.abs(center.getX() - geoItem1.getX()) * xCoef + geoItem1.getLongitude();
var perY = Math.abs(center.getY() - geoItem1.getY()) * yCoef + geoItem1.getLatitude();
console.log("Широта: " + perY + ", долгота: " + perX);

В результате выполнения примера в консоли браузера выли выведены географические координаты центральной точки области слоя карты с идентификатором «RU-PER»:


Широта: 59.18602187765048, долгота: 56.32188852435074


См. также:


[MapTopobaseMeta](MapTopobaseMeta.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

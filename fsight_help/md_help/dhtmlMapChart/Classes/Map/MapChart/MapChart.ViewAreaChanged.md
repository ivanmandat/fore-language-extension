# MapChart.ViewAreaChanged

MapChart.ViewAreaChanged
-


# MapChart.ViewAreaChanged


## Синтаксис


ViewAreaChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы: ViewArea - область просмотра карты, IsEnd - признак
 отмены операции по изменению области просмотра.


## Описание


Событие ViewAreaChanged наступает
 после изменения области просмотра карты.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Отобразим на карте панель для изменения
 масштаба, а также обработаем событие:


var miniMap = map.getMiniMap();
// Укажем на кнопках панели подписи, соответствующие их функциональности
miniMap.getZoomInButton().setContent("+");
miniMap.getZoomOutButton().setContent("-");
miniMap.getResetButton().setContent("100%");
// Обработаем событие ViewAreaChanged
map.ViewAreaChanged.add(function (sender, args) {
    if (args.IsEnd) {
        var rect = args.ViewArea;
        console.log("Коэффициент ширины: " + rect.getWidth());
        console.log("Коэффициент высоты: " + rect.getHeight());
    };
});
В результате выполнения примера на карте была отображена панель, предназначенная
 для изменения её масштаба. На кнопках панели были указаны подписи, соответствующие
 их функциональности:


![](MapChart_setMiniMapEnabled.png)


При масштабировании карты с помощью колёсика мыши в консоли браузера
 будет выводиться текущий коэффициент ширины и высоты карты:


Коэффициент ширины: 3.575117818397847


Коэффициент высоты: 1.707202993451824


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

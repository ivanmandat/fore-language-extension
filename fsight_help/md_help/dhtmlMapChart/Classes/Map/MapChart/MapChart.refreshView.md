# MapChart.refreshView

MapChart.refreshView
-


# MapChart.refreshView


## Синтаксис


refreshView(args: PP.Ui.PropertyChangedEventArgs);


## Параметры


args. Настройки карты.


## Описание


Метод refreshView обновляет карту в соответствии с указанными настройками.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Установим для легенды карты новую толщину и цвет границы, а также обработаем событие [Refreshed](MapChart.Refreshed.htm), выводя в консоль браузера значения изменённых свойств:


// Получим настройки карты
var state = map.getState();
// Получим метаданные
for (var i in state.getMetadata()) {
    var data = state.getMetadata()[i];
    switch (data.Name) {
    case "mapmaster.stylespanel.borderthickness":
        // Изменим толщину границы легенды
        data.Value = 3;
        break;
    case "mapmaster.stylespanel.border":
        // Изменим цвет границы легенды на красный
        data.Value = "#ff0000";
        break;
    }
};
// Обработаем событие Refreshed
map.Refreshed.add(function (sender, args) {
    for (var i in args.getMetadata()) {
        var data = state.getMetadata()[i];
        switch (data.Name) {
        case "mapmaster.stylespanel.borderthickness":
            console.log("Толщина границы легенды: " + data.Value);
            break;
        case "mapmaster.stylespanel.border":
            console.log("Цвет границы: " + data.Value);
            break;
        }
    }
});
// Обновим карту, используя новые настройки
map.refreshView(state);
// Скроем расшифровку карты
map.getMapTerritoryTranscript().hide();

После выполнения примера для границы легенды карты была установлена новая толщина и цвет:


![](MapChart_refreshView.png)


В результате наступления события [Refreshed](MapChart.Refreshed.htm) в консоли браузера были выведены значения изменённых свойств карты:


Цвет границы: #ff0000


Толщина границы легенды: 3


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

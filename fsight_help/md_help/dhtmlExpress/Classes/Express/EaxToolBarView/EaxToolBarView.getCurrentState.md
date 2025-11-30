# EaxToolBarView.getCurrentState

EaxToolBarView.getCurrentState
-


**


# EaxToolBarView.getCurrentState


## Синтаксис


getCurrentState();


## Описание


Метод getCurrentState** возвращает текущее состояние группы кнопок, используемых для переключения режима отображения данных.


## Комментарии


Метод возвращает JSON-объект, содержащий следующие свойства: grid, map, chart, bubbleChart. Каждое из них представляет собой объект и содержит свойства visible и enabled, определяющих видимость и доступность таблицы, карты, диаграммы и пузырьковой диаграммы соответственно.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Узнаем программно, какие кнопки являются доступными:


// Получим представление группы кнопок для выбора режима отображения данных
var toolBar = expressBox.getDataView().getToolBarView();
// Получим их текущее состояние
var state = toolBar.getCurrentState();
console.log("Is bubbleChart is available: " + state.bubbleChart.enabled);
console.log("Is chart is available: " + state.chart.enabled);
console.log("Is grid is available: " + state.grid.enabled);
console.log("Is map is available: " + state.map.enabled);

В результате выполнения примера в консоль браузера были выведены данные о доступности кнопок, из которых видно, что кнопка «Карта» недоступна:


Is bubbleChart is available: true

Is chart is available: true

Is grid is available: true

Is map is available: false


См. также:


[EaxToolBarView](EaxToolBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

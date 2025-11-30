# EaxCategoryView.getChartDataSourceState

EaxCategoryView.getChartDataSourceState
-


# EaxCategoryView.getChartDataSourceState


## Синтаксис


getChartDataSourceState();


## Описание


Метод getChartDataSourceState
 определяет диапазон данных, представленных на визуализаторах.


## Комментарии


Метод возвращает JSON-объект с полем useGridSelection,
 который определяет, представлены ли на визуализаторах данные выделенной
 области таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Определим, какой диапазон данных
 представлен на визуализаторах:


// Получаем представление вкладки «Данные»
var category = expressBox.getRibbonView().getDataCategory();
// Определяем диапазон данных, представленных на визуализаторах
var state = category.getChartDataSourceState();
if (state) {
    if (state.useGridSelection) {
        console.log("На визуализаторах представлены данные выделенной области таблицы");
    } else {
        console.log("На визуализаторах представлены данные всей таблицы");
    }
}
В результате выполнения примера в консоль браузера будет выведено сообщение
 о том, что на визуализаторах представлены данные всей таблицы.


См.
 также:


[EaxCategoryView](EaxCategoryView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

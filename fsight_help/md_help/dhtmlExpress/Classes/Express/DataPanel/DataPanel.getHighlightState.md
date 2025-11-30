# DataPanel.getHighlightState

DataPanel.getHighlightState
-


# DataPanel.getHighlightState


## Синтаксис


getHighlightState ();


## Описание


Метод getHighlightState возвращает минимальное и максимальное значения подсветки элементов измерения.


## Комментарии


Метод возвращает JSON-объект с полями min и max. Если флажок «Подсветить значения между» на вкладке «Данные» не установлен, то возвращает undefined.


## Пример


Для выполнения примера предполагается наличие на странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» и сервиса для работы с экспресс-отчетами с наименованием «eaxMdService» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). На вкладке «Данные» установите флажок «Подсветить значения между» и введите значения в числовые редакторы. Выведем в консоль значения числовых редакторов:


propBar = expressBox.getPropertyBarView();
dataP = propBar.getDataPanel();
state - dataP.getHighlightState();
console.log("Минимальное значение:" +  state.min);
console.log("Максимальное значение:" +  state.max);

После выполнения примера в консоль браузера будут выведены значения числовых редакторов для ввода минимального и максимального значений подсветки элементов измерения.


См. также:


[DataPanel](DataPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# EaxAnalyzer.TabSheetChangedState

EaxAnalyzer.TabSheetChangedState
-


**


# EaxAnalyzer.TabSheetChangedState


## Синтаксис


TabSheetChangedState: Object


## Описание


Свойство TabSheetChangedState** содержит измененные настройки листа экспресс-отчета.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setTabSheetChangedState, а возвращается с помощью метода getTabSheetChangedState.


Свойство содержит значение в виде массива JSON-объектов со следующими полями: leftColumn - индекс левой видимой колонки, topRow - индекс верхней видимой строки таблицы экспресс-отчета, size - размер видимой части таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Прокрутим содержимое таблицы вниз и вправо с помощью вертикальной и горизонтальных полос прокруток. Затем получим индексы верхней строки и левого столбца, а также размеры видимости части таблицы экспресс-отчета:


var eaxAnalyzer = expressBox.getSource();
// Получаем настройки листа экспресс-отчета
var state = eaxAnalyzer.getTabSheetChangedState();
console.log("Left column: " + state.leftColumn);
console.log("Top row: " + state.topRow);
// Получаем размер видимой области таблицы экспресс-отчета
var size = state.size;
console.log("Width:" + size.width + ", " + "height: " + size.height);

В результате выполнения примера в консоли браузера будут выведены индексы верхней видимой строки и левого видимого столбца таблицы экспресс-отчета, а также размеры её видимой части:


Left column: 8

Top row: 26

Width:866, height: 390


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

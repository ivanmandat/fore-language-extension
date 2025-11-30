# BubbleChart.selectItems

BubbleChart.selectItems
-


# BubbleChart.selectItems


## Синтаксис


selectItems(items: Object, reset: Boolean);


## Параметры


items. Массив выделяемых объектов;


reset. Признак снятия текущих
 выделений. Если параметр имеет значение true,
 то текущие выделения будут сняты, иначе - не будут.


## Описание


Метод selectItems устанавливает
 выделение для указанных пузырьков пузырьковой диаграммы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»).


Создадим и установим эффекты для выделенных и невыделенных элементов.
 Установим выделение для указанного элемента пузырьковой диаграммы:


// Создаем эффект выделения
var activeEffectSettings = {
    ROffset: 50,
    GOffset: 50,
    BOffset: 50,
    AOffset: 50
}
var activeEffect = new PP.Ui.HighlightEffect(activeEffectSettings);
// Создаем эффект выделения
var inactiveEffectSettings = {
    ROffset: -100,
    GOffset: -100,
    BOffset: -100,
    AOffset: -100
}
var inactiveEffect = new PP.Ui.HighlightEffect(inactiveEffectSettings);
// Устанавливаем эффекты для выделенных и невыделенных элементов
bubbleChart.setSelectActiveEffects([activeEffect]);
bubbleChart.setSelectInactiveEffects([inactiveEffect]);
// Устанавливаем выделение элементов
var selectedItems = {
    Serie0_Point0: true
}
bubbleChart.selectItems(selectedItems, true);
В результате будет установлено выделение элемента:


![](BubbleChart_selectItems.png)


Снимем выделение:


// Снимаем выделение элементов
bubbleChart.setSelectedItems();
// Обновляем пузырьковую диаграмму
bubbleChart.refresh();
В результате выделение будет снято.


[BubbleChart](BubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Slider.getItemByIndex

Slider.getItemByIndex
-


**


# Slider.getItemByIndex


## Синтаксис


getItemByIndex(index: Number);


## Параметры


*index. Индекс возвращаемого [бегунка](../SliderItem/SliderItem.htm).*


## Описание


Метод getItemByIndex** возвращает [бегунок](../SliderItem/SliderItem.htm) компонента [Slider](../../Components/Slider/Slider.htm) по указанному индексу.


## Комментарии


Метод возвращает значение типа [PP.Ui.SliderItem](../SliderItem/SliderItem.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [Slider](../../Components/Slider/Slider.htm) с наименованием «slider» (см. «[Пример создания компонента Slider](../../Components/Slider/Example_Slider.htm)» ). Получим [бегунок](../SliderItem/SliderItem.htm) с индексом 0 и выведем его идентификатор, получим отсортированный массив [бегунков](../SliderItem/SliderItem.htm) и выведем его длину, получим и выведем значение минимально возможного количества [бегунков](../SliderItem/SliderItem.htm), получим и выведем значение метки с индексом 0:


// Получим бегунок с индексом 0
var item = slider.getItemByIndex(0);
// Выведем идентификатор полученного бегунка
console.log("Идентификатор бегунка с индексом 0: " + item.getId());
// Получим отсортированный массив бегунков и выведем количество бегунков
console.log("Количество бегунков: " + slider.getSortedItems().length);
// Получим и выведем значение минимально возможного количества бегунков
console.log("Минимальное количество бегунков: " + slider.getMinItemsCount());
// Получим и выведем значение метки с индексом 0
console.log("Значение метки с индексом [0]: " + slider.getTickByIndex(0));

В результате выполнения примера в консоли браузера был выведен идентификатор [бегунка](../SliderItem/SliderItem.htm) с индексом 0, текущее и минимально возможное количество [бегунков](../SliderItem/SliderItem.htm), а также значение метки с индексом 0:


Идентификатор бегунка с индексом 0: SliderItem1


Количество бегунков: 2


Минимальное количество бегунков: 0


Значение метки с индексом [0]: 2001


См. также:


[ Slider](slider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

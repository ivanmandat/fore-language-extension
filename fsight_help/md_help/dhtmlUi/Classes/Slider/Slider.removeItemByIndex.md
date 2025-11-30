# Slider.removeItemByIndex

Slider.removeItemByIndex
-


**


# Slider.removeItemByIndex


## Синтаксис


removeItemByIndex(index: Number);


## Параметры


*index. Индекс удаляемого [бегунка](../SliderItem/SliderItem.htm).*


## Описание


Метод removeItemByIndex** удаляет *[бегунок](../SliderItem/SliderItem.htm) компонента [Slider](../../Components/Slider/Slider.htm) с указанным индексом*.


## Пример


Для выполнения примера предполагается наличие на странице компонента [Slider](../../Components/Slider/Slider.htm) с наименованием «slider» (см. «[Пример создания компонента Slider](../../Components/Slider/Example_Slider.htm)» ). Добавим новый *[бегунок](../SliderItem/SliderItem.htm)**, удалим* *[бегунки](../SliderItem/SliderItem.htm)* *с индексом 0 и идентификатором* «SliderItem2», удалим метку с индексом 0:


// Добавим новый бегунок со значением 0.5
slider.addItem(0.5);
// Удалим бегунок с идентификатором SliderItem2
slider.removeItemById("SliderItem2");
// Удалим бегунок с индексом 0
slider.removeItemByIndex(0);
// Удалим метку с индексом 0
slider.removeTickByIndex(0);

В результате выполнения примера был добавлен новый [бегунок](../SliderItem/SliderItem.htm) в центр компонента, были удалены *[бегунки](../SliderItem/SliderItem.htm)* *с индексом 0 и идентификатором* «SliderItem2», была удалена метка с индексом 0:


*![](Slider_removeItemByIndex.png)*


См. также:


[ Slider](slider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

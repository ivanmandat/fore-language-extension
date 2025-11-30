# SliderItem.Moved

SliderItem.Moved
-


**


# SliderItem.Moved


## Синтаксис


Moved: function(sender, args, timeout);


## Параметры


sender. Источник события;


args. Информация о событии;


timeout. Промежуток времени в миллисекундах, через который вызовется событие.


## Описание


Событие Moved** наступает при окончании изменения положения [бегунка](SliderItem.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [Slider](../../Components/Slider/Slider.htm) с наименованием «slider» (см. «[Пример создания компонента Slider](../../Components/Slider/Example_Slider.htm)» ). Обработаем следующие события: [Moved](SliderItem.Moved.htm), [Moving](SliderItem.Moving.htm), [ValueChange](SliderItem.ValueChange.htm), [ValueChanged](SliderItem.ValueChanged.htm), [ValueChanging](SliderItem.ValueChanging.htm):


// Получим бегунок с индексом 0
var sliderItem = slider.getItemByIndex(0);
// Определим флаги вызовов событий
var movingRaised = false;
var valueChangeRaised = false;
var valueChangingRaised = false;
// Обработаем событие Moved
sliderItem.Moved.add(function (sender, args, timeout) {
    console.log("Инициировано событие Moved")
});
// Обработаем событие Moving
sliderItem.Moving.add(function (sender, args, timeout) {
    // Выведем сообщение о вызове события только 1 раз
    if (!movingRaised) {
        console.log("Инициировано событие Moving")
        movingRaised = true;
    }
});
// Обработаем событие ValueChange
sliderItem.ValueChange.add(function (sender, args, timeout) {
    // Выведем сообщение о вызове события только 1 раз
    if (!valueChangeRaised) {
        console.log("Инициировано событие ValueChange")
        valueChangeRaised = true;
    }
});
// Обработаем событие ValueChanged
sliderItem.ValueChanged.add(function (sender, args, timeout) {
    console.log("Инициировано событие ValueChanged")
});
// Обработаем событие ValueChanging
sliderItem.ValueChanging.add(function (sender, args, timeout) {
    // Выведем сообщение о вызове события только 1 раз
    if (!valueChangingRaised) {
        console.log("Инициировано событие ValueChanging")
        valueChangingRaised = true;
    }
});

Переместим левый [бегунок](SliderItem.htm) компонента.


В результате выполнения примера в консоли браузера были выведены сообщения о вызове обработанных событий:


Инициировано событие ValueChange


Инициировано событие ValueChanging


Инициировано событие Moving


Инициировано событие ValueChanged


Инициировано событие Moved


См. также:


[ SliderItem](SliderItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

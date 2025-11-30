# RangeSlider.RangeChanged

RangeSlider.RangeChanged
-


**


# RangeSlider.RangeChanged


## Синтаксис


RangeChanged: function(sender, args, timeout);


## Параметры


sender. Источник события;


args. Информация о событии;


timeout. Промежуток времени
 в миллисекундах, через который вызовется событие.


## Описание


Событие RangeChanged**
 наступает при окончании изменения выбираемого [бегунками](../SliderItem/SliderItem.htm)
 диапазона значений.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RangeSlider](../../Components/RangeSlider/RangeSlider.htm)
 с наименованием «slider» (см. «[Пример
 создания компонента RangeSlider](../../Components/RangeSlider/Example_RangeSlider.htm)»). Обработаем следующие события: [RangeChanging](RangeSlider.RangeChanging.htm), [RangeChanged](RangeSlider.RangeChanged.htm):


// Определим счетчик вызванных событий
var eventsCount = 0;
// Обработаем событие RangeChanging
slider.RangeChanging.add(function (sender, args, timeout) {
    // Выведем сообщение о вызове события не более 2 раз
    if (eventsCount < 2) {
        console.log("Инициировано событие RangeChanging")
        eventsCount++;
    }
});
// Обработаем событие RangeChanged
slider.RangeChanged.add(function (sender, args, timeout) {
    console.log("Инициировано событие RangeChanged")
});

Переместим [бегунок](../SliderItem/SliderItem.htm) компонента.


В результате выполнения примера в консоли браузера были выведены сообщения
 о вызове обработанных событий:


Инициировано событие RangeChanging


Инициировано событие RangeChanging


Инициировано событие RangeChanged


См. также:


[ RangeSlider](RangeSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

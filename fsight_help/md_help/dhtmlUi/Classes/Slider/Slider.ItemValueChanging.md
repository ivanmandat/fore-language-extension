# Slider.ItemValueChanging

Slider.ItemValueChanging
-


**


# Slider.ItemValueChanging


## Синтаксис


ItemValueChanging: function(sender, args, timeout);


## Параметры


sender. Источник события;


args. Информация о событии;


timeout. Промежуток времени в миллисекундах, через который вызовется событие.


## Описание


Событие ItemValueChanging** наступает при изменении значения [бегунка](../SliderItem/SliderItem.htm) компонента [Slider](../../Components/Slider/Slider.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [Slider](../../Components/Slider/Slider.htm) с наименованием «slider» (см. «[Пример создания компонента Slider](../../Components/Slider/Example_Slider.htm)» ). Обработаем и вызовем событие ItemValueChanging:


// Обработаем событие ItemValueChanging
slider.ItemValueChanging.add(function (sender, args, timeout) {
    console.log("Инициировано событие ItemValueChanging")
});
// Вызовем обработанное событие с задержкой, равной 500 миллисекунд
slider.ItemValueChanging.fire(this, [], 500);

В результате выполнения примера в консоли браузера было выведено сообщение о вызове обработанного события:


Инициировано событие ItemValueChanging


См. также:


[ Slider](slider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

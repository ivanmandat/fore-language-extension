# Slider.ItemValueChanged

Slider.ItemValueChanged
-


**


# Slider.ItemValueChanged


## Синтаксис


ItemValueChanged: function(sender, args, timeout);


## Параметры


sender. Источник события;


args. Информация о событии;


timeout. Промежуток времени
 в миллисекундах, через который вызовется событие.


## Описание


Событие ItemValueChanged**
 наступает при окончании изменения значения [бегунка](../SliderItem/SliderItem.htm)
 компонента [Slider](../../Components/Slider/Slider.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [Slider](../../Components/Slider/Slider.htm) с наименованием
 «slider» (см. «[Пример
 создания компонента Slider](../../Components/Slider/Example_Slider.htm)»). Обработаем событие ItemValueChanged,
 получим [бегунок](../SliderItem/SliderItem.htm) и изменим его
 значение:


// Обработаем событие ItemValueChanged
slider.ItemValueChanged.add(function (sender, args, timeout) {
    console.log("Инициировано событие ItemValueChanged")
});
// Получим бегунок
var item = slider.getItemByIndex(0);
// Изменим значение бегунка
item.setValue(0.2);

В результате выполнения примера в консоли браузера было выведено сообщение
 о вызове обработанного события:


Инициировано событие ItemValueChanged


См. также:


[ Slider](slider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Slider.getItemById

Slider.getItemById
-


**


# Slider.getItemById


## Синтаксис


getItemById(id: String);


## Параметры


*id. Идентификатор возвращаемого* *[бегунка](../SliderItem/SliderItem.htm).*


## Описание


Метод getItemById** возвращает [бегунок](../SliderItem/SliderItem.htm) компонента [Slider](../../Components/Slider/Slider.htm) по указанному идентификатору.


## Комментарии


Метод возвращает значение типа [PP.Ui.SliderItem](../SliderItem/SliderItem.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [Slider](../../Components/Slider/Slider.htm) с наименованием «slider» (см. «[Пример создания компонента Slider](../../Components/Slider/Example_Slider.htm)» ). Получим бегунок по идентификатору и выведем значения его высоты и ширины:


// Получим бегунок по идентификатору
var item = slider.getItemById("SliderItem1");
// Выведем значения высоты и ширины полученного бегунка
console.log("Ширина бегунка: " + item.getWidth() + ", высота бегунка: " + item.getHeight());

В результате выполнения примера в консоли браузера были выведены значения высоты и ширины полученного бегунка:


Ширина бегунка: 25, высота бегунка: 15


См. также:


[ Slider](slider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

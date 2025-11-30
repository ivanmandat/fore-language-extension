# Slider.MoveOnClick

Slider.MoveOnClick
-


**


# Slider.MoveOnClick


## Синтаксис


MoveOnClick: Boolean


## Описание


Свойство MoveOnClick определяет, будет ли перемещаться [бегунок](../SliderItem/SliderItem.htm) при нажатии на компонент [Slider](../../Components/Slider/Slider.htm).


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setMoveOnClick**, а возвращается с помощью метода get**MoveOnClick**.


Если свойство имеет значение true, [бегунок](../SliderItem/SliderItem.htm) будет перемещаться при щелчке мыши, иначе - не будет.


Перемещение [бегунка](../SliderItem/SliderItem.htm) будет осуществляться только тогда, когда на компоненте [Slider](../../Components/Slider/Slider.htm) присутствует только один [бегунок](../SliderItem/SliderItem.htm).


По умолчанию свойство имеет значение false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [Slider](../../Components/Slider/Slider.htm) с наименованием «slider» (см. «[Пример создания компонента Slider](../../Components/Slider/Example_Slider.htm)» ). Удалим бегунок с индексом 1, установим возможность перемещения [бегунка](../SliderItem/SliderItem.htm) по щелчку мыши:


// Удалим бегунок с индексом 1
slider.removeItemByIndex(1);
// Установим возможность перемещения бегунка по щелчку мыши
slider.setMoveOnClick(true);

Щёлкнем по центру компонента.


В результате выполнения примера был удален бегунок с индексом 1, бегунок с индексом 0 был перемещен в центр компонента [Slider](../../Components/Slider/Slider.htm):


![](Slider_MoveOnClick.png)


См. также:


[ Slider](slider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

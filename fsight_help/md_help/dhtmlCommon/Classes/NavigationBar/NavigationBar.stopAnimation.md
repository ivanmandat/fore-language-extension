# NavigationBar.stopAnimation

NavigationBar.stopAnimation
-


# NavigationBar.stopAnimation


## Синтаксис


stopAnimation();


## Описание


Метод stopAnimation останавливает
 анимацию в панели свойств.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigationBar](../../Components/NavigationBar/NavigationBar.htm)
 с наименованием «navigationBar» (см. «[Пример
 создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Раскрываем второй элемент панели
 и останавливаем воспроизведение анимации в панели свойств.


// Раскрываем второй элемент
navigationBar.getLayoutItems()[1].expand();
// Останавливаем воспроизведение анимации в панели свойств
navigationBar.stopAnimation();
В результате элемент раскроется без воспроизведения анимации.


См. также:


[NavigationBar](NavigationBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

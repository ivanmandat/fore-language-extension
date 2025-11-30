# NavigationBar.isAnimation

NavigationBar.isAnimation
-


# NavigationBar.isAnimation


## Синтаксис


isAnimation();


## Описание


Метод isAnimation возвращает
 признак выполнения анимации в панели свойств.


## Комментарии


Метод возвращает значение true,
 если выполняется анимация в панели свойств, иначе - значение false.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigationBar](../../Components/NavigationBar/NavigationBar.htm)
 с наименованием «navigationBar» (см. «[Пример
 создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Раскрываем первый элемент панели
 и проверяем выполнение анимации:


// Раскрываем первый элемент панели
navigationBar.getLayoutItems()[0].expand();
// Проверяем, выполняется ли анимация панели свойств
if (navigationBar.isAnimation()) {
    console.log("Выполняется анимация в панели свойств");
} else {
    console.log("Анимация в панели свойств не выполняется");
}
В результате в консоль будет выведен результат проверки выполнения анимации:


Выполняется анимация в панели свойств


См. также:


[NavigationBar](NavigationBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

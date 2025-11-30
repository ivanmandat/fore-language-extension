# NavigationItem.getIsRendered

NavigationItem.getIsRendered
-


# NavigationItem.getIsRendered


## Синтаксис


getIsRendered();


## Описание


Метод getIsRendered возвращает
 признак отрисовки вкладки


## Комментарии


Метод возвращает значение true,
 если вкладка была отрисованна, иначе - значение false.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigationBar](../../Components/NavigationBar/NavigationBar.htm)
 с наименованием «navigationBar» (см. «[Пример
 создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Проверяем признак отрисовки второго
 элемента:


// Проверяем признак отрисовки 2 вкладки
if (navigationBar.getLayoutItems()[1].getIsRendered()) {
    console.log("Второй элемент отрисован");
} else {
    console.log("Второй элемент не отрисован");
}
В результате в консоль будет выведен результат проверки отрисовки второго
 элемента:


Второй элемент отрисован


См. также:


[NavigationItem](NavigationItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

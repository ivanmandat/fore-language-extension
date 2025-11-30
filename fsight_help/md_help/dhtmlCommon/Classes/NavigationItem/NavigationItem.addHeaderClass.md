# NavigationItem.addHeaderClass

NavigationItem.addHeaderClass
-


# NavigationItem.addHeaderClass


## Синтаксис


addHeaderClass(className: String);


## Параметры


className. Имя добавляемого
 css-класса.


## Описание


Метод addHeaderClass добавляет
 css-класс к DOM-вершине вкладки.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigationBar](../../Components/NavigationBar/NavigationBar.htm)
 с наименованием «navigationBar» (см. «[Пример
 создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Добавляем к DOM-вершине первой
 вкладки новый класс:


// Добавляем к DOM-вершине первой вкладки новый класс
navigationBar.getLayoutItems()[0].addHeaderClass("New Class");
См. также:


[NavigationItem](NavigationItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

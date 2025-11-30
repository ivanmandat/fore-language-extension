# TitleCatView.refresh

TitleCatView.refresh
-


**


# TitleCatView.refresh


## Синтаксис


refresh();


## Описание


Метод refresh** обновляет вкладку ленты инструментов «Заголовок» экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента ExpressBox с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Обновим вкладку ленты инструментов «Заголовок»:


// Получим представление вкладки «Таблица»
var category = expressBox.getRibbonView().getTitleCategory();
// Обновляем вкладку ленты инструментов «Заголовок»
category.refresh();

В результате выполнения примера вкладка ленты инструментов «Заголовок» будет обновлена.


См. также:


[TitleCatView](TitleCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

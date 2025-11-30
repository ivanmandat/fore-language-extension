# TableCatView.refreshTableStyleButton

TableCatView.refreshTableStyleButton
-


**


# TableCatView.refreshTableStyleButton


## Синтаксис


refreshTableStyleButton(button);


## Параметры


*button.* Кнопка, которую нужно обновить.


## Описание


Метод refreshTableStyleButton** обновляет из модели кнопку «Стиль и оформление» на вкладке ленты инструментов «Таблица».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента ExpressBox с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Обновим кнопку «Стиль и оформление»:


// Получим представление вкладки «Таблица»
var category = expressBox.getRibbonView().getTableCategory();
// Получим кнопку «Стиль и оформление»
var button = category._TableStyleListBox;
// Обновим кнопку
category.refreshTableStyleButton(button);

В результате выполнения примера обновим кнопку «Стиль и оформление» на ленте инструментов экспресс-отчета.


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

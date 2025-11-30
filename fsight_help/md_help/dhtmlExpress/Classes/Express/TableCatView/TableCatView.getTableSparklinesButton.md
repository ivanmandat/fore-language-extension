# TableCatView.getTableSparklinesButton

TableCatView.getTableSparklinesButton
-


# TableCatView.getTableSparklinesButton


## Синтаксис


getTableSparklinesButton();


## Описание


Метод getTableSparklinesButton
 возвращает кнопку «Линии» вкладки ленты инструментов «Таблица».


## Комментарии


Возвращаемое значение - объект класса PP.Ui.[RibbonButton](dhtmlRibbon.chm::/Classes/RibbonButton/RibbonButton.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Переименуем кнопку «Линии»:


// Получаем представление вкладки «Таблица»
var category = expressBox.getRibbonView().getTableCategory();
// Меняем название кнопки
category.getTableSparklinesButton().setContent("Настройки линий");
В результате кнопка будет иметь новое название.


См.
 также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

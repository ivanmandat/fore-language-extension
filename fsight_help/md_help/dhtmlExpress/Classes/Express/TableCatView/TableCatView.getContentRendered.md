# TableCatView.getContentRendered

TableCatView.getContentRendered
-


# TableCatView.getContentRendered


## Синтаксис


getContentRendered();


## Описание


Метод getContentRendered возвращает
 признак отрисовки элементов вкладки ленты инструментов «Таблица».


## Комментарии


Метод возвращает значение true,
 если элементы отрисованы, иначе - значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Проверим, отрисованы ли элементы
 из вкладки ленты инструментов «Таблица», если элементы не отрисованы,
 то отрисовываем их:


// Получаем представление вкладки «Таблица»
var category = expressBox.getRibbonView().getTableCategory();
// Проверяем, отрисованы ли элементы
if (category.getContentRendered()) {
    console.log("Элементы вкладки отрисованы");
} else {
    console.log("Элементы вкладки не отрисованы");
    category.renderContent();
}
В результате в консоль будет выведено сообщение о проверке отрисовки
 элементов:


Элементы вкладки не отрисованы


Элементы вкладки «Таблица» будут отрисованы после вызова метода [TableCatView.renderContent](TableCatView.renderContent.htm).


См.
 также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

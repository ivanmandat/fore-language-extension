# DataCatView.getContentRendered

DataCatView.getContentRendered
-


# DataCatView.getContentRendered


## Синтаксис


getContentRendered();


## Описание


Метод getContentRendered возвращает
 признак отрисовки элементов вкладки ленты инструментов «Данные».


## Комментарии


Метод возвращает значение true,
 если элементы отрисованы, иначе - значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Проверим, отрисованы ли элементы
 из вкладки ленты инструментов «Данные», если элементы не отрисованы, то
 отрисовываем их:


// Получаем представление вкладки «Данные»
var category = expressBox.getRibbonView().getDataCategory();
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


Элементы вкладки «Данные» будут отрисованы.


См. также:


[DataCatView](DataCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

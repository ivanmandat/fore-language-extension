# GxTitle.Visible

GxTitle.Visible
-


# GxTitle.Visible


## Синтаксис


Visible: Boolean


## Описание


Свойство Visible определяет
 видимость заголовка.


## Комментарии


Допустимые значения:


	- true.
	 Заголовок отображен (по умолчанию);


	- false.
	 Заголовок не отображен.


Значение свойства устанавливается из JSON и с помощью метода setVisible,
 а возвращается с помощью метода getVisible.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для появления заголовка необходимо
 нажать на кнопку «Заголовок» на вкладке «Главная». Проверим видимость
 заголовка:


// Получаем заголовок
var title = expressBox.getDataView().getTitleView();
// Проверяем видимость заголовка
if (title.getVisible()) {
    console.log("Заголовок отображен");
} else {
    console.log("Заголовок не отображен");
}
В результате в консоль будет выведен результат проверки видимости заголовка:


Заголовок видим


См. также:


[GxTitle](GxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

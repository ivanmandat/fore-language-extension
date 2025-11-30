# GxTitle.Options

GxTitle.Options
-


# GxTitle.Options


## Синтаксис


Options: Object


## Описание


Свойство Options определяет
 настройки заголовка экспресс-отчета.


## Комментарии


Значение свойства устанавливается с помощью метода setOptions,
 а возвращается с помощью метода getOptions.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для появления заголовка необходимо
 нажать на кнопку «Заголовок» на вкладке «Главная». Получим цвет фона заголовка
 экспресс-отчета:


// Получаем заголовок
var title = expressBox.getDataView().getTitleView();
// Получаем фоновый цвет заголовка
console.log("Фоновый цвет заголовка: " + title.getOptions().backgroundColor);
В результате в консоль будет выведен цвет фона заголовка:


Фоновый цвет заголовка: #FFFFFF


См. также:


[GxTitle](GxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

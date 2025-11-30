# GxTitle.Text

GxTitle.Text
-


# GxTitle.Text


## Синтаксис


Text: String


## Описание


Свойство Text содержит неотформатированное
 значение текста заголовка.


## Комментарии


Значение свойства устанавливается с помощью метода setText,
 а возвращается с помощью метода getText.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для появления заголовка необходимо
 нажать на кнопку «Заголовок» на вкладке «Главная». Получим неотформатированное
 значение текста заголовка:


// Получаем заголовок
var title = expressBox.getDataView().getTitleView();
// Получаем неотформатированное значение текста заголовка
console.log("Неотформатированное значение текста заголовка: " + title.getText());
В результате в консоль будет выведено неотформатированное значение текста
 заголовка:


Неотформатированное значение текста заголовка: &[DIMENSIONS.D_SRC],
 &[DIMENSIONS.D_SEP], &[DIMENSIONS.FACTS]


См. также:


[GxTitle](GxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

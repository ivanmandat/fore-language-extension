# GxTitle.HyperlinkClick

GxTitle.HyperlinkClick
-


# GxTitle.HyperlinkClick


## Синтаксис


HyperlinkClick: function(sender, args)


## Параметры


sender. Источник события;


args. Информация
 о событии. Аргументы: Event
 - произошедшее событие; Element
 - гиперссылка, по которой произошло нажатие; Break
 - признак отмены события (если установлено значение true,
 то событие отменено, иначе - разрешено).


## Описание


Событие HyperlinkClick наступает
 после нажатия по гиперссылке заголовка.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для появления заголовка
 необходимо нажать на кнопку «Заголовок» на вкладке «Главная». Добавим
 обработчик события нажатия по гиперссылке заголовка:


// Получаем заголовок
var title = expressBox.getDataView().getTitleView();
// Добавляем обработчик события нажатия по гиперссылке заголовка
title.HyperlinkClick.add(function(sender, args) {
    console.log("Произошло нажатие на гиперссылку заголовка");
})
После нажатия на гиперссылку заголовка будет открыто раскрывающееся
 меню и в консоль будет выведено сообщение о нажатии на гиперссылку:


Произошло нажатие на гиперссылку заголовка


См. также:


[GxTitle](GxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

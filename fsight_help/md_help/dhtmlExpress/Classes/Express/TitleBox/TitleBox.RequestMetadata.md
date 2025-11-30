# TitleBox.RequestMetadata

TitleBox.RequestMetadata
-


**


# TitleBox.RequestMetadata


## Синтаксис


RequestMetadata: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestMetadata** генерируется при отсутствии метаданных в источнике данных заголовка экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обработаем событие запроса метаданных, обновляя все содержимое заголовка экспресс-отчета:


// Получаем представление заголовка экспресс-отчета
var titleView = expressBox.getDataView().getTitleView();
// Обработаем событие RequestMetadata
titleView.RequestMetadata.add( function() {
    if (titleView.getNeedValidate()) {
        titleView.getInstance().refreshAll();
    }
}
);

В результате выполнения примера при наступления события запроса метаданных RequestMetadata будет обновляться все содержимое заголовка экспресс-отчета.


См. также:


[TitleBox](TitleBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

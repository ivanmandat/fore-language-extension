# WbkRibbonView.DisplayTreeChanged

WbkRibbonView.DisplayTreeChanged
-


# WbkRibbonView.DisplayTreeChanged


## Синтаксис


DisplayTreeChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие DisplayTreeChanged наступает после отображения или скрытия дерева рядов.


## Комментарии


Для генерации события необходимо нажать/отжать верхнюю часть кнопки «Дерево рядов» на вкладке ленты «Главная».


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Подписываемся на событие изменения внешнего вида дерева рядов
ribbonView.DisplayTreeChanged.add(function()
{
alert('Изменена видимость дерева рядов');
});

После выполнения примера при нажатии на верхнюю часть кнопку кнопки «Дерево рядов» на вкладке ленты «Главная» на экран будет выводиться сообщение «Изменена видимость дерева рядов».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

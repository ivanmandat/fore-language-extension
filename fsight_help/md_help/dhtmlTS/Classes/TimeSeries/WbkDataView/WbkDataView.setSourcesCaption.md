# WbkDataView.setSourcesCaption

WbkDataView.setSourcesCaption
-


# WbkDataView.setSourcesCaption


## Синтаксис


setSourcesCaption (caption);


## Параметры


caption. Текст надписи.


## Описание


Метод setSourcesCaption устанавливает название источника данных, которое будет отображаться в цепочке навигации.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm) c наименованием «wbkDataBox» (см. «[Конструктор WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Задаем надпись в навигационной цепочке
wbkDataBox.setSourcesCaption("Источник");

После выполнения примера название источника данных, которое отображается в навигационной цепочке, будет изменено на «Источник»:


![](setSourcesCaption1.PNG)


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

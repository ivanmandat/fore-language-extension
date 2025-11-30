# WbkDataView.createTabControl

WbkDataView.createTabControl
-


# WbkDataView.createTabControl


## Синтаксис


createTabControl();


## Описание


Метод createTabControl создает
 панель управления листами.


## Комментарии


Использование метода актуально, если панель не была создана ранее. По
 умолчанию панель создается автоматически.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm)
 c наименованием «wbkDataBox» (см. «[Конструктор
 WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»).


// Получим рабочую область
wbkDV = workbookBox.getDataView();
// Создадим панель управления листами
wbkDV.createTabControl();

В результате выполнения примера будет создана панель управления листами.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

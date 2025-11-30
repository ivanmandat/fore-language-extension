# DataCatView.getUnbindButton

DataCatView.getUnbindButton
-


# DataCatView.getUnbindButton


## Синтаксис


getUnbindButton();


## Описание


Метод getUnbindButton возвращает
 кнопку «Отвязать».


## Комментарии


Метод возвращает объект типа PP.Ui.[RibbonButton](dhtmlRibbon.chm::/Classes/RibbonButton/RibbonButton.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Переименуем кнопки «Сохранить изменения»
 и «Отменить изменения», затем обновим вкладку «Данные», на которой они
 расположены:


// Получим ленту инструментов
var ribbon = workbookBox.getRibbonView();
// Получим вкладку «Данные»
var dataCatView = ribbon.getDataCategory();
// Получим кнопки «Блокировать» и «Отвязать»
var UnbindButton = dataCatView.getUnbindButton();
var ConsolidateButton = dataCatView.getConsolidateButton();
// Переименуем кнопки
UnbindButton .setContent("Отвязать ряд");
ConsolidateButton .setContent("Блокировать ряд");
// Обновим вкладку «Данные»
dataCatView.refresh();

В результате выполнения примера кнопки «Блокировать» и «Отвязать», расположенные
 на вкладке «Данные» ленты инструментов рабочей книги, были переименованы
 соответственно в «Отвязать ряд» и «Блокировать ряд».


См. также:


[DataCatView](DataCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

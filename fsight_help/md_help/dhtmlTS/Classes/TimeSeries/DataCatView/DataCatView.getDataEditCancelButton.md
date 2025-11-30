# DataCatView.getDataEditCancelButton

DataCatView.getDataEditCancelButton
-


# DataCatView.getDataEditCancelButton


## Синтаксис


getDataEditCancelButton();


## Описание


Метод getDataEditCancelButton
 возвращает кнопку «Отменить изменения».


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
// Получим кнопки «Сохранить измерения» и «Отменить изменения»
var dataEditSaveButton = dataCatView.getDataEditSaveButton();
var dataEditCancelButton = dataCatView.getDataEditCancelButton();
// Переименуем кнопки
dataEditSaveButton.setContent("Сохранить");
dataEditCancelButton.setContent("Отменить");
// Обновим вкладку «Данные»
dataCatView.refresh();

В результате выполнения примера кнопки «Сохранить изменения» и «Отменить
 изменения», расположенные на вкладке «Данные» ленты инструментов рабочей
 книги, были переименованы соответственно в «Сохранить» и «Отменить»:


![](DataCatView.getDataEditCancelButton.png)


См. также:


[DataCatView](DataCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

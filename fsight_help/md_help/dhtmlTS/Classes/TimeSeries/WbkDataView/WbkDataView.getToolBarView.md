# WbkDataView.getToolBarView

WbkDataView.getToolBarView
-


# WbkDataView.getToolBarView


## Синтаксис


getToolBarView();


## Описание


Метод getToolBarView возвращает
 группу кнопок для выбора варианта представления данных.


## Комментарии


Возвращает экземпляр класса [WbkToolBarView](../WbkToolBarView/WbkToolBarView.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm)
 c наименованием «wbkDataBox» (см. «[Конструктор
 WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо в обработчике события открытия документа
 добавить следующий код:


//получаем объект - компонент для отображения панели инструментов управления видимостью представлений отчета (экземпляр класса PP.TS.Ui.WbkToolBarView)
var toolBarView = wbkDataBox.getToolBarView();
//Получаем объект кнопки «Диаграмма» - экземпляр класса PP.Ui.ToolBarButton
var chartButton = toolBarView.getChartButton();
//Устанавливаем признак того, что курсор наведен на кнопку
chartButton.setIsHovered(true);

После выполнения примера на странице отобразится компонент [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm),
 где кнопка «Диаграмма» при первоначальном отображении будет выглядеть
 как при наведении на неё курсора.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

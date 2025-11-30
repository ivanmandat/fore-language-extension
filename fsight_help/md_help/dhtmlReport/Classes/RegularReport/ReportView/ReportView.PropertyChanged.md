# ReportView.PropertyChanged

ReportView.PropertyChanged
-


# ReportView.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие PropertyChanged наступает при сохранении измененных данных отчета.


## Комментарии


Сохранение измененных данных происходит при нажатии на кнопку «Сохранить изменения» ленты инструментов.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox». Добавим обработчик события PropertyChanged:


reportBox.PropertyChanged.add(function (sender, args) {


      reportBox.getDataView().showControlBar(false);


})


После выполнения примера при нажатии на кнопку «Сохранить изменения» будет скрыта панель элементов управления.


См. также:


[ReportView](ReportView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

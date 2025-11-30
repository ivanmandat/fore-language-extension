# PP.Prx.Ui.GridView.AutoUpdateByHandler

PP.Prx.Ui.GridView.AutoUpdateByHandler
-


# GridView.AutoUpdateByHandler


## Синтаксис


AutoUpdateByHandler: Boolean;


## Описание


Свойство AutoUpdateByHandler
 определяет признак частичного или полного обновления ячеек таблицы после
 [обработки
 события](UIReport.chm::/Desktop/Reports/Event/UiReport_Reports_Event.htm), подключенного к регламентному отчёту.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 После обработки события в регламентном отчёте обновляются все ячейки
	 таблицы;


	- False. После обработки
	 события в регламентном отчёте обновляются только изменённые ячейки
	 таблицы.


Примечание.
 Если обработчик событий не подключен к регламентному отчёту, то при ручном
 изменении значения ячейки будет автоматически выполняться только её обновление,
 даже если свойство AutoUpdateByHandler
 принимает значение True.


Значение свойства устанавливается с помощью метода setAutoUpdateByHandler,
 а возвращается с помощью метода getAutoUpdateByHandler.


Например, для выполнения заданного алгоритма действий при изменении
 значения ячейки регламентного отчёта используйте событие [ReportEvents.OnCellChange](KeReport.chm::/Class/ReportEvents/ReportEvents.OnCellChange.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Убедитесь, что в репозитории содержится
 регламентный отчёт с ключом 3275, в котором содержится таблица с данными
 и подключен [модуль
 обработки событий](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm), выполняющий событие [ReportEvents.OnCellChange](KeReport.chm::/Class/ReportEvents/ReportEvents.OnCellChange.htm).
 Указанный ниже сценарий должен быть выполнен в консоли браузера:


// Получим представление области данных
dataView = reportBox.getDataView();
// Получим таблицу
gridView = dataView.getGridView();
// Обновим только изменённые ячейки таблицы
gridView.setAutoUpdateByHandler(false);

После выполнения примера будет выполнена обработка события, подключенного
 к регламентному отчёту, и обновлены только изменённые ячейки таблицы.


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

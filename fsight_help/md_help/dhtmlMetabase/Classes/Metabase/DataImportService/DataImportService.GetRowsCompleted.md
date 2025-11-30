# DataImportService.GetRowsCompleted

DataImportService.GetRowsCompleted
-


# DataImportService.GetRowsCompleted


## Синтаксис


GetRowsCompleted: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие GetRowsCompleted наступает при загрузке рядов в таблицу.


## Комментарии


Чтобы загрузить в таблицу те ряды, которые изначально не были загружены, нажмите на текст «Загрузить следующие 10 записей...» на [первом этапе](../ImportColumnsStep/ImportColumnsStep.htm) мастера импорта данных.


## Пример


Для выполнения примера предполагается наличие на странице компонента [ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard.htm) и сервиса для работы с импортом данных с наименованием «dataImportService» (см. «[Пример создания компонента ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard_Example.htm)»). Добавим обработчик события GetRowsCompleted:


dataImportService.GetRowsCompleted.add(function (sender, args)


{


    alert("RowsCompleted")


});


После выполнения примера при нажатии на текст «Загрузить следующие 10 записей...» на [первом этапе](../ImportColumnsStep/ImportColumnsStep.htm) мастера импорта данных будет выдаваться сообщение «RowsCompleted».


См. также:


[DataImportService](DataImportService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

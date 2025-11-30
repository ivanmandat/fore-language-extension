# DataImportService.launchImport

DataImportService.launchImport
-


# DataImportService.launchImport


## Синтаксис


launchImport (cubeImport, settings)


## Параметры


cubeImport. Модель импорта;


settings. JSON-объект с настройками.


## Описание


Метод launchImport запускает импорт данных с заданными настройками.


## Комментарии


Данный метод срабатывает при нажатии на кнопку «Готово» на последней странице мастера импорта данных.


## Пример


Для выполнения примера предполагается наличие на странице компонента [ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard.htm) с наименованием «importDataWizard» и сервиса для работы с импортом данных с наименованием «dataImportService» (см. «[Пример создания компонента ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard_Example.htm)»). Запустим импорт с заданными на страницах мастера настройками:


cubeImp = importDataWizard.[getCubeImport](../ImportDataWizard/ImportDataWizard.CubeImport.htm)()


dataImportService.launchImport(cubeImp, importDataWizard.getWizardSettings())


См. также:


[DataImportService](DataImportService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

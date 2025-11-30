# DataImportService.setTable

DataImportService.setTable
-


# DataImportService.setTable


## Синтаксис


setTable (cubeImport, sheetName, callback, errorCallback)


## Параметры


cubeImport. Модель объекта
 импорта в куб, экземпляр класса [PP.Mb.CubeImport](../CubeImport/CubeImport.htm).


sheetName. Название
 табличного листа.


callback.
 Функция обратного вызова.


errorCallback.
 Функция обратного вызова при ошибке.


## Описание


Метод setTable устанавливает
 активный табличный лист.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard.htm)
 с наименованием «importDataWizard» и сервиса для работы с импортом данных
 с наименованием «dataImportService» (см. «[Пример
 создания компонента ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard_Example.htm)»), и выбранным объектом импорта.
 Установим активный табличный лист:


// Получим объект импорта
cube = importDataWizard.getCubeImport();
// Получим наименование второго листа
sheetN = cube.getMetadata().tables.its.it[1].n;
// Установим активный табличный лист
dataImportService.setTable(cube, sheetN);
После выполнения примера второй лист был установлен активным.


См. также:


[DataImportService](DataImportService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

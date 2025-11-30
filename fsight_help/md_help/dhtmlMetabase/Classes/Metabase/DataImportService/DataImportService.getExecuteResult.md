# DataImportService.getExecuteResult

DataImportService.getExecuteResult
-


# DataImportService.getExecuteResult


## Синтаксис


getExecuteResult (cubeImport, settings)


## Параметры


cubeImport. Модель объекта
 импорта в куб, экземпляр класса [PP.Mb.CubeImport](../CubeImport/CubeImport.htm).


settings. Параметры.
 Объект типа {duplicates: {start , count}, nulls: {start, count}. Если
 не задан, переменным start и count будут заданы значения 0 и 10 соответственно.


callback.
 Функция обратного вызова.


errorCallback.
 Функция обратного вызова при ошибке.


## Описание


Метод getExecuteResult возвращает
 результат попытки импорта данных.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard.htm)
 с наименованием «importDataWizard» и сервиса для работы с импортом данных
 с наименованием «dataImportService» (см. «[Пример
 создания компонента ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard_Example.htm)»), необходимо выбрать объект
 импорта и перейти на последнюю страницу мастера. Для наглядности объект
 импорта должен содержать ошибочные данные, при открытии окна конфликтов,
 повторим результат импорта данных:


// Получим настройки второй страницы мастера
cube = importDataWizard.getCubeImport();
// Повторим результат импорта данных
dataImportService.getExecuteResult(cube)
В результате выполнения примера в окно конфликтов были повторно добавлены
 конфликты импорта. Повторно сработало событие об окончании импорта.


См. также:


[DataImportService](DataImportService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

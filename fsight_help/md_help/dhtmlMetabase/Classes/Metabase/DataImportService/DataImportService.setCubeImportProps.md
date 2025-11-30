# DataImportService.setCubeImportProps

DataImportService.setCubeImportProps
-


# DataImportService.setCubeImportProps


## Синтаксис


setCubeImportProps (cubeImport, sourceType, props,
 fields, unpivot, fieldsFromSource, callback, errorCallback)


## Параметры


cubeImport. Модель объекта
 импорта в куб, экземпляр класса [PP.Mb.CubeImport](../CubeImport/CubeImport.htm).


sourceType. Тип
 источника данных, экземпляр перечисления [PP.Mb.SourceType](../../../Enums/SourceType.htm).


props. Параметры
 источника даннных.


fields. Поля
 источника данных.


unpivot. Режим
 использования точки начала отчета.


fieldsFromSource. Использование полей из источника.


callback.
 Функция обратного вызова.


errorCallback.
 Функция обратного вызова при ошибке.


## Описание


Метод setCubeImportProps устанавливает
 параметры объекта импорта.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard.htm)
 с наименованием «importDataWizard» и сервиса для работы с импортом данных
 с наименованием «dataImportService» (см. «[Пример
 создания компонента ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard_Example.htm)»), необходимо выбрать объект
 импорта и перейти на вторую страницу мастера. Установим заново параметры
 объекта импорта:


// Получим настройки второй страницы мастера
flatT = importDataWizard.getSteps()[1];
// Получим необходимые настройки
cube = flatT.getCubeImport();
type = flatT.getSourceType();
set = flatT.getSourceSettings();
fields = flatT.getStepSettings().Fields;
unPivot = flatT.getUnpivot();
// Зададим настройки источника данных
dataImportService.setCubeImportProps(cube, type, set, fields, unPivot, false);
После выполнения примера настройки источника данных были повторно применены.


См. также:


[DataImportService](DataImportService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

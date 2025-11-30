# GetBpmProcessStartInfo: Операция

GetBpmProcessStartInfo: Операция
-


# GetBpmProcessStartInfo


## Синтаксис


GetBpmStartInfoResult GetBpmProcessStartInfo(GetBpmStartInfoArg
 tArg)


## Параметры


tArg. Параметры
 выполнения операции.


## Описание


Операция GetBpmProcessStartInfo
 получает настройки, с которыми может быть запущен процесс или подпроцесс.


## Комментарии


Для выполнения операции укажите в поле tArg.id
 моникёр открытого экземпляра процесса. Для подпроцесса также укажите поля
 tArg.parentInstId и tArg.stpGuid.
 Моникёр может быть получен при выполнении операции [OpenBpmProcess](OpenBpmProcess.htm).
 Идентификаторы экземпляров процессов можно получить в результате операции
 [GetProcessInstances](GetProcessInstances.htm). GUID'ы шагов
 можно получить в результате операции [GetBpmMonitoringWorkspace](GetBpmMonitoringWorkspace.htm).


Результатом выполнения операции будут полученные настройки запуска процесса/подпроцесса.


## Пример


Различные варианты использования операции приведены в следующих примерах:


		 Наименование примера


		 [Получение
		 настроек для запуска процесса](GetBpmProcessStartInfo_Sample/GetBpmProcessStartInfo_Sample.htm)


		 [Получение
		 настроек для запуска подпроцесса](GetBpmProcessStartInfo_Sample/GetBpmProcessStartInfo_Sample1.htm)


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

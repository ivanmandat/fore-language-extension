# IDmDataSource.CopyFrom

IDmDataSource.CopyFrom
-


# IDmDataSource.CopyFrom


## Синтаксис


CopyFrom(InputSource: [IDmDataSource](IDmDataSource.htm));


## Параметры


InputSource. Копируемый источник
 данных.


## Описание


Метод CopyFrom выполняет
 копирование указанного источника данных.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта, являющегося источником данных для интеллектуального анализа.


Добавьте ссылку на системную сборку Ms.


Пример является функцией со входным параметром Source,
 в качестве которого выступает регламентный отчёт.


			Function CopyDS(Source: IDmReportDataSource): IDmReportDataSource;

Var

    ds: IDmReportDataSource;

Begin

    ds := (New ReportDataSource.Create) As IDmReportDataSource;

    ds.CopyFrom(Source);

    Return ds;

End Function CopyDS;


В результате выполнения примера функция вернёт копию указанного источника
 данных.


См. также:


[IDmDataSource](IDmDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

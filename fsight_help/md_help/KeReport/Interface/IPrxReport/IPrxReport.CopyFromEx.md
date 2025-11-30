# IPrxReport.CopyFromEx

IPrxReport.CopyFromEx
-


# IPrxReport.CopyFromEx


## Синтаксис


CopyFromEx(Source: [IPrxReport](IPrxReport.htm));


## Параметры


Source. Отчёт, который необходимо
 скопировать.


## Описание


Метод CopyFromEx удаляет все
 имеющиеся в отчёте листы, источники данных, элементы управления и подключенные
 модули и копирует всё содержимое отчёта, который необходимо скопировать.


## Пример


Для выполнения примера в репозитории предполагается наличие отчёта с
 идентификатором REG_CFE_1, который будет копироваться, и отчёт с идентификатором
 REG_CFE, в который будет копироваться.


Добавьте ссылки на системные сборки: Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report, Report1: IPrxReport;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем отчёт, в который копируется

    MObj := MB.ItemById("REG_CFE").Edit;

    Report := MObj As IPrxReport;

    // Получаем отчёт, который копируется

    Report1 := MB.ItemById("REG_CFE_1").Bind As IPrxReport;

    // Копируем отчёт

    Report.CopyFromEx(Report1);

    // Сохраняем отчёт, в который копируется

    MObj.Save;

End Sub UserProc;


В результате выполнения примера в отчёт REG_CFE будет скопированы
 все листы, источники данных, элементы управления и подключенные модули
 из отчёта REG_CFE_1.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

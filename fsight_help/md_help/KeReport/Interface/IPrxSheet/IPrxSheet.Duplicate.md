# IPrxSheet.Duplicate

IPrxSheet.Duplicate
-


# IPrxSheet.Duplicate


## Синтаксис


Duplicate: [IPrxSheet](IPrxSheet.htm);


## Описание


Метод Duplicate дублирует лист
 регламентного отчета.


## Комментарии


При дублировании листа копируются все включенные в отчет визуализаторы,
 их настройки и расположение, выбранный источник и заданная отметка, заданная
 синхронизация измерений.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REPORT_DUPL».


Добавьте ссылки на системные сборки: Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Sheet: IPrxSheet;

    Sheets: IPrxSheets;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем отчет

    Report := MB.ItemById("REPORT_DUPL").Edit As IPrxReport;

    // Получаем коллекцию листов регламентного отчета

    Sheets := Report.Sheets;

    // Получаем лист регламентного отчета

    Sheet := Report.Sheets.Item(0);

    // Дублируем лист

    Sheet.Duplicate;

    // Сохраняем отчет

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в регламентном отчете добавится новый
 лист, являющийся копией имеющегося листа.


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

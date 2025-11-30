# IMetabaseObjectCopyInfo.NoSaveEvent

IMetabaseObjectCopyInfo.NoSaveEvent
-


# IMetabaseObjectCopyInfo.NoSaveEvent


## Синтаксис


NoSaveEvent: Boolean;


## Описание


Свойство NoSaveEvent определяет
 возможность отмены события [IPrxReportUserEvents.EventOnBeforeSaveReport](KeReport.chm::/Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeSaveReport.htm)
 при копировании отчёта.


## Комментарии


Допустимые значения:


	- False. При копировании
	 отчёта генерируется событие [IPrxReportUserEvents.EventOnBeforeSaveReport](KeReport.chm::/Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeSaveReport.htm).
	 Значение по умолчанию;


	- True. При копировании
	 отчёта не генерируется событие [IPrxReportUserEvents.EventOnBeforeSaveReport](KeReport.chm::/Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeSaveReport.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие отчёта с
 идентификатором PROC_REPORT_SRC, у которого подключен модуль в качестве
 обработчика событий с событием IPrxReportUserEvents.EventOnBeforeSaveReport.


Добавьте ссылки на системные сборки: Metabase, Report.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CInfo: IMetabaseObjectCopyInfo;

		    MObj: IMetabaseObject;

		    Rep: IPrxReport;

		Begin

		    // Получаем текущий репозиторий

		    MB := MetabaseClass.Active;

		    // Создаем объект для осуществления копирования и задаём параметры

		    CInfo := MB.CreateCopyInfo;

		    CInfo.Id := MB.GenerateId("PROC_REPORT_SRC_1");

		    CInfo.Name := "Отчёт";

		    CInfo.Destination := MB.Root;

		    CInfo.Source := MB.ItemById("PROC_REPORT_SRC");

		    CInfo.NoSave := True;

		    CInfo.NoSaveEvent := True;

		    // Копируем

		    MB.CopyObject(CInfo);

		    MObj := CInfo.Destination As IMetabaseObject;

		    // Добавляем в копию отчёта табличный лист

		    Rep := MObj As IPrxReport;

		    Rep.Sheets.Add("Лист_1");

		    // Сохраняем отчёт

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера произойдет копирование отчёта в корневой
 каталог репозитория. В полученной копии отчёта, перед сохранением, будет
 добавлен табличный лист. Событие IPrxReportUserEvents.EventOnBeforeSaveReport
 не будет сгенерировано.


См. также:


[IMetabaseObjectCopyInfo](IMetabaseObjectCopyInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

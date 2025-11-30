# IExportRequestInstance.Exporter

IExportRequestInstance.Exporter
-


# IExportRequestInstance.Exporter


## Синтаксис


Exporter: [IExportRequestParams](../IExportRequestParams/IExportRequestParams.htm);


## Описание


Свойство Exporter возвращает
 параметры экспорта показателей.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC_AUTO, содержащей объект экспорта
 с идентификатором OBJ_EXPORT.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubKey: Integer;

	    ExpParams: IExportRequestParams;

	    ExpPeriod: IRubricatorAutoPeriod;

	    ExpPeriodDate: IRubricatorAutoPeriodDate;

	    ExportRequestInst: IExportRequestInstance;

	Begin

	// Получаем объект экспорта

	    MB := MetabaseClass.Active;

	    RubKey := MB.GetObjectKeyById("FC_AUTO");

	    ExportRequestInst := MB.ItemByIdNamespace("OBJ_EXPORT", RubKey).Open(Null) As IExportRequestInstance;

	// Редактируем параметры экспорта

	    ExpParams := ExportRequestInst.Exporter;

	    ExpPeriod := ExpParams.AutoPeriod;

	    ExpPeriodDate := ExpPeriod.Start;

	    ExpPeriodDate.AutoDateType := RubricatorAutoDateType.Exact;

	    ExpPeriodDate.ExactDate := DateTime.Parse("01.01.2000");

	    ExpPeriodDate := ExpPeriod.End_;

	    ExpPeriodDate.AutoDateType := RubricatorAutoDateType.Now;

	    ExpPeriodDate.Offset := -2;

	    MB.ItemByIdNamespace("OBJ_EXPORT", RubKey).Save;

	// Экспорт

	    ExportRequestInst.Export;

	End Sub UserProc;


После выполнения примера будет произведен экспорт показателей с помощью
 объекта экспорта «OBJ_EXPORT». Периоды экспорта будут изменены:


	- начало периода: 01.01.2000;


	- окончание периода: текущая дата, смещенная на две точки назад.


См. также:


[IExportRequestInstance](IExportRequestInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

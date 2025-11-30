# IExportRequestParams.AutoPeriod

IExportRequestParams.AutoPeriod
-


# IExportRequestParams.AutoPeriod


## Синтаксис


AutoPeriod: [IRubricatorAutoPeriod](../IRubricatorAutoPeriod/IRubricatorAutoPeriod.htm);


## Описание


Свойство AutoPeriod возвращает
 параметры периода экспорта временных рядов.


## Комментарии


По умолчанию начало/окончание периода экспорта совпадает с началом/окончанием
 данных.


Если период экспорта задан относительно даты начала или окончания данных,
 то границы данных определяются исходя из значения свойства [IExportRequestParams.AutoPeriod](IExportRequestParams.AutoPeriod.htm):


	- CubeLoadClearMode.Default_.
	 Границы данных определяются непустым значениям для атрибута наблюдения
	 «VL»;


	- CubeLoadClearMode.MetadataOnly.
	 Границы данных определяются по непустым атрибутам уровня наблюдения;


	- CubeLoadClearMode.DataOnly.
	 Границы данных определяются по непустым значениям для точки;


	- CubeLoadClearMode.DataAndMetadata.
	 Границы данных определяются по непустым атрибутам уровня наблюдения
	 или значению точки.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «FC_AUTO», содержащей объект экспорта с идентификатором
 «OBJ_EXPORT». Добавьте ссылки на системные сборки «Metabase», «Cubes».


			Sub UserProc;

Var

    MB: IMetabase;

    RubKey: Integer;

    Obj: IMetabaseObject;

    ExportRequestDef: IExportRequestDefinition;

    ExpParams: IExportRequestParams;

    ExpPeriod: IRubricatorAutoPeriod;

    ExpPeriodDate: IRubricatorAutoPeriodDate;

    ExportRequestInst: IExportRequestInstance;

Begin

// Получаем объект экспорта

    MB := MetabaseClass.Active;

    RubKey := MB.GetObjectKeyById("FC_AUTO");

    Obj := MB.ItemByIdNamespace("OBJ_EXPORT", RubKey).Edit;

    ExportRequestDef := Obj As IExportRequestDefinition;

// Редактируем параметры экспорта

    ExpParams := ExportRequestDef.Exporter;

    ExpPeriod := ExpParams.AutoPeriod;

    ExpPeriodDate := ExpPeriod.Start;

    ExpPeriodDate.AutoDateType := RubricatorAutoDateType.Exact;

    ExpPeriodDate.ExactDate := DateTime.Parse("01.01.2000");

    ExpPeriodDate := ExpPeriod.End_;

    ExpPeriodDate.AutoDateType := RubricatorAutoDateType.Now;

    ExpPeriodDate.Offset := -2;

    Obj.Save;

// Экспорт

    ExportRequestInst := (ExportRequestDef As IMetabaseObjectDescriptor).Open(Null) As IExportRequestInstance;

    ExportRequestInst.Export;

End Sub UserProc;


После выполнения примера будет произведен экспорт временных рядов с
 помощью объекта экспорта «OBJ_EXPORT». Периоды экспорта будут изменены:


	- начало периода: 01.01.2000;


	- окончание периода: текущая дата, смещенная на две точки назад.


См. также:


[IExportRequestParams](IExportRequestParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

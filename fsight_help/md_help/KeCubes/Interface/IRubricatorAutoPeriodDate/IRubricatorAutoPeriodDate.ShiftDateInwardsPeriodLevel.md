# IRubricatorAutoPeriodDate.ShiftDateInwardsPeriodLevel

IRubricatorAutoPeriodDate.ShiftDateInwardsPeriodLevel
-


# IRubricatorAutoPeriodDate.ShiftDateInwardsPeriodLevel


## Синтаксис


ShiftDateInwardsPeriodLevel: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm);


## Описание


Свойство ShiftDateInwardsPeriodLevel определяет уровень календарной динамики, для которого проверяется: выходит ли дата за границы периода.


## Комментарии


Значение поля по умолчанию DimCalendarLevel.Year, т.е. годовая динамика.


## Пример


Для выполнения примера в репозитории предполагается наличие БД временных рядов с идентификатором «TS_DB», содержащим объект импорта с идентификатором «OBJ_IMP». Объект импорта предназначен для импорта недельных данных.


Добавьте ссылки на системные сборки «Metabase», «Cubes», «Dimensions».


			Sub UserProc;

Var

    MB: IMetabase;

    RubKey: Integer;

    Obj: IMetabaseObject;

    ImportRequestDef: IImportRequestDefinition;

    ImpParams: IImportRequestProviderParams;

    ImpPeriod: IRubricatorAutoPeriod;

    sDate, eDate: IRubricatorAutoPeriodDate;

Begin

// Получаем объект импорта
    MB := MetabaseClass.Active;

    RubKey := MB.GetObjectKeyById("TS_DB");

    Obj := MB.ItemByIdNamespace("OBJ_IMP", RubKey).Edit;

    ImportRequestDef := Obj As IImportRequestDefinition;

// Редактируем параметры импорта
    ImpParams := ImportRequestDef.ProviderParams;

    ImpPeriod := ImpParams.AutoPeriod;

// Задаем параметры начала импорта данных
    sDate := ImpPeriod.Start;

    sDate.AutoDateType := RubricatorAutoDateType.Exact;

    sDate.ExactDate := DateTime.ComposeDay(2000, 01, 03);

    sDate.ShiftDateInwardsPeriod := True;

    sDate.ShiftDateInwardsPeriodLevel := DimCalendarLevel.Week;

// Задаем параметры окончания импорта данных
    eDate := ImpPeriod.End_;

    eDate.AutoDateType := RubricatorAutoDateType.Exact;

    eDate.ExactDate := DateTime.ComposeDay(2000, 12, 31);

    eDate.ShiftDateInwardsPeriod := True;

    eDate.ShiftDateInwardsPeriodLevel := DimCalendarLevel.Week;

// Сохраняем изменения
    Obj.Save;

End Sub UserProc;


Результат выполнения примера: при импорте данных с помощью объекта «OBJ_IMP» даты начала и окончания импорта будут смещены на одну точку внутрь периода, если они выходят за границы периода импорта.


См. также:


[IRubricatorAutoPeriodDate](IRubricatorAutoPeriodDate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IRubricatorAutoPeriodDate.Fixed

IRubricatorAutoPeriodDate.Fixed
-


# IRubricatorAutoPeriodDate.Fixed


## Синтаксис


Fixed(Level: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm), FirstDayOfWeek: [DayOfWeekSet](KeDims.chm::/Enums/DayOfWeekSet.htm)): DateTime;


## Параметры


Level. Уровень календаря;


FirstDayOfWeek. День начала недели. Актуально для данных с дневной и недельной календарной динамикой.


## Описание


Свойство Fixed возвращает дату периода.


## Комментарии


Свойство актуально, если [IRubricatorAutoPeriodDate.IsFixed](IRubricatorAutoPeriodDate.IsFixed.htm) = True, т.е. дата периода задана абсолютно или относительно текущей даты.


## Пример


Для выполнения примера предполагается наличие базы данных временных рядов с идентификатором «FC_AUTO», содержащей объект экспорта с идентификатором «OBJ_EXPORT». Добавьте ссылки на системные сборки «Metabase», «Cubes», «Dimensions».


			Sub UserProc;

Var

    MB: IMetabase;

    RubKey: Integer;

    Obj: IMetabaseObject;

    ExportRequestDef: IExportRequestDefinition;

    ExpParams: IExportRequestParams;

    ExpPeriod: IRubricatorAutoPeriod;

    ExpPeriodDate: IRubricatorAutoPeriodDate;

Begin

// Получаем объект экспорта
    MB := MetabaseClass.Active;

    RubKey := MB.GetObjectKeyById("FC_AUTO");

    Obj := MB.ItemByIdNamespace("OBJ_EXPORT", RubKey).Bind;

    ExportRequestDef := Obj As IExportRequestDefinition;

// Редактируем параметры экспорта
    ExpParams := ExportRequestDef.Exporter;

    ExpPeriod := ExpParams.AutoPeriod;

    ExpPeriodDate := ExpPeriod.Start;

    Debug.Write("Начало периода: ");

    If ExpPeriodDate.IsFixed Then

        Debug.WriteLine(ExpPeriodDate.Fixed(DimCalendarLevel.Week, DayOfWeekSet.Monday));

    Else

        Debug.WriteLine("начало данных, ");

        Debug.WriteLine("смещение: " + ExpPeriodDate.Offset.ToString);

    End If;

    ExpPeriodDate := ExpPeriod.End_;

    Debug.Write("Окончание периода: ");

    If ExpPeriodDate.IsFixed Then

        Debug.WriteLine(ExpPeriodDate.Fixed(DimCalendarLevel.Week, DayOfWeekSet.Monday));

    Else

        Debug.Write("окончание данных, ");

        Debug.WriteLine("смещение: " + ExpPeriodDate.Offset.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о начале/окончании периода экспорта показателей с помощью объекта «OBJ_EXPORT».


См. также:


[IRubricatorAutoPeriodDate](IRubricatorAutoPeriodDate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

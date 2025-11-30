# ICubeCalendarOptions.Levels

ICubeCalendarOptions.Levels
-


# ICubeCalendarOptions.Levels


## Синтаксис


Levels: [DimCalendarLevelSet](kedims.chm::/enums/dimcalendarlevelset.htm);


## Описание


Свойство Levels определяет тип
 динамики календаря.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR и файла экспорта показателей «C:\result_exp.txt».


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    Loader: ICubeMetaLoader;

    Bindings: ICubeMetaLoaderBindings;

    Binding: ICubeMetaLoaderBinding;

    TextProvider: IDtTextProvider;

    CalendOpt: ICubeCalendarOptions;

Begin

    MB := MetabaseClass.Active;

    CrInfo := Mb.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBEMETALOADER;

    CrInfo.Parent := Mb.ItemById("OBJ_RUBRICATOR").Bind;

    CrInfo.Id := Mb.GenerateId("CUBEMETALOADER", CrInfo.Parent.Key);

    CrInfo.Permanent := False;

    Obj := Mb.CreateObject(CrInfo).Edit;

    Loader := Obj As ICubeMetaLoader;

    // Источник данных для импорта из текстового формата

    TextProvider := New DtTextProvider.Create;

    TextProvider.File := "C:\result_exp.txt";

    TextProvider.FormatType := DtTextFormatType.Delimited;

    TextProvider.DelimitedColumnDelimiter := ";";

    TextProvider.DelimitedTextQualifier := """";

    TextProvider.Encoding := "WIN";

    TextProvider.RangeHasHeader := True;

    TextProvider.Open;

    Loader.Data := (TextProvider As IDatasetDataProvider);

    Loader.ImportObjectKey := Obj.Key;

    Loader.NewRevisionName := "Метаимпорт";

    Loader.LoadType := CubeMetaLoaderLoadType.CreateAndUpdate;

    Loader.Rubricator := Mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

    Bindings := Loader.Bindings;

    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Calendar;

    CalendOpt := Binding.CalendarOptions;

    CalendOpt.Levels := DimCalendarLevelSet.Year;

    Binding.ByColumns := True;

    Binding.CalendarDateFormat := "$Year$";

    Binding.FieldType := CubeMetaLoaderFieldType.Index;

    Binding.Field := "2";

    Binding.EndField := "10";

    Obj.Save;

End Sub UserProc;


После выполнения примера будет создан объект импорта показателей из
 текстового файла. В данном объекте будет настроена привязка импорта календарного
 измерения.


См. также:


[ICubeCalendarOptions](ICubeCalendarOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

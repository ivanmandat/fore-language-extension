# ICubeMetaLoaderBinding.HeaderParser

ICubeMetaLoaderBinding.HeaderParser
-


# ICubeMetaLoaderBinding.HeaderParser


## Синтаксис


HeaderParser: [ICubeMetaLoaderBindingParser](../ICubeMetaLoaderBindingParser/ICubeMetaLoaderBindingParser.htm);


## Описание


Свойство HeaderParser возвращает
 объект, позволяющий распознавать атрибуты из заголовков столбцов в источнике
 данных.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_FC и файла экспорта показателей «C:\Delimited.txt».
 Также в репозитории должен присутствовать репозиторий НСИ с идентификатором
 RDS_REPO, в данном репозитории предполагается наличие справочников с идентификаторами
 DICT_CTR, DICT_IND и UNITS. В базе данных временных рядов атрибут COUNTRY
 является ссылкой на справочник DICT_CTR, атрибут INDICATOR - ссылкой на
 справочник DICT_IND, а единицы измерения ссылаются на справочник UNITS.


[![](../../Opened.gif)![](../../Closed.gif)Файл «C:\Delimited.txt»,
 для которого создан пример](javascript:TextPopup(this))


	![](ICubeMetaLoaderBinding_HeaderParser.gif)


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    NsiDescr: IMetabaseObjectDescriptor;

	    CubeMetaLoader: ICubeMetaLoader;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Obj: IMetabaseObject;

	    ObjDesc: IMetabaseObjectDescriptor;

	    CubeMetaLoaderBindings: ICubeMetaLoaderBindings;

	    CalendarBinding: ICubeMetaLoaderBinding;

	    CountryBinding: ICubeMetaLoaderBinding;

	    IndicatorBinding: ICubeMetaLoaderBinding;

	    UnitBinding: ICubeMetaLoaderBinding;

	    LevelBinding: ICubeMetaLoaderBinding;

	    ValueBinding: ICubeMetaLoaderBinding;

	    HeaderParser: ICubeMetaLoaderBindingParser;

	    Parser: ICubeMetaLoaderBindingParser;

	    Text: DtTextProvider;

	    Provider: IDatasetDataProvider;

	    Log: ICubeMetaLoaderLog;

	    Entry: ICubeMetaLoaderLogEntry;

	    Count, i: Integer;

	Begin


	    Mb := MetabaseClass.Active;

	    NsiDescr := Mb.ItemById("RDS_REPO");

	    CrInfo := Mb.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBEMETALOADER;

	    CrInfo.Id := "CUBEMETALOADER";

	    CrInfo.Permanent := False;

	    ObjDesc := Mb.CreateObject(CrInfo);

	    Obj := ObjDesc.Edit;

	    CubeMetaLoader := Obj As ICubeMetaLoader;

	    CubeMetaLoader.LoadType := CubeMetaLoaderLoadType.CreateAndUpdate;

	    CubeMetaLoader.Rubricator := Mb.ItemById("OBJ_FC").Bind As IRubricator;

	    CubeMetaLoaderBindings := CubeMetaLoader.Bindings;

	    CountryBinding := CubeMetaLoaderBindings.Add;

	    CountryBinding.BindingType := CubeMetaLoaderBindingType.Attribute;

	    CountryBinding.Attribute := "COUNTRY";

	    CountryBinding.Dimension := Mb.ItemByIdNamespace("DICT_CTR", NsiDescr.Key).Bind As IDimensionModel;


	    // «IX_WEO» - уникальный ключ справочника «DICT_CTR»

	    CountryBinding.Index := "IX_WEO";

	    CountryBinding.KeyAttribute := "KEY";

	    CountryBinding.FieldType := CubeMetaLoaderFieldType.Index;

	    CountryBinding.Field := "0";

	    HeaderParser := CountryBinding.HeaderParser;

	    HeaderParser.ParserType := CubeMetaLoaderParserType.Delimited;

	    HeaderParser.DelimiterChars := "|";

	    HeaderParser.DelimitedPosition := 0;

	    Parser := CountryBinding.Parser;

	    Parser.ParserType := CubeMetaLoaderParserType.Delimited;

	    Parser.DelimiterChars := "|";

	    Parser.DelimitedPosition := 0;

	    IndicatorBinding := CubeMetaLoaderBindings.Add;

	    IndicatorBinding.BindingType := CubeMetaLoaderBindingType.Attribute;

	    IndicatorBinding.Attribute := "INDICATOR";

	    IndicatorBinding.Dimension := Mb.ItemByIdNamespace("DICT_IND", NsiDescr.Key).Bind As IDimensionModel;


	    // «IX_CODE» - уникальный ключ справочника «DICT_IND»

	    IndicatorBinding.Index := "IX_CODE";

	    IndicatorBinding.KeyAttribute := "KEY";

	    IndicatorBinding.FieldType := CubeMetaLoaderFieldType.Index;

	    IndicatorBinding.Field := "0";

	    HeaderParser := IndicatorBinding.HeaderParser;

	    HeaderParser.ParserType := CubeMetaLoaderParserType.Delimited;

	    HeaderParser.DelimiterChars := "|";

	    HeaderParser.DelimitedPosition := 2;

	    Parser := IndicatorBinding.Parser;

	    Parser.ParserType := CubeMetaLoaderParserType.Delimited;

	    Parser.DelimiterChars := "|";

	    Parser.DelimitedPosition := 2;

	    CalendarBinding := CubeMetaLoaderBindings.Add;

	    CalendarBinding.BindingType := CubeMetaLoaderBindingType.Calendar;

	    CalendarBinding.CalendarOptions.Levels := DimCalendarLevelSet.Year;

	    CalendarBinding.ByColumns := False;

	    CalendarBinding.CalendarDateFormat := "$Year$";

	    CalendarBinding.FieldType := CubeMetaLoaderFieldType.Index;

	    CalendarBinding.Field := "0";

	    HeaderParser := CalendarBinding.HeaderParser;

	    HeaderParser.ParserType := CubeMetaLoaderParserType.Delimited;

	    HeaderParser.DelimiterChars := "|";

	    HeaderParser.DelimitedPosition := 4;


	    Parser := CalendarBinding.Parser;

	    Parser.ParserType := CubeMetaLoaderParserType.Delimited;

	    Parser.DelimiterChars := "|";

	    Parser.DelimitedPosition := 4;

	    ValueBinding := CubeMetaLoaderBindings.Add;

	    ValueBinding.BindingType := CubeMetaLoaderBindingType.Value;

	    ValueBinding.FieldType := CubeMetaLoaderFieldType.Index;

	    ValueBinding.Field := "0";

	    HeaderParser := ValueBinding.HeaderParser;

	    HeaderParser.ParserType := CubeMetaLoaderParserType.Delimited;

	    HeaderParser.DelimiterChars := "|";

	    HeaderParser.DelimitedPosition := 5;


	    Parser := ValueBinding.Parser;

	    Parser.ParserType := CubeMetaLoaderParserType.Delimited;

	    Parser.DelimiterChars := "|";

	    Parser.DelimitedPosition := 5;

	    LevelBinding := CubeMetaLoaderBindings.Add;

	    LevelBinding.BindingType := CubeMetaLoaderBindingType.Attribute;

	    LevelBinding.Attribute := "DL";

	    LevelBinding.FieldType := CubeMetaLoaderFieldType.ConstValue;

	    LevelBinding.FieldValue := DimCalendarLevel.Year As Integer;

	    UnitBinding := CubeMetaLoaderBindings.Add;

	    UnitBinding.BindingType := CubeMetaLoaderBindingType.Unit;

	    UnitBinding.FieldType := CubeMetaLoaderFieldType.ConstValue;

	    UnitBinding.FieldValue := 3535 As Variant;

	    UnitBinding.Dimension := Mb.ItemByIdNamespace("UNITS", NsiDescr.Key).Bind As IDimensionModel;


	    // Источник данных

	    Text := New DtTextProvider.Create;

	    Text.File := "C:\Delimited.txt";

	    Text.Encoding := "WIN";

	    Text.FormatType := DtTextFormatType.Fixed;

	    Text.RangeHasHeader := True;

	    Text.Open;

	    Provider := New DatasetDataTransformProvider.Create;

	    Provider := Text As IDatasetDataProvider;

	    CubeMetaLoader.Data := Provider;

	    CubeMetaLoader.LoadData;


	    Log := CubeMetaLoader.Log;

	    Count := Log.Count;

	    Debug.WriteLine("Всего записей в логе: " + Count.ToString);

	    For i := 0 To Count - 1 Do

	        Entry := Log.Item(i);

	        Debug.WriteLine(i.ToString + " : "

	            + Entry.DateBegin.ToString + ","

	            + Entry.RecordNumber.ToString + ","

	            + Entry.Field + ","

	            + Entry.ErrorMessage);

	        If i >= 10 - 1 Then

	            Break;

	        End If;

	    End For;

	End Sub UserProc;


После выполнения примера будет произведен экспорт показателей из указанного
 файла. Атрибуты будут распознаваться из списка с разделителями.


См. также:


[ICubeMetaLoaderBinding](ICubeMetaLoaderBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

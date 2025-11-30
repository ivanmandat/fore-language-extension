# ICubeMetaLoaderBinding.CheckField

ICubeMetaLoaderBinding.CheckField
-


# ICubeMetaLoaderBinding.CheckField


## Синтаксис


CheckField: String;


## Описание


Свойство CheckField определяет
 поле, наличие которого проверяется в источнике данных.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR и файла экспорта показателей «C:\result_exp.txt».
 Также должен присутствовать справочник НСИ с идентификатором DICT_CTR.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ObjDesc: IMetabaseObjectDescriptor;

    Loader: ICubeMetaLoader;

    Bindings: ICubeMetaLoaderBindings;

    Binding: ICubeMetaLoaderBinding;

    RDS: IMetabaseObjectDescriptor;

    TextProvider: IDtTextProvider;

Begin

    MB := MetabaseClass.Active;

    CrInfo := Mb.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBEMETALOADER;

    CrInfo.Parent := Mb.ItemById("OBJ_RUBRICATOR").Bind;

    CrInfo.Id := Mb.GenerateId("CUBEMETALOADER", CrInfo.Parent.Key);

    CrInfo.Permanent := False;

    ObjDesc := Mb.CreateObject(CrInfo);

    Obj := ObjDesc.Edit;

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

    Loader.NewRevisionName := "Мета импорт";

    Loader.LoadType := CubeMetaLoaderLoadType.CreateAndUpdate;

    Loader.Rubricator := Mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

    Bindings := Loader.Bindings;

    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Attribute;

    Binding.Attribute := "COUNTRY";

    Binding.Field := "Country";

    Binding.FieldType := CubeMetaLoaderFieldType.Name;

    RDS := Mb.ItemById("RDS_REPO");

    Binding.Dimension := Mb.ItemById("DICT_CTR").Bind As IDimensionModel;

    Binding.Index := "IX_WEO";

    Binding.KeyAttribute := "KEY";

    Binding.NameAttribute := "NAME";

    Binding.CheckField := "Country";

End Sub UserProc;


После выполнения примера будет создан объект импорта показателей из
 текстового файла «C:\result_exp.txt». В данном объекте будет настроена
 привязка импорта данных, представленных ссылкой на справочник.


См. также:


[ICubeMetaLoaderBinding](ICubeMetaLoaderBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

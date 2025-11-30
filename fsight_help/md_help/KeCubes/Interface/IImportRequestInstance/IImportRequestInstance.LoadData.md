# IImportRequestInstance.LoadData

IImportRequestInstance.LoadData
-


# IImportRequestInstance.LoadData


## Синтаксис


LoadData;


## Описание


Метод LoadData осуществляет
 импорт временных рядов.


## Пример


Для выполнения примера предполагается наличие баз данных временных рядов
 с идентификаторами «OBJ_RUBRICATOR» и «OBJ_RUBRICATOR_SOUR». В данных
 базах должны присутствовать атрибуты «COUNTRY» и «INDICATOR». По атрибутам
 базы «OBJ_RUBRICATOR_SOUR» заданы какие-либо правила.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    RubDescSour: IMetabaseObjectDescriptor;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ObjDesc: IMetabaseObjectDescriptor;

    ImportRequestDef: IImportRequestDefinition;

    ImportRequestInst: IImportRequestInstance;

    ImportRequestRubricatorParams: IImportRequestRubricatorParams;

    ImportRequestResult: IImportRequestResult;

    Binding: ICubeMetaCopierBinding;

    Log: ICubeMetaLoaderLog;

    Count, i, key: Integer;

    Entry: ICubeMetaLoaderLogEntry;

    InvalidFactors: Array Of Integer;

Begin

    //Объект импорта

    Mb := MetabaseClass.Active;

    CrInfo := Mb.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_IMPORTREQUEST;

    CrInfo.Id := "OBJ_IMPORTREQUEST";

    CrInfo.Name := "Новый объект импорта";

    CrInfo.Permanent := True;

    CrInfo.Parent := RubDesc.Bind;

    ObjDesc := Mb.CreateObject(CrInfo);

    Obj := ObjDesc.Edit;

    //Настройка источника

    ImportRequestDef := Obj As IImportRequestDefinition;

    ImportRequestDef.SourceType := ImportRequestSourceType.Rubricator;

    RubDesc := Mb.ItemById("OBJ_RUBRICATOR");

    ImportRequestDef.DestinationRubricator := RubDesc.Bind As IRubricator;

    //Параметры импорта

    ImportRequestRubricatorParams := ImportRequestDef.RubricatorParams;

    RubDescSour := MB.ItemById("OBJ_RUBRICATOR_SOUR");

    ImportRequestRubricatorParams.SourceRubricator := RubDescSour.Bind As IRubricator;

    ImportRequestRubricatorParams.CalendarLevelSet := DimCalendarLevelSet.Year;

    ImportRequestRubricatorParams.NewRevisionName := "Импорт показателй";

    ImportRequestRubricatorParams.ImportObjectKey := Obj.Key;


    Binding := ImportRequestRubricatorParams.bindings.Add;

    Binding.BindingType := CubeMetaCopierBindingType.Attribute;

    Binding.DestinationAttribute := "COUNTRY";

    Binding.SourceAttribute := "COUNTRY";


    Binding := ImportRequestRubricatorParams.bindings.Add;

    Binding.BindingType := CubeMetaCopierBindingType.Attribute;

    Binding.DestinationAttribute := "INDICATOR";

    Binding.SourceAttribute := "INDICATOR";

    Obj.Save;


    //Импорт

    ImportRequestInst := (ImportRequestDef As IMetabaseObjectDescriptor).Open(Null) As IImportRequestInstance;

    ImportRequestInst.LoadData;


    //Результаты импорта

    ImportRequestResult := ImportRequestInst.ImportResult As IImportRequestResult;

    Log := ImportRequestResult.Log;

    Debug.WriteLine("Всего записей в логе: " + Count.ToString);

    For i := 0 To Count - 1 Do

        Entry := Log.Item(i);

        Debug.WriteLine(i.ToString + " : "  + Entry.DateBegin.ToString + ","

            + Entry.RecordNumber.ToString + ","

            + Entry.Field + ","

            + Entry.ErrorMessage);

    End For;


    InvalidFactors := (ImportRequestResult As IImportRequestResultEx).InvalidFactors;

    If InvalidFactors.Length <> 0 Then

        For Each Key In InvalidFactors Do

            Debug.WriteLine("Ошибка при импорте показателя с ключом: " + Key.ToString);

        End For;

    Else

        Debug.WriteLine("Импорт прошел без ошибок в показателях");

    End If;

End Sub UserProc;


После выполнения примера будет произведен импорт временных рядов из
 базы «OBJ_RUBRICATOR_SOUR» в базу «OBJ_RUBRICATOR». Записи отчета об импорте
 будут выведены в консоль среды разработки. Если при импорте каких-либо
 показателей будут нарушены правила, то ключи соответствующих временных
 рядов также будут выведены в консоль среды разработки.


См. также:


[IImportRequestInstance](IImportRequestInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

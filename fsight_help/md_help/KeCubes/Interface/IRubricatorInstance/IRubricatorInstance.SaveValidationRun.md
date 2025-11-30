# IRubricatorInstance.SaveValidationRun

IRubricatorInstance.SaveValidationRun
-


# IRubricatorInstance.SaveValidationRun


## Синтаксис


SaveValidationRun(Run: [IValidationExecRun](../IValidationExecRun/IValidationExecRun.htm);
 ExecData: [IValidationExecData](../IValidationExecData/IValidationExecData.htm)):
 Integer;


## Параметры


Run. Данные расчета валидации.


ExecData. Данные о расчете
 валидации.


## Описание


Метод SaveValidationRun производит
 сохранение данных расчета валидации.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В базе показателей должен
 существовать фильтр валидации с идентификатором OBJ_VALIDATION.


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    RubInst: IRubricatorInstance;

    ValiRun: IValidationExecRun;

    ValiData: IValidationExecData;

    ArrVali: Array[1] Of Integer;

    i: integer;

    ObjVal: IMetabaseObject;

    v: IValidationFilter;

    Sett: IValidationExecuteSettings;

Begin

    MB := MetabaseClass.Active;

    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    ObjVal := MB.ItemByIdNamespace("OBJ_VALIDATION", RubDesc.Key).Edit;

    v := ObjVal As IValidationFilter;

    Sett := New ValidationExecuteSettings.Create;

    ValiRun := v.Execute(Sett);

    ValiData := RubInst.GetValidationExecData(-1, DictionaryGetDataOptions.Create);

    ValiData.Name := "Выполнение валидации";

    ArrVali[0] := ObjVal.Key;

    // У записи о расчете задаются рассчитанные валидации

    ValiData.ValidationKey := ObjVal.Key;

    ValiData.Validations := ArrVali;

    // Запись о расчете сохраняется в БД

    (ValiData As IRubricatorRecord).Save;

    // По этому новому расчету сохраняются данные

    i := RubInst.SaveValidationRun(ValiRun, ValiData);

    Debug.WriteLine("Ключ расчета валидации " + i.ToString);

End Sub UserProc;


После выполнения примера будет рассчитана валидация, данные расчета
 будут сохранены. В окно консоли будет выведен ключ расчета валидации.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

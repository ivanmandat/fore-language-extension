# IRubricatorInstance.GetValidationExecData

IRubricatorInstance.GetValidationExecData
-


# IRubricatorInstance.GetValidationExecData


## Синтаксис


GetValidationExecData(ValidationExecKey: Integer;
 [Options: [DictionaryGetDataOptions](KeRds.chm::/Enums/DictionaryGetDataOptions.htm)
 = 0]): [IValidationExecData](../IValidationExecData/IValidationExecData.htm);


## Параметры


ValidationExecKey. Ключ расчета
 валидации.


Options.
 Параметр
 получения данных.


## Описание


Метод GetValidationExecData
 возвращает данные о расчёте валидации по ключу.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В базе показателей должен
 существовать расчет валидации с ключом 1.


			Sub UserProc;

Var

    MB: IMetabase;

    RubInst: IRubricatorInstance;

    ValiData: IValidationExecData;

    i: Integer;

    a: Array Of Integer;

Begin

    MB := MetabaseClass.Active;

    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    ValiData := RubInst.GetValidationExecData(1, DictionaryGetDataOptions.None);

    Debug.WriteLine("Ключ " + ValiData.Key.ToString);

    Debug.WriteLine("Наименование " + ValiData.Name);

    Debug.WriteLine("Ключ ревизии" + ValiData.RevisionKey.ToString);

    Debug.WriteLine("Дата запуска " + ValiData.Stamp.ToString);

    Debug.WriteLine("Ключ валидации " + ValiData.ValidationKey.ToString);

    Debug.WriteLine("Рассчитанные валидации:");

    a := New Integer[ValiData.Validations.Length];

    a := ValiData.Validations;

    For i := 0 To ValiData.Validations.Length - 1 Do

        Debug.WriteLine(a[i].ToString);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 расчете валидации с указанным ключом.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

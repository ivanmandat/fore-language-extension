# IValidationExecData.Key

IValidationExecData.Key
-


# IValidationExecData.Key


## Синтаксис


Key: Integer;


## Описание


Свойство Key возвращает ключ
 расчета валидации.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должен существовать
 расчет валидации с ключом 1.


			Sub UserProc;

Var

    MB: IMetabase;

    RubInst: IRubricatorInstance;

    ValiData: IValidationExecData;

    Vals: Array Of Integer;

    c, i: Integer;

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

    Vals := ValiData.Validations;

    c := Vals.Length;

    For i := 0 To c - 1 Do

        Debug.WriteLine(Vals[i].ToString);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 расчёте валидации с указанным ключом.


См. также:


[IValidationExecData](IValidationExecData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

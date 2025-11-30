# IRubricatorValidationsLookup.Lookup

IRubricatorValidationsLookup.Lookup
-


# IRubricatorValidationsLookup.Lookup


## Синтаксис


Lookup: [IMetaDictionaryLookup](KeRds.chm::/Interface/IMetaDictionaryLookup/IMetaDictionaryLookup.htm);


## Описание


Свойство Lookup возвращает условие
 поиска.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    Loo: IRubricatorValidationsLookup;

    DictL: IMetaDictionaryLookup;

    ValiData: IValidationExecData;

Begin

    MB := MetabaseClass.Active;

    RubrInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Loo := RubrInst.CreateValidationsLookup;

    DictL := Loo.Lookup;

    DictL.WhereRevisionBetween(1, 25);

    Loo.WhereValidation := 12229121;

    Debug.WriteLine(Loo.WhereValidation.ToString);

    ValiData := Loo.LookupData;

    If ValiData = Null Then

        Debug.WriteLine("Данные не найдены");

    End If;

End Sub UserProc;


После выполнения примера в переменной ValiData будет храниться объект,
 содержащий найденные данные, соответствующие следующим условиям: значение
 ключа ревизии находится в интервале от «1» до «25», а ключ валидации равен
 «12229121».


См. также:


[IRubricatorValidationsLookup](IRubricatorValidationsLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IValidationExecData.Delete

IValidationExecData.Delete
-


# IValidationExecData.Delete


## Синтаксис


Delete;


## Описание


Метод Delete осуществляет удаление
 данных о расчете валидации.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должен существовать
 расчет валидации с ключом 1.


			Sub UserProc;

Var

    MB: IMetabase;

    RubInst: IRubricatorInstance;

    ValiData: IValidationExecData;

Begin

    MB := MetabaseClass.Active;

    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    ValiData := RubInst.GetValidationExecData(1, DictionaryGetDataOptions.None);

    ValiData.Delete;

End Sub UserProc;


После выполнения примера данные о расчете валидации с указанным ключом
 будут удалены.


См. также:


[IValidationExecData](IValidationExecData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

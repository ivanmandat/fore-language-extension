# IRubricatorInstance.CreateValidationsLookup

IRubricatorInstance.CreateValidationsLookup
-


# IRubricatorInstance.CreateValidationsLookup


## Синтаксис


CreateValidationsLookup: [IRubricatorValidationsLookup](../IRubricatorValidationsLookup/IRubricatorValidationsLookup.htm);


## Описание


Метод CreateValidationsLookup
 создает объект, осуществляющий поиск валидаций.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    MB: IMetabase;

    RubInst: IRubricatorInstance;

    Loo: IRubricatorValidationsLookup;

Begin

    MB := MetabaseClass.Active;

    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Loo := RubInst.CreateValidationsLookup;

    Loo.Open(DictionaryCursorOptions.None);

    While Loo.Eof = False Do

        Debug.WriteLine("Ключ выполнения валидации " + Loo.Current.Key.ToString + "; Ключ валидации "

            + Loo.Current.ValidationKey.ToString);

        Loo.Next;

    End While;

    Loo.Close;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 выполнениях валидаций.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

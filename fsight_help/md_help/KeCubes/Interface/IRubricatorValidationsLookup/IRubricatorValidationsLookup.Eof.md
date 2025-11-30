# IRubricatorValidationsLookup.Eof

IRubricatorValidationsLookup.Eof
-


# IRubricatorValidationsLookup.Eof


## Синтаксис


Eof: Boolean;


## Описание


Метод Eof возвращает признак
 того, является ли текущая запись последней.


## Комемнтарии


Метод возвращает значение True,
 если курсор находится на последней записи и False,
 если конец данных еще не достигнут.


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

        Debug.WriteLine("Ключ выполнения валидации " + Loo.Current.Key.ToString +

            " ; Ключ валидации " + Loo.Current.ValidationKey.ToString);

        Loo.Next;

    End While;

    Loo.Close;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 выполнениях валидаций.


См. также:


[IRubricatorValidationsLookup](IRubricatorValidationsLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

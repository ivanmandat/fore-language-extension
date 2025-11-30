# IRubricatorFactor.Factor

IRubricatorFactor.Factor
-


# IRubricatorFactor.Factor


## Синтаксис


Factor: Integer;


## Описание


Свойство Factor возвращает ключ
 показателя.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В данной базе присутствует показатель
 с мнемоникой Albania|BCA|Годы.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrIn: IRubricatorInstance;

    FactD: IRubricatorFactData;

    RubFactor: IRubricatorFactor;

Begin

    MB := MetabaseClass.Active;

    RubrIn := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    FactD := RubrIn.GetFactDataByMnemo("Albania|BCA|Годы");

    Debug.WriteLine("Наименование ревизии: " + FactD.Revision.Name);

    RubFactor := FactD.Factor;

    Debug.WriteLine("Ключ показателя: " + RubFactor.Factor.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 показателе с мнемоникой Albania|BCA|Годы.


См. также:


[IRubricatorFactor](IRubricatorFactor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IRubricatorFactData.Factor

IRubricatorFactData.Factor
-


# IRubricatorFactData.Factor


## Синтаксис


Factor: [IRubricatorFactor](../IRubricatorFactor/IRubricatorFactor.htm);


## Описание


Свойство Factor возвращает временной
 ряд, которому принадлежат данные.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В данной базе присутствует временной
 ряд с мнемоникой Albania|BCA|Годы.


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


После выполнения примера в окно консоли будет выведена информация об
 указанном временном ряде.


См. также:


[IRubricatorFactData](IRubricatorFactData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

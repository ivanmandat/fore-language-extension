# IRubricatorInstance.GetFactDataByMnemo

IRubricatorInstance.GetFactDataByMnemo
-


# IRubricatorInstance.GetFactDataByMnemo


## Синтаксис


GetFactDataByMnemo(Mnemo: String; [Options: [DictionaryGetDataOptions](KeRds.chm::/Enums/DictionaryGetDataOptions.htm)
 = 0]): [IRubricatorFactData](../IRubricatorFactData/IRubricatorFactData.htm);


## Параметры


Mnemo. Мнемоника показателя.


Options. Параметр получения
 данных.


## Описание


Метод GetFactDataByMnemo возвращает
 данные из справочника показателей по мнемонике показателя.


## Комментарии


Если мнемоники не используются для идентификации показателей, т.е. [IRubricator.HasMnemonics](../IRubricator/IRubricator.HasMnemonics.htm)
 возвращает значение False, то
 GetFactDataByMnemo всегда будет
 возвращать пустое значение.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В данной базе присутствует показатель
 с мнемоникой Albania|BCA|Годы.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    FactD: IRubricatorFactData;

    RubFactor: IRubricatorFactor;

Begin

    MB := MetabaseClass.Active;

    RubrInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    FactD := RubrInst.GetFactDataByMnemo("Albania|BCA|Годы");

    Debug.WriteLine("Наименование ревизии: " + FactD.Revision.Name);

    RubFactor := FactD.Factor;

    Debug.WriteLine("Ключ показателя: " + RubFactor.Factor.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 показателе с указанной мнемоникой.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

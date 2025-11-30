# IRubricator.GetDictionary

IRubricator.GetDictionary
-


# IRubricator.GetDictionary


## Синтаксис


GetDictionary(Dictionary: [RubricatorDictionary](../../Enums/RubricatorDictionary.htm);
 [Operation: [RubricatorDictionaryOperation](../../Enums/RubricatorDictionaryOperation.htm)
 = 0]): IMetaDictionary;


## Параметры


Dictionary. Исходные справочники,
 которые необходимо объединить.


Operation. Операция со справочником.
 Необязательный параметр. Значение по умолчанию [RubricatorDictionaryOperation.None](../../Enums/RubricatorDictionaryOperation.htm)
 - не производить никаких действий.


## Описание


Метод GetDictionary позволяет
 получить составной справочник базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    MB: IMetabase;

    Rubr: IRubricator;

    Dictionary: IMetaDictionary;

Begin

    MB := MetabaseClass.Active;

    Rubr := MB.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

    Dictionary := Rubr.GetDictionary(RubricatorDictionary.ValidationExecs Or

        RubricatorDictionary.ValidationExecsChildren Or

        RubricatorDictionary.ValidationValues, RubricatorDictionaryOperation.Create);

End Sub UserProc;


После выполнения примера будет создан составной справочник, объединяющий
 запуски базы, валидации, рассчитанные в запуске, а также значения, полученные
 валидацией.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

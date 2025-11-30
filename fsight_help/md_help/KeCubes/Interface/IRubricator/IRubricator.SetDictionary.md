# IRubricator.SetDictionary

IRubricator.SetDictionary
-


# IRubricator.SetDictionary


## Синтаксис


SetDictionary(Dictionary: [RubricatorDictionary](../../Enums/RubricatorDictionary.htm);
 Value: IMetaDictionary);


## Параметры


Dictionary. Справочник, содержащий
 данные базы данных временных рядов;


Value. Справочник репозитория.


## Описание


Метод SetDictionary позволяет
 установить объект репозитория, в котором будет храниться информация о
 справочнике базы данных временных рядов.


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

    Rubr := MB.ItemById("OBJ_RUBRICATOR").Edit As IRubricator;

    Dictionary := Rubr.GetDictionary(RubricatorDictionary.Facts Or

    RubricatorDictionary.Values, RubricatorDictionaryOperation.Create);

    Rubr.SetDictionary(RubricatorDictionary.FactsValues, Dictionary);

    (Rubr As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет назначен новый справочник, хранящий информацию
 о показателях и их значениях.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

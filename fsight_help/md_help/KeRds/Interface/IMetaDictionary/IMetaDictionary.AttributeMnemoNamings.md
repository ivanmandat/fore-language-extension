# IMetaDictionary.AttributeMnemoNamings

IMetaDictionary.AttributeMnemoNamings
-


# IMetaDictionary.AttributeMnemoNamings


## Синтаксис


AttributeMnemoNamings: [IMetaAttributeNamings](../IMetaAttributeNamings/IMetaAttributeNamings.htm);


## Описание


Свойство AttributeMnemoNamings
 возвращает коллекцию наименований атрибутов для генерации мнемоники.


## Комментарии


Символы-разделители наименований атрибутов определяют свойства [IMetaAttributeNaming.MnemoPrefix](../IMetaAttributeNaming/IMetaAttributeNaming.MnemoPrefix.htm) и
 [IMetaAttributeNaming.MnemoSuffix](../IMetaAttributeNaming/IMetaAttributeNaming.MnemoSuffix.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «TSDB».


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


			Sub UserProc;

Var

    DicEdit: IMetaDictionary;

    Nams: IMetaAttributeNamings;

    Nam: IMetaAttributeNaming;

    Ni, Nc: Integer;

    Atrs: IMetaAttributes;

    Atr: IMetaAttribute;

    Dims: ICubeModelDimensionsEx;

    Dim: ICubeModelDimensionEx;

    Di, Dc: Integer;

    Rubricator: IRubricator;

    Mb: IMetabase;

    RubI: IRubricatorInstance;

    FactorKeys: Array Of Integer;

    FactsLookup: IRubricatorFactsLookup;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    Rubricator := Mb.ItemById("TSDB").Edit As IRubricator;

    // Редактируем справочник временных рядов

    DicEdit := Rubricator.EditFacts;

    // Обновляем сиквенс справочника

    DicEdit.UpdateSequence(RdsUpdateSequenceOptions.Key);

    // Получаем атрибуты временных рядов

    Atrs := DicEdit.Attributes;

    // Получаем коллекцию наименований атрибутов для генерации мнемоники

    Nams := DicEdit.AttributeMnemoNamings;

    // Очищаем коллекцию наименований

    Nc := Nams.Count - 1;

    For Ni := Nc To 0 Step - 1 Do

        Nam := Nams.Item(Ni);

        Nams.Remove(Nam);

    End For;

    // Получаем измерения базы данных временных рядов

    Dims := Rubricator.Dimensions;

    // Перебираем измерения базы данных временных рядов

    Dc := Dims.Count - 1;

    For Di := 0 To Dc Do

        Dim := Dims.Item(Di);

        // Если измерение является ссылкой на справочник,

        // до добавляем атрибут «NAME» в правила генерации

        // мнемоник временных рядов.

        Atr := Atrs.FindByValuesObject(Dim.DimensionO.Key);

        If Atr <> Null Then

            Nam := Nams.Add(Atr);

            nam.NamingFormat := "NAME";

            // Задаем суффикс для мнемоник

            nam.MnemoSuffix := "|";

        End If;

    End For;

    // Сохраняем изменения

    (DicEdit As IMetabaseObject).Save;

    // Получаем экземпляр базы данных временных рядов

    RubI := (Rubricator As IMetabaseObject).Open(Null) As IRubricatorInstance;

    // Получаем ключи всех временных рядов

    FactsLookup := RubI.CreateFactsLookup;

    FactorKeys := FactsLookup.LookupFactors;

    // Выполняем регенерацию мнемоник

    RubI.RegenerateMnemo(FactorKeys);

End Sub UserProc;


После выполнения примера для базы данных временных рядов будут заданы
 правила генерации мнемоник ряда, задан суффикс для атрибутов, входящих
 в мнемонику. Затем мнемоники будут сгенерированы по новым правилам.


См. также:


[IMetaDictionary](IMetaDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

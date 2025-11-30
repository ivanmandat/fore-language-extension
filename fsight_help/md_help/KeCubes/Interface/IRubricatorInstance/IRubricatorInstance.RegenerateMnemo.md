# IRubricatorInstance.RegenerateMnemo

IRubricatorInstance.RegenerateMnemo
-


# IRubricatorInstance.RegenerateMnemo


## Синтаксис


RegenerateMnemo(FactorKeys: Array);


## Параметры


FactorKeys. - массив ключей
 показателей, мнемоники которых необходимо регенерировать.


## Описание


Метод RegenerateMnemo осуществляет
 регенерацию мнемоник показателей.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    Mb: IMetabase;

    Rubricator: IRubricator;

    DicEdit: IMetaDictionary;

    Nams: IMetaAttributeNamings;

    Nam: IMetaAttributeNaming;

    Ni, Nc: Integer;

    Atrs: IMetaAttributes;

    Atr: IMetaAttribute;

    Dims: ICubeModelDimensionsEx;

    Dim: ICubeModelDimensionEx;

    Di, Dc: Integer;


    RubI: IRubricatorInstance;

    Rev: IRubricatorRevision;

    FactorKeys: Array Of Integer;

    FactsLookup: IRubricatorFactsLookup;

Begin

    Mb := MetabaseClass.Active;

    Rubricator := Mb.ItemById("OBJ_RUBRICATOR").Edit As IRubricator;

    DicEdit := Rubricator.EditFacts;

    Nams := DicEdit.AttributeMnemoNamings;

    Atrs := DicEdit.Attributes;

    Dims := Rubricator.Dimensions;

    // Очистка коллекции наименований

    Nc := Nams.Count - 1;

    For Ni := Nc To 0 Step - 1 Do

        Nam := Nams.Item(Ni);

        Nams.Remove(Nam);

    End For;

    // Установка суффикса и префикса мнемоники

    Dc := Dims.Count - 1;

    For Di := 0 To Dc Do

        Dim := Dims.Item(Di);

        Atr := Atrs.FindByValuesObject(Dim.DimensionO.Key);

        If Atr <> Null Then

            Nam := Nams.Add(Atr);

            nam.MnemoPrefix := "(";

            nam.MnemoSuffix := ")";

            nam.NamingFormat := "NAME";

        End If;

    End For;

    // Сохранение изменений

    (DicEdit As IMetabaseObject).Save;

    // Генерация мнемоник базы

    RubI := (Rubricator As IMetabaseObject).Open(Null) As IRubricatorInstance;

    Rev := RubI.OpenRevision("Ревизия");

    FactsLookup := RubI.CreateFactsLookup;

    FactorKeys := FactsLookup.LookupFactors;

    RubI.RegenerateMnemo(FactorKeys);

End Sub UserProc;


После выполнения примера для базы данных временных рядов будут заданы
 суффикс (знак «)») и префикс (знак «(») мнемоники. Затем мнемоники будут
 сгенерированы по новым правилам.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

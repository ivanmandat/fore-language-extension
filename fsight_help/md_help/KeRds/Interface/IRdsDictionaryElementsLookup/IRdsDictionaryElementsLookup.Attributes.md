# IRdsDictionaryElementsLookup.Attributes

IRdsDictionaryElementsLookup.Attributes
-


# IRdsDictionaryElementsLookup.Attributes


## Синтаксис


Attributes: String;


## Описание


Свойство Attributes определяет
 список атрибутов, по которым будет производиться поиск.


## Комментарии


Идентификаторы атрибутов разделяются знаком «;». Данное свойство используется
 для смены списка атрибутов, по которым осуществляется поиск. По каждому
 атрибуту искомое значение задается с помощью свойства [Value](../IRdsDictionaryElementData/IRdsDictionaryElementData.Value.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «NSI_1», содержащего справочник НСИ с идентификатором «Dict_1». В справочнике
 содержится дополнительный атрибут с идентификатором «ATTRIBUTE1».


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Dict: IRdsDictionary;

    DictInst: IRdsDictionaryInstance;

    Look: IRdsDictionaryElementsLookup;

    Element: IRdsDictionaryElement;

Begin

    MB := MetabaseClass.Active;

    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

    DictInst := Dict.Open(Null);

    Look := DictInst.CreateLookup("NAME");

    Look.Options := RdsElementsLookupOptions.Partial;

    Look.Data.Value(0) := "Первый";

    // Первый поиск

    For Each Element In Look.LookupList Do

        Debug.WriteLine(Element.Name + " " + Element.Key.ToString);

    End For;

    //Второй поиск

    Debug.WriteLine("---Второй поиск---");

    Look.Attributes := "ATTRIBUTE1";

    Look.Options := RdsElementsLookupOptions.Default_;

    Look.Data.Value(0) := "33";

    For Each Element In Look.LookupList Do

        Debug.WriteLine(Element.Name + " " + Element.Key.ToString);

    End For;

End Sub UserProc;


После выполнения примера будут осуществлены два поиска элементов справочника
 НСИ. При первом будут искаться элементы, содержащие в своем наименование
 слово «Первый». При втором поиске будут искаться элементы, содержащие
 в значениях дополнительного атрибута значение «33». Наименования и ключи
 найденных элементов будут выведены в консоль среды разработки.


См. также:


[IRdsDictionaryElementsLookup](IRdsDictionaryElementsLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

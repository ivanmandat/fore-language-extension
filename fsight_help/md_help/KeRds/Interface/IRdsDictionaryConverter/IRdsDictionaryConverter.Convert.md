# IRdsDictionaryConverter.Convert

IRdsDictionaryConverter.Convert
-


# IRdsDictionaryConverter.Convert


## Синтаксис


Convert(Source: [IRdsDictionary](../IRdsDictionary/IRdsDictionary.htm)):
 [IRdsDictionary](../IRdsDictionary/IRdsDictionary.htm);


## Параметры


Source. Преобразуемый справочник
 НСИ.


## Описание


Метод Convert выполняет
 преобразование справочника НСИ в табличный справочник НСИ.


## Комментарии


После выполнения примера метод возвращает табличный справочник НСИ,
 полученный в результате преобразования.


## Пример


Для выполнения примера в репозитории предполагается наличие репозитория
 НСИ с идентификатором «RDS», содержащим справочник НСИ с идентификатором
 «DICT».


Добавьте ссылки на системные сборки «Metabase», «Rds».


			Sub UserProc;

Var

    MB: IMetabase;

    RdsKey: Integer;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Converter: IRdsDictionaryConverter;

    Result: IRdsDictionary;

Begin

    MB := MetabaseClass.Active;

    RdsKey := MB.GetObjectKeyById("RDS");

    MObj := MB.ItemByIdNamespace("DICT", RdsKey).Bind;

    Dict := MObj As IRdsDictionary;

    Converter := New RdsDictionaryConverter.Create;

    result := Converter.Convert(Dict);

End Sub UserProc;


После выполнения примера справочник НСИ будет преобразован в табличный
 справочник НСИ.


См. также:


[IRdsDictionaryConverter](IRdsDictionaryConverter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

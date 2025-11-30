# IRdsSortAttributes.SaveTo

IRdsSortAttributes.SaveTo
-


# IRdsSortAttributes.SaveTo


## Синтаксис


SaveTo(Element: Variant);


## Параметры


Element. Объект, в который
 будут сохранены параметры сортировки в виде XML-кода.


## Описание


Метод SaveTo сохраняет параметры
 сортировки значений атрибутов в формате XML.


## Комментарии


Для загрузки параметров сортировки из XML используйте метод [IRdsSortAttributes.LoadFrom](IRdsSortAttributes.LoadFrom.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором D_EXP_IMP, имеющего схемы экспорта.


Добавьте ссылки на системные сборки: Metabase, Rds, Xml.


			Sub UserProc;

Var

    Mb: IMetabase;

    dictObj: IMetabaseObject;

    Dict: IRdsDictionary;

    sExport: IMetaRdsExportSchema;

    dictSort: IRdsSortAttributes;

    Doc: IXmlDomDocument;

    Element: IXmlDomElement;

Begin

    Mb := MetabaseClass.Active;

    // Получаем справочник НСИ

    dictObj := Mb.ItemById("D_EXP_IMP").Bind;

    Dict := dictObj As IRdsDictionary;

    // Получаем первую схему экспорта

    sExport := Dict.ExportSchemas.Item(0) As IMetaRdsExportSchema;

    // Получаем параметры сортировки

    dictSort := sExport.SortAttributes;

    // Сохраняем параметры в файл

    Doc := New DOMDocument.Create;

    Element := Doc.createElement("SortAtt");

    dictSort.SaveTo(Element);

    Doc.appendChild(Element);

    Doc.save("C:\SortAtt.xml");

End Sub UserProc;


После выполнения примера параметры сортировки атрибутов в первой схеме
 экспорта будут сохранены в файл «С:\SortAtt.xml».


См. также:


[IRdsSortAttributes](IRdsSortAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

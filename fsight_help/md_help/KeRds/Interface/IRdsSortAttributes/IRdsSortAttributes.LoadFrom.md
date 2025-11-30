# IRdsSortAttributes.LoadFrom

IRdsSortAttributes.LoadFrom
-


# IRdsSortAttributes.LoadFrom


## Синтаксис


LoadFrom(Element: Variant);


## Параметры


Element. Объект, из которого
 будут загружены параметры сортировки значений атрибутов.


## Описание


Метод LoadFrom загружает параметры
 сортировки значений атрибутов из XML.


## Комментарии


Для сохранения параметров сортировки атрибутов используйте [IRdsSortAttributes.SaveTo](IRdsSortAttributes.SaveTo.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором D_EXP_IMP, имеющего схемы экспорта. В файловой системе
 должен содержаться файл «C:\SortAtt.xml» с параметрами фильтрации значений
 атрибутов в схеме экспорта данного справочника в формате XML.


Добавьте ссылки на системные сборки: Metabase, Rds, Xml.


			Sub UserProc;

Var

    Mb: IMetabase;

    Dict: IRdsDictionary;

    sExport: IMetaRdsExportSchema;

    dictSort: IRdsSortAttributes;

    Doc: IXmlDomDocument;

Begin

    Mb := MetabaseClass.Active;

    // Получаем справочник НСИ

    Dict := Mb.ItemById("D_EXP_IMP").Edit As IRdsDictionary;

    // Получаем первую схему экспорта

    sExport := Dict.ExportSchemas.Item(0) As IMetaRdsExportSchema;

    // Получаем параметры сортировки

    dictSort := sExport.SortAttributes;

    // Загружаем параметры сортировки из файла

    Doc := New DOMDocument.Create;

    Doc.load("C:\SortAtt.xml");

    dictSort.LoadFrom(Doc.documentElement);

    // Сохраняем справочник

    (Dict As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера параметры сортировки атрибутов в первой схеме
 экспорта будут загружены из файла «С:\SortAtt.xml».


См. также:


[IRdsSortAttributes](IRdsSortAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

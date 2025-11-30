# IRubricator.Measures

IRubricator.Measures
-


# IRubricator.Measures


## Синтаксис


Measures: [IRdsDictionary](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.htm);


## Описание


Свойство Measures определяет
 справочник репозитория НСИ, содержащий информацию о мерах.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором NewCatalog.


			Sub UserProc;

Var

    MB: IMetabase;

    Rubr: IRubricator;

    Measures: IRdsDictionary;

    MeasuresInst: IRdsDictionaryInstance;

    Att: IRdsAttributes;

    Elem: IRdsDictionaryElements;

    Data: IRdsDictionaryElementData;

Begin

    Mb := MetabaseClass.Active;

    Rubr := MB.ItemById("NewCatalog").Bind As IRubricator;

    Measures := Rubr.Measures;

    MeasuresInst := Measures.Open(Null);

    Att := Measures.Attributes;

    Elem := MeasuresInst.Elements;

    Data := Elem.CreateElementData;

    Data.Attribute(Att.Name.Key) := "Метр";

    Elem.Insert(Elem.Item(0).Key, Data);

End Sub UserProc;


После выполнения примера в справочник, содержащий информацию о мерах
 для базы данных временных рядов, будет добавлен новый элемент.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

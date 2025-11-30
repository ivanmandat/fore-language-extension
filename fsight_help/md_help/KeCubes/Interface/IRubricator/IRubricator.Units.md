# IRubricator.Units

IRubricator.Units
-


# IRubricator.Units


## Синтаксис


Units: [IRdsDictionary](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.htm);


## Описание


Свойство Units определяет справочник
 репозитория НСИ, содержащий информацию о единицах измерения.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором NewCatalog. В справочнике мер имеется элемент
 с наименованием "Метр".


			Sub UserProc;

Var

    Mb: IMetabase;

    Rubr: IRubricator;

    Units: IRdsDictionary;

    UnitsInst: IRdsDictionaryInstance;

    Att: IRdsAttributes;

    Elem: IRdsDictionaryElements;

    Link: IRDsLinkInstance;

    Data: IRdsDictionaryElementData;

    LookupElem: IRdsDictionaryElementsLookup;

Begin

    Mb := MetabaseClass.Active;

    Rubr := Mb.ItemById("NewCatalog").Bind As IRubricator;

    Units := Rubr.Units;

    UnitsInst := Units.Open(Null);

    Link := UnitsInst.Links.Item(0);

    Att := Units.Attributes;

    Elem := UnitsInst.Elements;

    Data := Elem.CreateElementData;

    Data.Attribute(Att.Name.Key) := "Длина";

    LookupElem := Link.ReferenceDictionary.CreateLookup("NAME");

    LookupElem.Data.Value(0) := "Метр";

    Data.Attribute(Att.FindById("MEASURE").Key) := LookupElem.Lookup.Item(0);

    Data.Attribute(Att.FindById("SCALE").Key) := 100;

    Elem.Insert(Elem.Item(0).Key, Data);

End Sub UserProc;


После выполнения примера в справочник, содержащий информацию о единицах
 измерения для базы данных временных рядов, будет добавлен новый элемент.
 Данный элемент будет связан с мерой - «Метр», содержащейся в справочнике
 мер.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

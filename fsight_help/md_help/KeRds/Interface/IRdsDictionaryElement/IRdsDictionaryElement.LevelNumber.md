# IRdsDictionaryElement.LevelNumber

IRdsDictionaryElement.LevelNumber
-


# IRdsDictionaryElement.LevelNumber


## Синтаксис


LevelNumber: Integer;


## Описание


Свойство LevelNumber возвращает
 уровень элемента.


## Комментарии


Для получения наименования элемента используйте свойство [IRdsDictionaryElement.Name](IRdsDictionaryElement.Name.htm).


## Пример


Для выполнения примера предполагается наличие справочника НСИ с идентификатором
 «DIM», содержащего несколько элементов.


Добавьте ссылки на системные сборки Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    DictInst: IRdsDictionaryInstance;

    Elements: IRdsDictionaryElements;

    Element: IRdsDictionaryElement;

Begin

    MB := MetabaseClass.Active;

    Dict := MB.ItemById("DIM").Bind As IRdsDictionary;

    Attrs := Dict.Attributes;

    DictInst := Dict.Open(Null);

    Elements := DictInst.Elements;

    Element := Elements.Item(3);

    Debug.WriteLine("Name = " + Element.Name +

        "; Level = " + Element.LevelNumber.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены наименование
 и уровень третьего элемента справочника НСИ.


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

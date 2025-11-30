# IRdsAttributes.Remove

IRdsAttributes.Remove
-


# IRdsAttributes.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс атрибута.


## Описание


Метод Remove осуществляет удаление
 атрибута, индекс которого передается посредством параметра Index.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - «NSI_1»,
 содержащего справочник НСИ с идентификатором «Dict_1».


			Sub Main;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

Begin

    MB:= MetabaseClass.Active;

    MObj:= MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

    Dict:= MObj As IRdsDictionary;

    Attrs:= Dict.Attributes;

    Attrs.Remove(0);

    MObj.Save;

End Sub Main;


После выполнения примера из справочника НСИ будет удален атрибут с индексом
 «0» .


См. также:


[IRdsAttributes](IRdsAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

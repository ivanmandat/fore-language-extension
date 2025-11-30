# IDimElements.DisplayAttributeValue

IDimElements.DisplayAttributeValue
-


# IDimElements.DisplayAttributeValue


## Синтаксис


DisplayAttributeValue(Element: Integer; AttributeIndex:
 Integer): Variant;


## Параметры


Element - индекс элемента.


AttributeIndex - индекс атрибута,
 отображаемое значение которого необходимо получить.


## Описание


Свойство DisplayAttributeValue
 возвращает отображаемое значение атрибута элемента. Индекс элемента и
 атрибута передаются посредством параметров Element
 и AttributeIndex соответственно.


## Комментарии


Данное свойство актуально использовать, если для используемого атрибута
 свойство [DisplayDifferentValue](../IDimAttributeInstance/IDimAttributeInstance.DisplayDifferentValue.htm)
 возвращает значение True.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 "NSI_1". В данном репозитории содержится справочник НСИ с идентификаторами
 «Dict_1».


			Sub UserProc;

Var

    MB: IMetabase;

    DictInst: IDimInstance;

    Attrs: IDimAttributesInstance;

    Attr: IDimAttributeInstance;

    Elems: IDimElements;

    Elem: Integer;

Begin

    MB := MetabaseClass.Active;

    DictInst := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Open(Null) As IDimInstance;

    Attrs := DictInst.Attributes;

    Attr := Attrs.Item(Attrs.Count - 1);

    If Attr.DisplayDifferentValue Then

            Elems := DictInst.Elements;

        For Elem := 0 To Elems.Count - 1 Do

            Debug.WriteLine("Реальное значение: " + Elems.AttributeValue(Elem, 0)

                + "; Отображаемое значение: " + Elems.DisplayAttributeValue(Elem, 0));

        End For;

    End If;

End Sub UserProc;


После выполнения примера будет осуществлена проверка последнего атрибута,
 созданного в справочнике НСИ. Если отображаемое значение не соответствует
 реальному значению по атрибуту, то для всех элементов оба значения будут
 выведены в консоль среды разработки.


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

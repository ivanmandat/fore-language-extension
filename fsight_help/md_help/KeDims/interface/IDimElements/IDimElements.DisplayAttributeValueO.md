# IDimElements.DisplayAttributeValueO

IDimElements.DisplayAttributeValueO
-


# IDimElements.DisplayAttributeValueO


## Синтаксис


DisplayAttributeValueO(Element: Integer; Attribute:
 [IDimAttributeInstance](../IDimAttributeInstance/IDimAttributeInstance.htm)):
 Variant;


## Параметры


Element - индекс элемента.


Attribute - атрибут, отображаемое
 значение которого необходимо получить.


## Описание


Свойство DisplayAttributeValueO
 возвращает отображаемое значение атрибута элемента. Индекс элемента и
 атрибут передаются посредством параметров Element
 и Attribute соответственно.


## Комментарии


Данное свойство актуально использовать, если для используемого атрибута
 свойство [DisplayDifferentValue](../IDimAttributeInstance/IDimAttributeInstance.DisplayDifferentValue.htm)
 возвращает значение True.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 "NSI_1". В данном репозитории содержится справочник НСИ с идентификаторами
 «Dict_1». В справочнике создан атрибут с идентификатором «LINKATTR». Данный
 атрибут используется для связи с другими справочниками НСИ.


			Sub UserProc;

Var

    MB: IMetabase;

    DictInst: IDimInstance;

    Attr: IDimAttributeInstance;

    Elems: IDimElements;

    Elem: Integer;

Begin

    MB := MetabaseClass.Active;

    DictInst := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Open(Null) As IDimInstance;

    Attr := DictInst.Attributes.FindById("LINKATTR");

    If Attr.DisplayDifferentValue Then

        Elems := DictInst.Elements;

        For Elem := 0 To Elems.Count - 1 Do

            Debug.WriteLine("Реальное значение: " + Elems.AttributeValueO(Elem, Attr)

                + "; Отображаемое значение: " + Elems.DisplayAttributeValueO(Elem, Attr));

        End For;

    End If;

End Sub UserProc;


После выполнения примера будет осуществлена проверка отображаемого значения
 атрибута «LINKATTR». Если отображаемое значение не соответствует реальному
 значению по атрибуту, то для всех элементов оба значения будут выведены
 в консоль среды разработки.


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

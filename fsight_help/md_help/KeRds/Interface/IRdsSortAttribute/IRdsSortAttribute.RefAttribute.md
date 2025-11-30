# IRdsSortAttribute.RefAttribute

IRdsSortAttribute.RefAttribute
-


# IRdsSortAttribute.RefAttribute


## Синтаксис


RefAttribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство RefAttribute определяет
 связанный атрибут сортировки элементов справочника НСИ.


## Пример


Для выполнения примера необходимо наличие формы, расположенных на ней
 кнопки с идентификатором «Button1», компонентов RdsDictionaryBox1 и UiRdsDictionary1,
 являющегося источником данных для компонента RdsDictionaryBox1. К компоненту
 UiRdsDictionary1 через свойство Object подключен справочник НСИ с идентификатором
 «SORT», у которого атрибут «test1» связан со справочником «LinkRDS».


Пример является обработчиком события OnCliсk для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Dict: IRdsDictionaryInstance;

    Attrs: IRdsAttributes;

    SAttr: IRdsSortAttribute;

    Sorter: IRdsElementsSorter;

    Elems: IRdsDictionaryElements;

    Attr1: IRdsAttribute;

Begin

    Dict:= RdsDictionaryBox1.Source.Instance;

    Elems:= Dict.Elements;

    Sorter:= Elems.CreateSorter(Elems.Root);

    Attrs:= Dict.Dictionary.Attributes;

    Attr1:= Attrs.FindById("test1");

    SAttr:= Sorter.Attributes.AddRefAttribute(attr1, attr1.Link.Reference.Dictionary.Attributes.FindById("test2"), True);

    debug.WriteLine(SAttr.RefAttribute.Name);

    Sorter.Sort(False);

    RdsDictionaryBox1.RefreshElements;

    Sorter.Save;

End Sub Button1OnClick;


После выполнения примера элементы справочника «SORT» будут отсортированы
 по атрибуту «test2» справочника «LinkRDS».


См. также:


[IRdsSortAttribute](IRdsSortAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

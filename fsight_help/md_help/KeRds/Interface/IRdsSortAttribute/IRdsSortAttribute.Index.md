# IRdsSortAttribute.Index

IRdsSortAttribute.Index
-


# IRdsSortAttribute.Index


## Синтаксис


Index: Integer;


## Описание


Свойство Index возвращает индекс
 атрибута сортировки в коллекции.


## Пример


Для выполнения примера необходимо наличие формы, расположенных на ней
 кнопки с идентификатором «Button1», компонентов RdsDictionaryBox1 и UiRdsDictionary1,
 являющегося источником данных для компонента RdsDictionaryBox1. К компоненту
 UiRdsDictionary1 через свойство Object подключен справочник НСИ. Подключите
 системные сборки ExstCtrls, Forms, Metabase, Rds.


Пример является обработчиком события OnCliсk для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Dict: IRdsDictionaryInstance;

    Attrs: IRdsAttributes;

    SAttr: IRdsSortAttribute;

    Sorter: IRdsElementsSorter;

    Elems: IRdsDictionaryElements;

Begin

    Dict := RdsDictionaryBox1.Source.Instance;

    Elems := Dict.Elements;

    Sorter := Elems.CreateSorter(Elems.Root);

    Attrs := Dict.Dictionary.Attributes;

    SAttr := Sorter.Attributes.Add(Attrs.FindById("Name"), True);

    debug.WriteLine(SAttr.Index);

    Sorter.Sort(False);

    RdsDictionaryBox1.RefreshElements;

End Sub Button1OnClick;


После выполнения примера при нажатии кнопки «Button1» будет произведена
 сортировка по атрибуту Name и вывод в консоль индекса атрибута сортировки.


См. также:


[IRdsSortAttribute](IRdsSortAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

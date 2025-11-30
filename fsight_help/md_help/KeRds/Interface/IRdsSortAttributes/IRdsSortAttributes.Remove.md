# IRdsSortAttributes.Remove

IRdsSortAttributes.Remove
-


# IRdsSortAttributes.Remove


## Синтаксис


Remove:(Index: Integer): Boolean;


## Параметры


Index. Индекс
 атрибута сортировки, который необходимо удалить.


## Описание


Метод Remove осуществляет удаление
 атрибута сортировки, индекс которого передается посредством параметра
 Index.


## Пример


Для выполнения примера необходимо наличие формы, расположенных на ней
 кнопок с наименованием «Button1» и «Button2», компонентов RdsDictionaryBox1
 и UiRdsDictionary1, являющегося источником данных для компонента RdsDictionaryBox1.
 К компоненту UiRdsDictionary1 подключен справочник НСИ. Подключите системные
 сборки ExstCtrls, Forms, Metabase, Rds.


Пример является обработчиком событий OnCliсk для кнопок.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Attr:IRdsAttribute;

Begin

    Attr:= Attrs.FindById("name");

    SAttrs.Add(Attr,True);

    Sorter.Sort(True);

    RdsDictionaryBox1.RefreshElements;

End Sub Button1OnClick;


Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Attr:IRdsAttribute;

Begin

    Attr:= Attrs.FindById("test");

    SAttrs.Remove(0);

    SAttrs.Add(Attr,True);

    Sorter.Sort(true);

    RdsDictionaryBox1.RefreshElements;

End Sub Button2OnClick;


Sub OBJ45736FormOnCreate(Sender: Object; Args: IEventArgs);

Begin

    Dict:= RdsDictionaryBox1.Source.Instance;

    Elems := Dict.Elements;

    Sorter:= Elems.CreateSorter(Elems.Root);

    Attrs := Dict.Dictionary.Attributes;

    SAttrs:= Sorter.Attributes;

End Sub OBJ45736FormOnCreate;


End Class OBJ45736Form;


После выполнения примера при нажатии кнопки Button1 элементы будут отсортированы
 по наименованию, при нажатии кнопки Button2 будет производиться сортировка
 по атрибуту «test».


См. также:


[IRdsSortAttributes](IRdsSortAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

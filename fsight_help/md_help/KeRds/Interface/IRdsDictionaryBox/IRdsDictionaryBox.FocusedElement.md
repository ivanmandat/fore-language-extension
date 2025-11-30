# IRdsDictionaryBox.FocusedElement

IRdsDictionaryBox.FocusedElement
-


# IRdsDictionaryBox.FocusedElement


## Синтаксис


FocusedElement: Integer;


## Описание


Свойство FocusedElement определяет ключ сфокусированного элемента справочника НСИ.


## Комментарии


Если фокус у элементов отсутствует, то свойство возвращает значение «-1». Если фокус находится на корневом элементе, то свойство возвращает значение «-2».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента RdsDictionaryBox с наименованием «RdsDictionaryBox1» и компонента UiRdsDictionary, являющегося источником данных для «RdsDictionaryBox1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Instance: IRdsDictionaryInstance;

    Attributes: IRdsAttributesInstance;

    Elements: IRdsDictionaryElements;

    Element: IRdsDictionaryElement;

    i, AttrKey, AttrKey1: Integer;

Begin

    i := RdsDictionaryBox1.FocusedElement;

    If i = -2 Then

        Debug.WriteLine("Сфокусирован корневой элемент справочника, не имеющий определенных значений атрибутов");

    Elseif i = -1 Then

        Debug.WriteLine("Нет сфокусированного элемента");

    Else

        Instance := RdsDictionaryBox1.Source.Instance;

        Attributes := Instance.Attributes;

        Elements := Instance.Elements;

        Element := Elements.ItemElement(i);

        AttrKey := Attributes.FindById("NAME").Key;

        AttrKey1 := Attributes.FindById("ORD").Key;

        Debug.WriteLine(Element.Attribute(AttrKey));

        Debug.WriteLine(Element.Attribute(AttrKey1));

    End If;

End Sub Button1OnClick;


После выполнения примера при нажатии кнопки в консоль будут выведены значения атрибутов «Наименование» и «Порядок» выделенного элемента справочника, отображаемого в компоненте «RdsDictionaryBox1».


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

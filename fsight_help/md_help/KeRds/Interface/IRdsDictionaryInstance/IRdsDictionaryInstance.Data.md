# IRdsDictionaryInstance.Data

IRdsDictionaryInstance.Data
-


# IRdsDictionaryInstance.Data


## Синтаксис


Data(Element: Integer): [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm);


## Параметры


Element. Ключ элемента, данные
 которого необходимо получить.


## Описание


Метод Data возвращает данные
 элемента, ключ которого передается посредством параметра Element.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента RdsDictionaryBox
 с наименованием «RdsDictionaryBox1» и компонента UiRdsDictionary,
 являющегося источником данных для «RdsDictionaryBox1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    DictInst: IRdsDictionaryInstance;

	    ElemData: IRdsDictionaryElementData;

	    Attrs: IRdsAttributesInstance;

	    Attr: IRdsAttributeInstance;

	    i: Integer;

	Begin

	    i := RdsDictionaryBox1.FocusedElement;

	    If i = -2 Then

	        Debug.WriteLine("Выделен корневой элемент справочника, не имеющий определенных значений

	        атрибутов");

	    Elseif i = -1 Then

	        Debug.WriteLine("Не выделен ни один элемент справочника");

	    Else

	        DictInst := RdsDictionaryBox1.Source.Instance;

	        ElemData := DictInst.Data(i);

	        Attrs := DictInst.Attributes;

	        For Each Attr In Attrs Do

	            Debug.Write("Атрибут: " + Attr.Name);

	            Debug.WriteLine("; Значение: " + ElemData.Attribute(Attr.Key));

	        End For;

	    End If;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в консоль среды разработки
 будет выведена информация об элементе справочника, сфокусированном в компоненте
 «RdsDictionaryBox1».


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

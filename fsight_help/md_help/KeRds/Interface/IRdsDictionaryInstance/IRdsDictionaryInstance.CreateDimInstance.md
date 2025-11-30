# IRdsDictionaryInstance.CreateDimInstance

IRdsDictionaryInstance.CreateDimInstance
-


# IRdsDictionaryInstance.CreateDimInstance


## Синтаксис


CreateDimInstance: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Метод CreateDimInstance возвращает
 данные справочника на основе текущего набора элементов справочника НСИ.


## Комментарии


Метод возвращает значения системных или всех атрибутов справочника НСИ
 в зависимости от значения свойства [IRdsDictionaryInstance.FetchAll](IRdsDictionaryInstance.FetchAll.htm).


Примечание.
 Метод не возвращает значения заимстовованных атрибутов.


Если напрямую приводить интерфейс [IRdsDictionaryInstance](IRdsDictionaryInstance.htm)
 к [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm),
 то возвращаются кешированные данные. При использовании метода CreateDimInstance
 возвращаются данные, основанных на фактическом наборе элементов. Поэтому
 для получения актуальных данных следует использовать CreateDimInstance.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента RdsDictionaryBox
 с идентификатором «RdsDictionaryBox1» и компонента UiRdsDictionary,
 являющегося источником данных для «RdsDictionaryBox1». В «RdsDictionaryBox1»
 загружен справочник НСИ.


Пример является обработчиком события OnClick
 для кнопки «Button1».


Добавьте ссылку на системную сборку «Dimensions».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    DictInst: IRdsDictionaryInstance;

    Inst: IDimInstance;

    Elems: IDimElements;

    ElemArr: IDimElementArray;

    Iter: IDimIterator;

    Ats: IDimAttributesInstance;

    Atr: IDimAttributeInstance;

    i: Integer;

    s: String;

Begin

    DictInst := RdsDictionaryBox1.Source.Instance;

    // Загружаем в кеш значения системных и пользовательских атрибутов

    DictInst.FetchAll := True;

    // Получаем данные справочника

    Inst := DictInst As IDimInstance;

    // Получаем элементы справочника

    Elems := Inst.Elements;

    ElemArr := Inst.RootElements;

    Iter := ElemArr.Iterator;

    // Получаем атрибуты справочника

    Ats := Inst.Attributes;

    // Выводим значения атрибутов

    Debug.WriteLine("Значения атрибутов для корневых элементов:");

    While Iter.Next Do

        Debug.WriteLine("Элемент " + Iter.Position.ToString);

        Debug.Indent;

        For i := 0 To Ats.Count - 1 Do

            s := "";

            Atr := Ats.Item(i);

            s := Atr.Attribute.Name + ": ";

            s := s + Atr.Value(Iter.Element);

            Debug.WriteLine(s);

        End For;

        Debug.Unindent;

        If Iter.Position = 9 Then

            Break;

        End If;

    End While;

End Sub Button1OnClick;


Результат выполнения примера: в окно консоли выведены значения атрибутов
 для первых десяти корневых элементов справочника НСИ, загруженного в «RdsDictionaryBox1».


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

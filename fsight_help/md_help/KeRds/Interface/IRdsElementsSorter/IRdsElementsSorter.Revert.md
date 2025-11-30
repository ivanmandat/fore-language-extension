# IRdsElementsSorter.Revert

IRdsElementsSorter.Revert
-


# IRdsElementsSorter.Revert


## Синтаксис


Revert();


## Описание


Метод Revert возвращает расположение
 элементов справочника НСИ в первоначальное состояние.


## Пример


Создайте форму, расположите на ней кнопки с наименованием «Button1»
 и «Button2», компонент RdsDictionaryBox
 с наименованием «RdsDictionaryBox1»
 и компонент UiRdsDictionary, являющийся
 источником данных для «RdsDictionaryBox1».


			Class OBJ26217Form: Form

    RdsDictionaryBox1: RdsDictionaryBox;

    UiRdsDictionary1: UiRdsDictionary;

    Button1: Button;

    dictionary: IRdsDictionaryInstance;

    sorter: IRdsElementsSorter;


Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    com: CustomComparer;

Begin

    com := New CustomComparer.Create;

    sorter := dictionary.Elements.CreateSorter(dictionary.Elements.Root);

    sorter.Comparer := com As IRdsElementComparer;

    sorter.Sort(True);

    RdsDictionaryBox1.RefreshElements;

End Sub Button1OnClick;


Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    sorter.Revert();

End Sub Button2OnClick;


Sub OBJ26217FormOnShow(Sender: Object; Args: IEventArgs);

Begin

    dictionary := RdsDictionaryBox1.Source.Instance;

End Sub OBJ26217FormOnShow;


End Class OBJ26217Form;


Class CustomComparer: Object, IRdsElementComparer


Function Less(LValue: IRdsDictionaryElement; RValue: IRdsDictionaryElement): Boolean;

Var

    comp: IComparer;

Begin

    comp := comparer.StringCaseInsensitiveComparer;

    If (Comp.Compare(LValue.Name, RValue.Name) > 0) Then Return True

        Else Return False;

    End If;

End Function Less;


End Class CustomComparer;


После выполнения примера при нажатии кнопки «Button1»
 будет создан пользовательский сортировщик элементов справочника НСИ, при
 нажатии кнопки «Button2» расположение
 элементов справочника НСИ будет возвращено в первоначальное состояние.


См. также:


[IRdsElementsSorter](IRdsElementsSorter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

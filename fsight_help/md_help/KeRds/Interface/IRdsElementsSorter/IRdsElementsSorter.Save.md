# IRdsElementsSorter.Save

IRdsElementsSorter.Save
-


# IRdsElementsSorter.Save


## Синтаксис


Save;


## Описание


Метод Save позволяет сохранить
 результаты сортировки элементов справочника в базу данных.


## Пример


Создайте форму, расположите на ней кнопку с наименованием «Button1»,
 компонент RdsDictionaryBox с наименованием
 «RdsDictionaryBox1» и компонент
 UiRdsDictionary, являющийся источником
 данных для «RdsDictionaryBox1».


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

    sorter.Save;

    RdsDictionaryBox1.RefreshElements;

End Sub Button1OnClick;


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


После выполнения примера при нажатии кнопки будет создан пользовательский
 сортировщик элементов справочника НСИ и результат сортировки элементов
 справочника будет сохранен в базу данных.


См. также:


[IRdsElementsSorter](IRdsElementsSorter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

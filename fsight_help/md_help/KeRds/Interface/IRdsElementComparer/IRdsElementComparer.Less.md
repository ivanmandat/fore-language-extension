# IRdsElementComparer.Less

IRdsElementComparer.Less
-


# IRdsElementComparer.Less


## Синтаксис


		Less(LValue: [IRdsDictionaryElement](../IRdsDictionaryElement/IRdsDictionaryElement.htm);
		 RValue:[IRdsDictionaryElement](../IRdsDictionaryElement/IRdsDictionaryElement.htm)):
		 Boolean;


## Параметры


LValue, RValue. Элементы сортировки.


## Описание


Метод Less сравнивает элементы,
 передаваемые посредством входных параметров LValue
 и RValue.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента RdsDictionaryBox с наименованием
 RdsDictionaryBox1 и компонента UiRdsDictionary, являющегося источником
 данных для RdsDictionaryBox1.


Добавьте ссылки на системные сборки: Collections, ForeCollections, Rds.


					Class IRdsElementComparer_Less_FormForm: Form

		    Button1: Button;

		    RdsDictionaryBox1: RdsDictionaryBox;

		    UiRdsDictionary1: UiRdsDictionary;

		    dictionary: IRdsDictionaryInstance;

		    LValue, RValue: IRdsDictionaryElement;

		    sorter: IRdsElementsSorter;

		    com: CustomComparer;


		Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Begin

		    sorter.Sort(True);

		    RdsDictionaryBox1.RefreshElements;

		End Sub Button1OnClick;


		Sub IRDSELEMENTCOMPARER_LESS_FORMFormOnShow(Sender: Object; Args: IEventArgs);

		Begin

		    com := New CustomComparer.Create;

		    dictionary := rdsdictionaryBox1.Source.Instance;

		    sorter := dictionary.Elements.CreateSorter(dictionary.Elements.Root);

		    sorter.Comparer := com As IRdsElementComparer;

		End Sub IRDSELEMENTCOMPARER_LESS_FORMFormOnShow;


		End Class IRdsElementComparer_Less_FormForm;


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
 сортировщик элементов справочника НСИ.


См. также:


[IRdsElementComparer](IRdsElementComparer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

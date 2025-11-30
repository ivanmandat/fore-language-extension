# Работа с данными справочника НСИ

Работа с данными справочника НСИ
-


# Работа с данными справочника НСИ


Работа с данными справочника НСИ осуществляется посредством свойств
 и методов, доступных в интерфейсе [IRdsDictionaryInstance](../Interface/IRdsDictionaryInstance/IRdsDictionaryInstance.htm).


Для получения доступа к данным необходимо открыть справочник НСИ и привести
 его к интерфейсу [IRdsDictionaryInstance](../Interface/IRdsDictionaryInstance/IRdsDictionaryInstance.htm):


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemById("Dict_1").Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null) As IRdsDictionaryInstance;

	End Sub UserProc;


Для использования функций поиска по значениям атрибутов элементов, работа
 с итератором и прочих, необходимо привести открытый справочник НСИ к интерфейсу
 [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm).


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DictInst: IRdsDictionaryInstance;

	    Inst: IDimInstance;

	    Elems: IDimElements;

	    ElemArr: IDimElementArray;

	    Iter: IDimIterator;

	Begin

	    MB := MetabaseClass.Active;

	    DictInst := MB.ItemById("Dict_1").Open(Null) As IRdsDictionaryInstance;

	    Inst := DictInst As IDimInstance;

	    Elems := Inst.Elements;

	    ElemArr := Inst.RootElements;

	    Iter := ElemArr.Iterator;

	    While Iter.Next Do

	        Debug.WriteLine(Elems.Name(Iter.Element));

	    End While;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименования
 всех корневых элементов справочника НСИ. Работа с элементами осуществляется
 посредством итератора обычных справочников.


Примечание.
 Необходимо помнить, что при прямом преобразовании к интерфейсу [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)
 будут использоваться кешированные данные. Если необходимо получить набор
 данных, основанных на фактическом наборе элементов (например данные элементов
 после изменения коллекции элементов во время выполнения формы), то используйте
 метод [CreateDimInstance](../Interface/IRdsDictionaryInstance/IRdsDictionaryInstance.CreateDimInstance.htm).


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    DictInst: IRdsDictionaryInstance;

	    Inst: IDimInstance;

	    Elems: IDimElements;

	    ElemArr: IDimElementArray;

	    Iter: IDimIterator;

	Begin

	    DictInst := RdsDictionaryBox1.Source.Instance;

	    Inst := DictInst.CreateDimInstance;

	    Elems := Inst.Elements;

	    ElemArr := Inst.RootElements;

	    Iter := ElemArr.Iterator;

	    While Iter.Next Do

	        Debug.WriteLine(Elems.Name(Iter.Element));

	    End While;

	End Sub Button1OnClick;


После выполнения примера в консоль среды разработки будут выведены наименования
 всех корневых элементов справочника НСИ, отображаемого в компоненте RdsDictionaryBox1.
 Работа с элементами осуществляется посредством итератора обычных справочников.


См. также:


[Примеры](KeRds_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

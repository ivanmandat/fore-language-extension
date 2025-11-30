# Работа с коллекциями: Разработка прикладного приложения

Работа с коллекциями: Разработка прикладного приложения
-


# Работа с коллекциями


Коллекции представляют собой совокупность объектов одного или разных
 типов. Использование коллекций позволяет в программе единым образом обрабатывать
 каждый объект, который в них входит. В языке Fore коллекции реализованы
 в сборке [Collections](ModCollections.chm::/ModCollections_Title.htm).


При необходимости может быть создана собственная коллекция, в которой
 могут быть переопределены свойства/методы какой-либо базовой коллекции,
 а также реализованы необходимые дополнительные возможности.


Для обработки коллекций используются различные циклы, доступные в [Fore](Fore.chm::/08_Operators/Fore_For.htm).


	Sub UserProc;

	Var

	    Arr: IArrayList;

	Begin

	    Arr := New ArrayList.Create;

	    // Добавление элементов в коллекцию

	    Arr.Add("A");

	    Arr.Add("D");

	    Arr.Add("G");

	    Arr.Add("C");

	    Arr.Add("B");

	    // Просмотр коллекции до каких-либо действий

	    Debug.WriteLine("---До каких-либо действий---");

	    ShowCollection(Arr);

	    // Сортировка

	    Arr.Sort(Comparer.StringComparer);

	    Debug.WriteLine("---После сортировки---");

	    ShowCollection(Arr);

	    // Обратный порядок в коллекции

	    Arr.Reverse;

	    Debug.WriteLine("---Переворот в обратном порядке---");

	    ShowCollection(Arr);

	    // Поиск элемента в коллекции

	    Debug.WriteLine("Индекс элемента G:" + Arr.IndexOf("G").ToString);

	End Sub UserProc;


	Sub ShowCollection(Collection: IEnumerable);

	Var

	    v: Variant;

	Begin

	    For Each v In Collection Do

	        Debug.Write(v + " ");

	    End For;

	    Debug.WriteLine("");

	End Sub ShowCollection;


Пример создания собственной коллекции, которая расширяет системную коллекцию
 ArrayList. При добавлении элементов в коллекцию для каждого элемента также
 будет генерироваться уникальный GUID:


	Sub UserProc;

	Var

	    m: MyCollections;

	    v: Array;

	    i: Integer;

	Begin

	    m := New MyCollections.Create;

	    // Добавление элементов в коллекцию

	    m.Add("Первая строка");

	    m.Add("Вторая строка");

	    m.Add(100500);

	    For i := 0 To m.Count - 1 Do

	        v := m.Item(i);

	        Debug.WriteLine("Значение: " + v[0] + ". GUID: " + v[1]);

	    End For;

	End Sub UserProc;


	// Собственная коллекция на базе коллекции ArrayList

	Class MyCollections: ArrayList

	    _Array: IArrayList;

	    _Guid: IArrayList;

	    i: Integer;


	    Public Constructor Create;

	    Begin

	        _Array := New ArrayList.Create;

	        _Guid := New ArrayList.Create;

	    End Constructor Create;

	    // Переопределение необходимых свойств и методов

	    Public Function Add(Obj: Variant): Integer;

	    Begin

	        _Array.Add(Obj);

	        Return (_Guid.Add(GuidGenerator.Generate));

	    End Function Add;


	    Public Property Count: Integer

	    Get

	    Begin

	        Return _Array.Count;

	    End Get

	    End Property Count;


	    Public Property Item(Index: Integer): Array

	    Get

	    Var

	        _Arr: Array;

	    Begin

	        If Index < _Array.Count Then

	            _Arr := New Variant[2];

	            _Arr[0] := _Array.Item(Index);

	            _Arr[1] := _Guid.Item(Index);

	            Return _Arr;

	        Else

	            Return Null

	        End If;

	    End Get

	    End Property Item;

	End Class MyCollections;


## Системные коллекции


В различных сборках среды разработки реализованы системные коллекции,
 которые предназначены для работы с определёнными группами объектов. В
 названиях коллекций на конце добавлена буква «s». Отдельные элементы коллекций
 описываются интерфейсами, названия которых совпадают с названием коллекции,
 но в конце отсутствует буква «s». Например: [IMetabaseObjectDescriptors](KeSom.chm::/Interface/IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm)
 - коллекция описаний объектов и [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
 - описание одного объекта; [ITreeListNodes](ModForms.chm::/Interface/ITreeListNodes/ITreeListNodes.htm)
 - коллекция элементов дерева и [ITreeListNode](ModForms.chm::/Interface/ITreeListNode/ITreeListNode.htm)
 - один элемент дерева.


Работа со всеми системными коллекциями однотипна, поэтому, созданный
 для обработки одной коллекции код, может быть быстро адаптирован для обработки
 какой-либо другой коллекции. В коллекциях имеются следующие общие свойства
 и методы:


	- Count. Возвращает количество
	 объектов в коллекции;


	- Item. Предоставляет
	 доступ к элементу коллекции по индексу;


	- Find или его модификации.
	 Позволяет производить поиск объектов в коллекции по какому-либо признаку.


Если коллекции являются расширяемые, то в них имеются следующие общие
 методы:


	- Add или его модификации.
	 Позволяют добавить в коллекцию новые объекты;


	- Remove или его модификации.
	 Позволяют удалять объекты из коллекции по определённому признаку;


	- Clear. Позволяет очистить
	 коллекцию целиком.


Для выполнения следующего примера потребуется форма, расположенная на
 ней кнопка с наименованием Button1 и компонент TreeList с наименованием
 TreeList1. Код является обработчиком события щелчка мыши по кнопке.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    MDescs: IMetabaseObjectDescriptors;

	    MDesc: IMetabaseObjectDescriptor;

	    Nodes: ITreeListNodes;

	    Node: ITreeListNode;

	    i, k: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Коллекция описаний объектов, расположенных в корневой папке репозитория

	    MDescs := MB.Root.Children;

	    // Коллекция элементов компонента TreeList

	    Nodes := TreeList1.Nodes;

	    k := MDescs.Count;

	    For i := 0 To k - 1 Do

	        // Получение описания объекта по индексу

	        MDesc := MDescs.Item(i);

	        // Создание в дереве элемента, соответствующего объекту репозитория

	        Node := Nodes.Add(Null, MDesc.Id);

	        Node.Data := MDesc;

	    End For;

	End Sub Button1OnClick;


Большинство системных коллекций поддерживают работу в цикле For
 Each:


	Var

	    //...

	    MDescs: IMetabaseObjectDescriptors;

	    MDesc: IMetabaseObjectDescriptor;

	    //...

	Begin

	    //...

	    For Each MDesc In MDescs Do

	        //...

	        // Работа с описанием отдельного объекта

	        //...

	    End For;


См. также:


[Разработка
 прикладного приложения](../01_Development_Environment/01_Purpose_of_the_constructor/Purpose_of_the_constructor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

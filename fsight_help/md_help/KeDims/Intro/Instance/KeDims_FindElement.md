# Поиск элементов справочника

Поиск элементов справочника
-


# Поиск элементов


Имея коллекцию элементов справочника неизбежно возникает необходимость
 получить только нужные элементы, например чтобы организовать из
 них [отметку справочника](../Selection/KeDims_Selection.htm).
 Рассмотрим различные варианты поиска элементов справочников.


	- Поиск
	 по значениям атрибута Идентификатор - поиск одного элемента
	 с заданным значением атрибута [Идентификатор](../../interface/IDimAttributes/IDimAttributes.Id.htm).


	- Поиск
	 по значениям атрибута - наиболее простой метод поиска, предназначен
	 для поиска одного элемента по значению одного определенного атрибута.


	- Поиск по индексированным
	 значениям атрибутов - поиск осуществляется
	 по атрибутам, включённым в индекс справочника. Используется для поиска
	 групп элементов, имеющих общие значения каких-либо атрибутов. Также
	 может использоваться для поиска элемента, имеющего уникальное сочетание
	 значений каких-либо атрибутов. Для данного вида поиска в справочнике
	 должен быть создан индекс.


	- Поиск
	 с настройкой условий поиска - наиболее универсальный вид поиска,
	 позволяющий настроить параметры поиска. Актуально использовать, если
	 не известно точное искомое значение атрибута. Данный вид поиска работает
	 с отметкой элементов.


## Поиск по значениям атрибута Идентификатор


Для поиска по значениям атрибута [Идентификатор](../../interface/IDimAttributes/IDimAttributes.Id.htm)
 в коллекции предназначен метод [FindById](../../interface/IDimElements/IDimElements.FindById.htm).


	Var

	    MB: IMetabase;

	    DimInst: IDimInstance;

	    Elements: IDimElements;

	    Sel: IDimSelection;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DimInst := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

	    Elements := DimInst.Elements;

	    Sel := DimInst.CreateSelection;

	    i := Elements.FindById("10");

	    If i <> -1 Then

	        Sel.SelectElement(i, True);

    End If;


В данном примере осуществляется поиск элемента со значением атрибута
 Идентификатор - «10». Если элемент будет найден, то он будет добавлен
 в отметку вместе со всеми дочерними элементами.


Для поиска элементов по значениям каких-либо других атрибутов необходимо
 использовать один из методов поиска, рассмотренный ниже.


## Поиск по значениям
 атрибута


Наиболее простой способ поиска элемента в справочнике является поиск
 по значению атрибута. Для поиска по значению атрибута предназначен метод
 [LookupValue](../../interface/IDimAttributeInstance/IDimAttributeInstance.LookupValue.htm).
 Данный метод осуществляет поиск первого элемента, имеющего указанное значение
 атрибута.


Var

    MB: IMetabase;

    DimInst: IDimInstance;

    Elements: IDimElements;

    Attr: IDimAttributeInstance;

    Elem: Integer;

Begin

    MB := MetabaseClass.Active;

    DimInst := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

    Elements := DimInst.Elements;

    Attr := DimInst.Attributes.FindById("NAME");

    Elem := Attr.LookupValue("Российская Федерация");

    If Elem <> -1 Then

        Debug.WriteLine("Идентификатор элемента: " + Elements.Id(Elem));

    End If;


Недостаток данного вида поиска в том, что можно найти только один элемент.
 Поиск не осуществляется циклически. Его использование актуально, если
 предполагается наличие только одного элемента с искомым значением атрибута.
 Если элементов может быть несколько, то используйте поиски, рассмотренные
 ниже.


При организации поиска в справочниках НСИ в определенных ситуациях может
 потребоваться поиск не по реальным значениям атрибутов, а по отображаемым
 (поиск по значениям атрибутов связи, в которых отображаемое значение зависит
 от [установленного
 формата](KeRds.chm::/Interface/IRdsLink/IRdsLink.DisplayFormat.htm)). В этом случае рекомендуется использовать
 метод [LookupDisplayValue](../../interface/IDimAttributeInstance/IDimAttributeInstance.LookupDisplayValue.htm).


## Поиск по индексированным значениям атрибутов


Для поиска коллекций элементов, объединенных по какому-либо признаку
 (например, общий родительский элемент) можно использовать методы интерфейсов
 [IDimIndexInstance](../../interface/IDimIndexInstance/IDimIndexInstance.htm)
 и [IDimIndexInstanceLookup](../../interface/IDimIndexInstanceLookup/IDimIndexInstanceLookup.htm).
 Для работы данного вида поиска необходимо создать в справочнике [индекс](../../interface/IDimIndex/IDimIndex.htm)
 и включить в него все атрибуты, по которым в дальнейшем будет производиться
 поиск.


Var

    MB: IMetabase;

    Dimen: IDimInstance;

    IndxsInst: IDimIndexesInstance;

    IndexInst: IDimIndexInstance;

    InstLookUp: IDimIndexInstanceLookup;

    LookUpElem: IDimElementArray;

    Elements: IDimElements;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Dimen := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

    IndxsInst := Dimen.Indexes;

    //Индекс, по атрибутам которого будет производиться поиск

    IndexInst := IndxsInst.FindById("PARENTID_IDX");

    InstLookUp := IndexInst.CreateDimIndexLookup;

    //Искомое значение

    InstLookUp.AttributeValue(0) := "0";

    //Поиск элементов

    LookUpElem := InstLookUp.LookUp;

    Elements := LookUpElem.Elements;

    Debug.WriteLine("Найдено " + LookUpElem.Count.ToString + " элемента(ов)");

    For Each i In LookUpElem Do

        //Наименования найденных элементов

        Debug.WriteLine(Elements.Name(i));

    End For;


В рассматриваемом примере предполагается наличие у справочника индекса
 с идентификатором «PARENTID_IDX». Данный индекс не является уникальным,
 либо первичным. В него включен один атрибут - идентификатор родительского
 элемента. При выполнении примера будет осуществлен поиск элементов, имеющих
 общий родительский элемент с идентификатором «0». Наименования найденных
 элементов будут выведены в консоль среды разработки.


У рассмотренных выше способов поиска есть один общий недостаток - элементы
 будут найдены только при полном совпадении значения атрибута и искомого
 значения. Если необходимо производить поиск по частичным значениям, то
 необходимо использовать поиск с настройкой условий поиска, рассмотренный
 ниже.


## Поиск с настройкой условий поиска


Для более гибкого поиска элементов с возможностью настройки условий
 поиска предназначены методы интерфейса [IDimOrmManager](../../interface/IDimOrmManager/IDimOrmManager.htm).
 Для настройки условий поиска также используются свойства и методы интерфейсов
 [IDimOrmClass](../../interface/IDimOrmClass/IDimOrmClass.htm),
 [IDimOrmCondition](../../interface/IDimOrmCondition/IDimOrmCondition.htm),
 [IDimTextCriteria](../../interface/IDimTextCriteria/IDimTextCriteria.htm)
 и [IDimConditionSelect](../../interface/IDimConditionSelect/IDimConditionSelect.htm).


Var

    MB: IMetabase;

    Dimen: IDimInstance;

    OrmMan: IDimOrmManager;

    Criteria: IDimTextCriteria;

    SelSetFactory: IDimSelectionSetFactory;

    SelSet: IDimSelectionSet;

    Sel: IDimSelection;

Begin

    MB := MetabaseClass.Active;

    Dimen := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

    OrmMan := New DimOrmManager.Create;

    //Создание отметки справочника, которая будет изменяться при поиске

    SelSetFactory := New DimSelectionSetFactory.Create;

    SelSet := SelSetFactory.CreateDimSelectionSet;

    Sel := SelSet.Add(Dimen);

    //Критерий поиска

    Criteria := New DimTextCriteria.Create;

    //Искать по атрибуту
 Наименование

    Criteria.CriteriaOptions := TextCriteriaOptions.SearchName;

    //Искомый текст

    Criteria.Text := "Республика";

    //Поиск и отметка найденных элементов

    OrmMan.SelectElements(Criteria, SelSet);


В данном примере будет осуществлен поиск по атрибуту Наименование. Искомый
 текст - «Республика». Элементы, содержащие в своем наименовании данное
 слово, будут включены в результирующую отметку «SelSet». В дальнейшем
 данную отметку можно использовать, например для отметки элементов в визуальных
 компонентах, отображающих дерево справочника.


Более подробную информацию о возможных настройках поиска можно узнать
 изучив свойства и методы указанных выше интерфейсов.


См. также:


[Работа с данными справочников](KeDims_Instance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Работа со значениями атрибутов

Работа со значениями атрибутов
-


# Работа со значениями атрибутов


Каждый элемент справочника представляет из себя совокупность значений
 различных атрибутов справочника. Получив [коллекцию
 элементов](../../interface/IDimElements/IDimElements.htm) и зная сквозной индекс требуемого элемента, можно получить
 значения базовых атрибутов справочника. Для этого используются следующие
 свойства:


	- [IDimElements.Id](../../interface/IDimElements/IDimElements.Id.htm)
	 - для указанного элемента возвращает значение атрибута с назначением
	 Идентификатор.


	- [IDimElements.Name](../../interface/IDimElements/IDimElements.Name.htm)
	 - для указанного элемента возвращает значение атрибута с назначением
	 Наименование.


Если у элементов необходимо получить значения по какому-либо другому
 атрибуту, то используются свойства [IDimElements.AttributeValue](../../interface/IDimElements/IDimElements.AttributeValue.htm)
 и [IDimElements.AttributeValueO](../../interface/IDimElements/IDimElements.AttributeValueO.htm).


Пример использования свойства [AttributeValue](../../interface/IDimElements/IDimElements.AttributeValue.htm):


	Var

	    MB: IMetabase;

	    DimInst: IDimInstance;

	    Elements: IDimElements;

	    Attributes: IDimAttributes;

	    UserAttr, i, Elem: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DimInst := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

	    Elements := DimInst.Elements;

	    Attributes := DimInst.Dimension.Attributes;

	    For i := 0 To Attributes.Count - 1 Do

	        If Attributes.Item(i) = Attributes.FindById("USERATTRIBUTE") Then

	            //Получения индекса пользовательского атрибута

	            UserAttr := i;

	            Break;

	        End If;

    End For;

	    For Elem := 0 To Elements.Count - 1 Do

	        //Вывод значений пользовательского атрибута для всех элементов

	        Debug.WriteLine(Elements.AttributeValue(Elem, UserAttr));

    End For;


Пример использования свойства [AttributeValueO](../../interface/IDimElements/IDimElements.AttributeValueO.htm):


Var

    MB: IMetabase;

    DimInst: IDimInstance;

    Elements: IDimElements;

    UserAttr: IDimAttributeInstance;

    Elem: Integer;

Begin

    MB := MetabaseClass.Active;

    DimInst := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

    Elements := DimInst.Elements;

    //Получение данных по пользовательскому атрибуту

    UserAttr := DimInst.Attributes.FindById("USERATTRIBUTE");

    For Elem := 0 To Elements.Count - 1 Do

        //Вывод значений пользовательского атрибута для всех элементов

        Debug.WriteLine(Elements.AttributeValueO(Elem, UserAttr));

    End For;


## Коллекция значений атрибутов


Для работы с коллекцией значений по различным атрибутам справочника
 предназначен интерфейс [IDimAttributeInstance](../../interface/IDimAttributeInstance/IDimAttributeInstance.htm).
 Используя свойства и методы данного интерфейса можно получить значение
 данного атрибута для любого элемента справочника. Также по значениями
 атрибута можно [производить поиск](KeDims_FindElement.htm)
 требуемых элементов.


Var

    MB: IMetabase;

    DimInst: IDimInstance;

    Elements: IDimElements;

    UserAttr: IDimAttributeInstance;

    Elem: Integer;

Begin

    MB := MetabaseClass.Active;

    DimInst := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

    Elements := DimInst.Elements;

    UserAttr := DimInst.Attributes.FindById("USERATTRIBUTE");

    For Elem := 0 To Elements.Count - 1 Do

        Debug.WriteLine(UserAttr.Value(Elem));

    End For;


Во всех рассмотренных примерах осуществляется работа с пользовательским
 атрибутом «USERATTRIBUTE», который должен быть заранее создан в справочнике.


См. также:


[Работа с данными справочников](KeDims_Instance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

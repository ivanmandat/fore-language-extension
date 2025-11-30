# Работа с данными справочников

Работа с данными справочников
-


# Работа с данными справочников


Для получения данных справочника необходимо [открыть](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 соответствующий объект репозитория и полученный экземпляр привести к интерфейсу
 [IDimInstance](../../interface/IDimInstance/IDimInstance.htm).
 [IDimInstance](../../interface/IDimInstance/IDimInstance.htm)
 - основной интерфейс, предоставляющий возможности по работе с элементами
 справочника, по работе со значениями определенных атрибутов, индексов,
 уровней справочника и работе с [отметкой
 справочника](../Selection/KeDims_Selection.htm).


	Var

	    MB: IMetabase;

	    DimInst: IDimInstance;

	Begin

	    MB := MetabaseClass.Active;

	    DimInst := MB.ItemById("Dim_1").Open(Null) As IDimInstance;


## Работа с элементами справочника


Для работы с коллекцией элементов
 справочника предназначен интерфейс [IDimElements](../../interface/IDimElements/IDimElements.htm).
 Получить коллекцию элементов можно используя свойство [Elements](../../interface/IDimInstance/IDimInstance.Elements.htm).
 Коллекция включает все элементы, на которые у пользователя есть [права
 на чтение](../Access/KeDims_Access_Elements.htm), без разделения на уровни или блоки. Элементы в коллекции
 имеют сквозную индексацию от 0
 до [Count](../../interface/IDimElements/IDimElements.Count.htm)-1.
 Зная сквозной индекс элемента можно получить все его параметры:


	- значения всех атрибутов по данному
	 элементу.


	- параметры уровня, блока, индекса,
	 которым принадлежит элемент.


Var

    MB: IMetabase;

    DimInst: IDimInstance;

    Elements: IDimElements;

    Elem: Integer;

Begin

    MB := MetabaseClass.Active;

    DimInst := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

    Elements := DimInst.Elements;

    For Elem := 0 To Elements.Count - 1 Do

        Debug.WriteLine("Идентификатор: " + Elements.Id(Elem) + " ;Наименование: " + Elements.Name(Elem));

    End For;


В данном коде для всех элементов справочника осуществляется вывод значений
 атрибутов Идентификатор и Наименование.


Для работы с элементами, объединенными по какому-либо признаку (элементы
 одного уровня, элементы одного блока), используются различные свойства
 интерфейса [IDimElements](../../interface/IDimElements/IDimElements.htm):


	- [Blocks](../../interface/IDimInstance/IDimInstance.Blocks.htm)
	 - элементы, распределенные по блокам справочника.


	- [Levels](../../interface/IDimInstance/IDimInstance.Levels.htm)
	 - элементы, распределенные по уровням справочника.


	- [RootElements](../../interface/IDimInstance/IDimInstance.RootElements.htm)
	 - корневые элементы справочника.


При работе с элементами, объединенными по какому-либо признаку, осуществляется
 работа не с коллекцией, а с массивом элементов. Для работы с
 массивом элементов предназначен интерфейс [IDimElementArray](../../interface/IDimElementArray/IDimElementArray.htm).
 В зависимости от того, по какому признаку объединены элементы, используются
 разные свойства для получения массива элементов:


	- [IDimBlockInstance.Elements](../../interface/IDimBlockInstance/IDimBlockInstance.Elements.htm)
	 - элементы блока справочника.


	- [IDimLevelInstance.Elements](../../interface/IDimLevelInstance/IDimLevelInstance.Elements.htm)
	 - элементы уровня справочника.


Индексация элементов в массиве может не совпадать со сквозной индексацией
 элементов в справочнике. Для получения соответствия используя свойство
 [Element](../../interface/IDimElementArray/IDimElementArray.Element.htm).


Var

    MB: IMetabase;

    DimInst: IDimInstance;

    LvlInst: IDimLevelInstance;

    Elements: IDimElements;

    ElementArr: IDimElementArray;

    i, Elem: Integer;

Begin

    MB := MetabaseClass.Active;

    DimInst := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

    LvlInst := DimInst.Levels.Item("LEVEL1");

    //Коллекция всех элементов справочника

    Elements := DimInst.Elements;

    //Массив элементов первого уровня

    ElementArr := LvlInst.Elements;

    For i := 0 To ElementArr.Count - 1 Do

        //Получение сквозного индекса элемента справочника

        Elem := ElementArr.Element(i);

        Debug.WriteLine("Идентификатор: " + Elements.Id(Elem) + " ;Наименование: " + Elements.Name(Elem));

    End For;


В данном коде будет получен массив элементов, расположенных на указанном
 уровне справочника. Значения атрибутов Идентификатор и Наименование для
 всех элементов этого уровня будут выведены в консоль среды разработки.


См. также:


[Введение](../KeDims_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

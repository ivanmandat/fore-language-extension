# Структура измерения фактов

Структура измерения фактов
-


# Структура измерения фактов


Измерение фактов является неотъемлемой
 частью различных видов кубов. При настройке привязки элементов измерения
 фактов в кубах определяется место фактического хранения значений по различным
 показателям. В разных видах кубов используются разные виды измерения фактов.
 В данном разделе мы рассмотрим работу с локальным
 измерением фактов куба.


Локальное измерение фактов доступно
 для использования в стандартных и вычисляемых кубах. В основе локального
 измерения фактов лежит конструируемый справочник, который создается как
 скрытый дочерний объект куба. Интерфейс [IDimensionModel](../../interface/IDimensionModel/IDimensionModel.htm)
 можно использовать для просмотра информации о структуре измерения фактов.
 Для редактирования структуры и настройки дерева элементов предназначен
 интерфейс [ICustomDimension](../../interface/ICustomDimension/ICustomDimension.htm).


Пример доступа к структуре локального измерения фактов в стандартном
 кубе:


	Var

	    //...

	    MB: IMetabase;

	    StdCube: IStandardCube;

	    CalcCube: ICalculatedCube;

	    FactDim: ICustomDimension;

	    //...

	Begin

	    //...

	    MB := MetabaseClass.Active;

	    StdCube := MB.ItemById("StdCube_1").Edit As IStandardCube;

	    //Установка признака использования локального измерения фактов в кубе

	    StdCube.ExternalFactDimension := False;

	    //Получение структуры локального измерения фактов

	    FactDim := StdCube.FactDimension.Dimension As ICustomDimension;

	    //...


Пример доступа к структуре локального измерения фактов в вычисляемом
 кубе:


	Var

	    //...

	    MB: IMetabase;

	    CalcCube: ICalculatedCube;

	    FactDim: ICustomDimension;

	    //...

	Begin

	    //...

	    MB := MetabaseClass.Active;

	    CalcCube := MB.ItemById("CalcCube_1").Edit As ICalculatedCube;

	    //Установка признака использования локального измерения фактов в кубе

	    CalcCube.ExternalFactDimension := False;

	    //Получение структуры локального измерения фактов

	    FactDim := CalcCube.InternalFactDimension;

	    //...


## Атрибуты измерения фактов


В измерении фактов автоматически создаются три базовых
 атрибута:


		 Индекс атрибута
		 Идентификатор атрибута
		 Наименование атрибута
		 Назначение атрибута


		 0
		 KEY
		 Ключ
		 [Идентификатор](../../interface/ICustomDimAttributes/ICustomDimAttributes.Id.htm),
		 [Первичный
		 ключ](../../interface/ICustomDimAttributes/ICustomDimAttributes.Primary.htm)


		 1
		 NAME
		 Наименование
		 [Наименование](../../interface/ICustomDimAttributes/ICustomDimAttributes.Name.htm)


		 2
		 ORDER
		 Порядок
		 [Порядок](../../interface/ICustomDimAttributes/ICustomDimAttributes.Order.htm)


При необходимости список атрибутов можно изменить. Для работы с коллекций
 атрибутов измерения фактов предназначен интерфейс [ICustomDimAttributes](../../interface/ICustomDimAttributes/ICustomDimAttributes.htm).


	Var

	    //...

	    FactDim: ICustomDimension;

	    CAttrs: ICustomDimAttributes;

	    CAttr: ICustomDimAttribute;

	    //...

	Begin

	    //...

	    CAttrs := FactDim.Attributes;

	    CAttr := CAttrs.Add;

	    CAttr.Id := "IMAGEATTR";

	    CAttr.Name := "Пиктограмма элемента";

	    CAttr.DataType := DbDataType.Integer;

	    CAttrs.ImageIndex := CAttr;

	    //...


Примечание.
 Если в измерении фактов изменяется набор базовых атрибутов, то для дальнейшей
 корректной работы измерения фактов обязательно должны быть созданы и назначены
 атрибуты: [Идентификатор](../../interface/ICustomDimAttributes/ICustomDimAttributes.Id.htm),
 [Первичный
 ключ](../../interface/ICustomDimAttributes/ICustomDimAttributes.Primary.htm), [Наименование](../../interface/ICustomDimAttributes/ICustomDimAttributes.Name.htm),
 [Порядок](../../interface/ICustomDimAttributes/ICustomDimAttributes.Order.htm).
 После пересоздания какого-либо базового атрибута для всех элементов должны
 быть выставлены новые значения по этому атрибуту.


Пример пересоздания базового атрибута:


Var

    //...

    FactDim: ICustomDimension;

    Attrs: ICustomDimAttributes;

    Attr: ICustomDimAttribute;

    Elements: ICustomDimElements;

    Element: Integer;

    //...

Begin

    //...

    //Получение списка атрибутов

    Attrs := FactDim.Attributes;

    //Создание нового атрибута

    Attr := Attrs.Add;

    Attr.DataType := DbDataType.Integer;

    Attr.Id := "UserKey";

    Attr.Name := "Пользовательский первичный ключ";

    //Использовать новый атрибут в качестве первичного ключа

    Attrs.Primary := Attr;

    //Получение списка существующих элементов

    Elements := FactDim.Elements;

    For Element := 0 To Elements.RowCount - 1 Do

        //По новому первичному ключу необходимо задать новые уникальные значения

        //Так как атрибуты добавляются в конец списка, то значение будет задаваться

        //по последнему атрибуту

        Elements.AttributeValue(Element, Elements.AttributeCount - 1) := 1000 + Element;

    End For;

    //...


## Уровни измерения фактов


Для работы с коллекцией уровней измерения фактов предназначен интерфейс
 [ICustomDimLevels](../../interface/ICustomDimLevels/ICustomDimLevels.htm).


Var

    //...

    CustDim: ICustomDimension;

    CustLevels: ICustomDimLevels;

    CustLevel: ICustomDimLevel;

    //...

Begin

    //...

    //Список уровней

    CustLevels := CustDim.Levels;

    CustLevels.Clear;

    CustLevel := CustLevels.Add;

    CustLevel.Id := "LVL1";

    CustLevel.Name := "Первый уровень";

    CustLevel := CustLevels.Add;

    CustLevel.Id := "LVL2";

    CustLevel.Name := "Второй уровень";

    //...


Также для автоматической организации списка уровней в соответствии с
 существующей иерархией элементов можно использовать метод [OrganizeLevels](../../interface/ICustomDimension/ICustomDimension.OrganizeLevels.htm).


## Работа с элементами измерения фактов


Работа с элементами измерения фактов заключается в организации иерархии
 элементов и установке значений атрибутов. Список элементов доступен в
 виде коллекции, либо в виде дерева.


### Работа с коллекцией элементов


Для получения списка элементов измерения фактов в виде коллекции
 предназначено свойство [Elements](../../interface/ICustomDimension/ICustomDimension.Elements.htm).
 Каждый элемент располагается в отдельной строке. Новые элементы создаются
 на самом верхнем уровне иерархии. Для создания новых элементов предназначен
 метод [Add](../../interface/ICustomDimElements/ICustomDimElements.Add.htm).
 После создания элемента необходимо с помощью свойства [AttributeValue](../../interface/ICustomDimElements/ICustomDimElements.AttributeValue.htm)
 определить значения всех атрибутов. Для настройки иерархии элементов в
 коллекции используется свойство [Owner](../../interface/ICustomDimElements/ICustomDimElements.Owner.htm).


Var

    //...

    CustDim: ICustomDimension;

    Elements: ICustomDimElements;

    Row: Integer;

    //...

Begin

    //...

    //Коллекция элементов

    Elements := CustDim.Elements;

    //Создание нового элемента

    Row := Elements.Add;

    //Установка значений атрибутов. Предполагается, что список атрибутов не изменялся

    Elements.AttributeValue(Row, 0) := Row;

    Elements.AttributeValue(Row, 1) := "Новые значения";

    Elements.AttributeValue(Row, 2) := Row;

    //...


### Работа с деревом элементов


Для получения списка элементов измерения фактов в виде дерева
 предназначено свойство [Tree](../../interface/ICustomDimension/ICustomDimension.Tree.htm).
 Список корневых элементов доступен в свойстве [RootChildren](../../interface/ICustomDimTree/ICustomDimTree.RootChildren.htm).
 Для настройки иерархии существующих элементов используется свойство [Owner](../../interface/ICustomDimTree/ICustomDimTree.Owner.htm).
 При создании новых элементов в методе [Add](../../interface/ICustomDimTree/ICustomDimTree.Add.htm)
 также указывается первичный ключ родительского элемента. После создания
 элемента необходимо с помощью свойства [AttributeValue](../../interface/ICustomDimTree/ICustomDimTree.AttributeValue.htm)
 определить значения всех атрибутов.


Var

    //...

    CustDim: ICustomDimension;

    Tree: ICustomDimTree;

    Root, Child: Integer;

    //...

Begin

    //...

    //Дерево элементов

    Tree := CustDim.Tree;

    //Создание корневого элемента

    Root := Tree.Add(Null);

    //Установка значений атрибутов. Предполагается, что список атрибутов не изменялся

    Tree.AttributeValue(Root, 0) := Root;

    Tree.AttributeValue(Root, 1) := "Корневой элемент";

    Tree.AttributeValue(Root, 2) := Root;

    //Создание дочернего элемента

    Child := Tree.Add(Root);

    //Установка значений атрибутов. Предполагается, что список атрибутов не изменялся

    Tree.AttributeValue(Child, 0) := Child;

    Tree.AttributeValue(Child, 1) := "Дочерний элемент";

    Tree.AttributeValue(Child, 2) := Child;

    //...


См. также:


[Работа
 со структурой справочников](KeDims_StructureDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

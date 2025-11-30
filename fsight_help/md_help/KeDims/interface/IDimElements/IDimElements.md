# IDimElements

IDimElements
-


# IDimElements


Сборка: Dimensions;


## Описание


Интерфейс IDimElements содержит
 свойства и методы коллекции элементов справочника.


## Иерархия наследования


IDimElements


## Комментарии


Использование свойств и методов данного интерфейса допустимо, если осуществляется
 работа с элементами исходного экземпляра справочника. Если в справочнике
 применена альтернативная иерархия, то предварительно необходимо создать
 итератор и использовать его для навигации по актуальному дереву элементов:


			Var

    //...

    DimInst: IDimInstance;

    Elements: IDimElements;

    Iterator: IDimIterator;

    //...

Begin

    //...

    DimInst := //Получение экземпляра справочника;

    Elements := DimInst.Elements;

    Iterator := Elements.Iterator;

    While Iterator.Next Do

        //...

        //Работа с элементами

        //...

    End While;


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllChildrenCount](IDimElements.AllChildrenCount.htm)
		 Свойство AllChildrenCount
		 возвращает общее количество дочерних элементов для указанного
		 элемента.


		 ![](../../Property_Image.gif)
		 [AttributeValue](IDimElements.AttributeValue.htm)
		 Свойство AttributeValue
		 возвращает значение атрибута элемента по индексам элемента и атрибута.


		 ![](../../Property_Image.gif)
		 [AttributeValueO](IDimElements.AttributeValueO.htm)
		 Свойство AttributeValueO
		 возвращает значение атрибута элемента по атрибуту и индексу элемента.


		 ![](../../Property_Image.gif)
		 [Block](IDimElements.Block.htm)
		 Свойство Block возвращает
		 объект, содержащий блок справочника, в котором находится элемент
		 с индексом Element.


		 ![](../../Property_Image.gif)
		 [BlockKey](IDimElements.BlockKey.htm)
		 Свойство BlockKey возвращает
		 ключ блока справочника.


		 ![](../../Property_Image.gif)
		 [Child](IDimElements.Child.htm)
		 Свойство Child возвращает
		 индекс указанного дочернего элемента в справочнике, относительно
		 корневого элемента.


		 ![](../../Property_Image.gif)
		 [Children](IDimElements.Children.htm)
		 Свойство Children возвращает
		 объект, содержащий массив дочерних объектов элемента.


		 ![](../../Property_Image.gif)
		 [ChildrenCount](IDimElements.ChildrenCount.htm)
		 Свойство ChildrenCount
		 возвращает количество непосредственных дочерних элементов для
		 указанного элемента.


		 ![](../../Property_Image.gif)
		 [Count](IDimElements.Count.htm)
		 Свойство Count возвращает
		 количество элементов справочника.


		 ![](../../Property_Image.gif)
		 [DisplayAttributeValue](IDimElements.DisplayAttributeValue.htm)
		 Свойство DisplayAttributeValue
		 возвращает отображаемое значение атрибута элемента по индексам
		 элемента и атрибута.


		 ![](../../Property_Image.gif)
		 [DisplayAttributeValueO](IDimElements.DisplayAttributeValueO.htm)
		 Свойство DisplayAttributeValueO
		 возвращает значение атрибута элемента по атрибуту и индексу элемента.


		 ![](../../Property_Image.gif)
		 [Elements](IDimElements.Elements.htm)
		 Свойство Elements возвращает
		 объект, содержащий массив элементов справочника.


		 ![](../../Property_Image.gif)
		 [Id](IDimElements.Id.htm)
		 Свойство Id возвращает
		 значение атрибута «Идентификатор» у элемента с индексом Element.


		 ![](../../Property_Image.gif)
		 [Level](IDimElements.Level.htm)
		 Свойство Level возвращает
		 объект, содержащий уровень справочника, на котором находится элемент
		 с индексом Element.


		 ![](../../Property_Image.gif)
		 [LevelKey](IDimElements.LevelKey.htm)
		 Свойство LevelKey возвращает
		 ключ уровня справочника, на котором расположен указанный элемент.


		 ![](../../Property_Image.gif)
		 [Name](IDimElements.Name.htm)
		 Свойство Name возвращает
		 значение атрибута «Наименование» у элемента с индексом Element.


		 ![](../../Property_Image.gif)
		 [NextSibling](IDimElements.NextSibling.htm)
		 Свойство NextSibling
		 возвращает индекс следующего элемента относительно заданного.


		 ![](../../Property_Image.gif)
		 [Owner](IDimElements.Owner.htm)
		 Свойство Owner возвращает
		 индекс элемента, являющегося родителем.


		 ![](../../Property_Image.gif)
		 [PrevSibling](IDimElements.PrevSibling.htm)
		 Свойство PrevSibling
		 возвращает индекс предыдущего элемента относительно заданного.


		 ![](../../Property_Image.gif)
		 [PrimaryIndex](IDimElements.PrimaryIndex.htm)
		 Свойство PrimaryIndex
		 возвращает объект, содержащий первичный индекс, в который входит
		 указанный элемент.


		 ![](../../Property_Image.gif)
		 [ReadAccess](IDimElements.ReadAccess.htm)
		 Свойство ReadAccess
		 возвращает True,
		 если к указанному элементу есть доступ на чтение.


		 ![](../../Property_Image.gif)
		 [WriteAccess](IDimElements.WriteAccess.htm)
		 Свойство WriteAccess
		 возвращает True,
		 если к указанному элементу есть доступ на запись.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FindById](IDimElements.FindById.htm)
		 Метод FindById осуществляет
		 поиск элемента по значению атрибута Идентификатор.


		 ![](../../Sub_Image.gif)
		 [GroupKey](IDimElements.GroupKey.htm)
		 Метод GroupKey возвращает
		 ключ группы для элемента.


		 ![](../../Sub_Image.gif)
		 [IsGroup](IDimElements.IsGroup.htm)
		 Метод IsGroup возвращает
		 признак того, является ли элемент группой.


		 ![](../../Sub_Image.gif)
		 [Iterator](IDimElements.Iterator.htm)
		 Метод Iterator создает
		 итератор по элементам справочника.


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

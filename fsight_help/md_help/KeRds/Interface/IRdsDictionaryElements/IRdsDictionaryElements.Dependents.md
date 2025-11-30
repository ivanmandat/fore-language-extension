# IRdsDictionaryElements.Dependents

IRdsDictionaryElements.Dependents
-


# IRdsDictionaryElements.Dependents


## Синтаксис


Dependents(Element: Integer): [IRdsDictionaryElementDependents](../IRdsDictionaryElementDependents/IRdsDictionaryElementDependents.htm);


## Параметры


Element. Ключ элемента, для
 которого необходимо получить зависимости.


## Описание


Свойство Dependents возвращает
 коллекцию зависимостей от элемента, ключ которого передается посредством
 входного параметра.


## Комментарии


Для получения ключа элемента используйте свойство [IRdsDictionaryElement.Key](../IRdsDictionaryElement/IRdsDictionaryElement.Key.htm),
 либо [Element](IRdsDictionaryElements.Element.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента DimensionTree
 с наименованием «DimensionTree1» и компонента UiDimension с наименованием
 «UiDimension1», являющегося источником данных для «DimensionTree1». Источник
 данных подключен к справочнику НСИ, поддерживающему отслеживание ссылок
 на элементы.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Depends: IRdsDictionaryElementDependents;

	    MDescs: IMetabaseObjectDescriptors;

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := UiDimension1.DimInstance As IRdsDictionaryInstance;

	    Elements := Dict.Elements;

	    //Индекс сфокусированного элемента увеличиваем на 1, т.к.

	    //в справочниках НСИ нулевым элементом является корневой элемент,

	    //соответствующий наименованию справочника

	    Depends := Elements.Dependents(Elements.Element(DimensionTree1.FocusedElement + 1));

	    //Коллекция описаний объектов, зависящих от элемента

	    MDescs := Depends.Objects;

	    For Each MDesc In MDescs Do

	        Debug.WriteLine(MDesc.Name);

	    End For;

	End Sub Button1OnClick;


При нажатии на кнопку будет получена коллекция зависимостей от элемента
 справочника НСИ, сфокусированного в компоненте «DimensionTree1». Наименования
 объектов, которые зависят от элемента, будут выведены в консоль среды
 разработки.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

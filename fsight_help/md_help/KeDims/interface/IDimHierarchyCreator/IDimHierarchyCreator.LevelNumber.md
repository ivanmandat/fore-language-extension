# IDimHierarchyCreator.LevelNumber

IDimHierarchyCreator.LevelNumber
-


# IDimHierarchyCreator.LevelNumber


## Синтаксис


LevelNumber: Integer;


## Описание


Свойство LevelNumber определяет
 индекс уровня справочника, для элементов которого будет включена группировка.


## Комментарии


По умолчанию свойству установлено значение «-1», при этом группируются
 все элементы справочника.


Если уровень задан, то группируются элементы только этого уровня. Элементы
 вышестоящих уровней будут формировать родительские элементы с сохранением
 всей иерархии. Дочерние элементы относительно элементов заданного уровня
 также сохранят свою иерархию.


## Пример


Для выполнения примера в репозитории предполагается наличие формы. На
 форме расположены два компонента UiDimension и два компонента DimensionTree.
 Компоненты UiDimension подключены в качестве источников данных к компонентам
 DimensionTree. К первому компоненту UiDimension подключен справочник репозитория.
 Также на форме расположена кнопка с наименованием «Button1». Справочник
 в своей структуре имеет несколько уровней элементов и атрибут с идентификатором
 «GROUP».


Добавьте ссылки на системную сборку: Dimensions.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Dim: IDimInstance;

    Sel: IDimSelection;

    Creator: IDimHierarchyCreator;

    HieInst: IDimHierarchyInstance;

    Keys: Array Of integer;

Begin

    Dim := UiDimension1.DimInstance;

    Sel := UiDimension1.Selection;

    Sel.SelectAll;

    // Создание альтернативной иерархии и настройка её свойств

    Creator := New DimHierarchyCreator.Create;

    Creator.Selection := Sel;

    Keys := New Integer[1];

    Keys[0] := Dim.Attributes.FindById("GROUP").Attribute.Key;

    Creator.Attributes := Keys;

    Creator.LevelNumber := 1;

    HieInst := Creator.HierarchyInstance;

    // Подключение справочника ко второму компоненту и задание альтернативной иерархии

    UiDimension2.Instance := Dim;

    UiDimension2.Selection.Hierarchy := HieInst;

End Sub Button1OnClick;


При нажатии на кнопку на базе элементов справочника, подключенного к
 компоненту UiDimension1, будет создана альтернативная иерархия. Элементы
 второго уровня будут сгруппированы по значениям указанного атрибута. После
 этого справочник будет подключен к компоненту UiDimension2 и для него
 будет задана созданная альтернативная иерархия.


См. также:


[IDimHierarchyCreator](IDimHierarchyCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

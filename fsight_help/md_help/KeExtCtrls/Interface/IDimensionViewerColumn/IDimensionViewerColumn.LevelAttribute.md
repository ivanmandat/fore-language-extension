# IDimensionViewerColumn.LevelAttribute

IDimensionViewerColumn.LevelAttribute
-


# IDimensionViewerColumn.LevelAttribute


## Синтаксис


LevelAttribute(Level: [IDimLevel](KeDims.chm::/interface/IDimLevel/IDimLevel.htm)):
 [IDimAttribute](KeDims.chm::/interface/IDimAttribute/IDimAttribute.htm);


## Параметры


Level.
 Уровень измерения, у которого необходимо получить атрибуты.


## Описание


Свойство LevelAttribute определяет,
 значения какого атрибута справочника будут отображаться у элементов в
 данной колонке, на заданном уровне.


## Комментарии


По умолчанию на всех уровнях отображаются значения атрибута, установленного
 в свойстве [IDimensionViewerColumn.Attribute](IDimensionViewerColumn.Attribute.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопкой с наименованием «Button1», компонента DimensionTree с наименованием
 «DimensionTree1» и компонента UiDimension, являющегося источником данных
 для «DimensionTree1». Справочник, подключенный к компоненту UiDimension
 имеет в структуре не менее двух уровней.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Col: IDimensionViewerColumn;

	    Attrs: IDimAttributes;

	    Lvls: IDimLevels;

	Begin

	    Col := DimensionTree1.Columns.Item(0);

	    Attrs := UiDimension1.Dimension.Attributes;

	    Lvls := UiDimension1.Dimension.Levels;

	    Col.LevelAttribute(Lvls.Item(0)) := Attrs.Name;

	    Col.LevelAttribute(Lvls.Item(1)) := Attrs.Id;

	End Sub Button1OnClick;


После выполнения примера в первой колонке компонента «DimensionCombo1»
 для элементов первого уровня будут отображаться значения атрибута Наименование,
 а для элементов второго уровня - значения атрибута Идентификатор.


См. также:


[IDimensionViewerColumn](IDimensionViewerColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

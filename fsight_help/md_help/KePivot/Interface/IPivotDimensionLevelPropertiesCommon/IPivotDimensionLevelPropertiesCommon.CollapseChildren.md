# IPivotDimensionLevelPropertiesCommon.CollapseChildren

IPivotDimensionLevelPropertiesCommon.CollapseChildren
-


# IPivotDimensionLevelPropertiesCommon.CollapseChildren


## Синтаксис


CollapseChildren: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство CollapseChildren указывает,
 будут ли дочерние элементы измерения(ий) находиться в свернутом состоянии
 при построении таблицы.


## Комментарии


Свойство может иметь значение TriState.Undefined,
 если текущие параметры получены для шапки/боковика и иерархии элементов
 в различных измерениях находятся в разных состояниях. При установке значения
 TriState.OnOption все иерархии
 будут свернуты.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1» и каких-либо визуальных компонентов, для которых «UiErAnalyzer1»
 является источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    LHeader: IPivotHeader;

Begin

    Express := UiErAnalyzer1.ErAnalyzer;

    Pivot := Express.Pivot;

    LHeader := Pivot.LeftHeader;

    If Not LHeader.IsCollapseChildren Then

        LHeader.CollapseChildren := TriState.OnOption;

    End If;

End Sub Button1OnClick;


При нажатии на кнопку будет осуществлена проверка наличия развернутых
 иерархий элементов в измерениях, расположенных в боковике. Если такие
 измерения имеются, то иерархии элементов всех измерений в боковике будут
 свернуты.


См. также:


[IPivotDimensionLevelPropertiesCommon](IPivotDimensionLevelPropertiesCommon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

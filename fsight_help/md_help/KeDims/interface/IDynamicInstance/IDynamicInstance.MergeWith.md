# IDynamicInstance.MergeWith

IDynamicInstance.MergeWith
-


# IDynamicInstance.MergeWith


## Синтаксис


MergeWith(Other: [IDynamicInstance](IDynamicInstance.htm)):
 Boolean;


## Параметры


Other. Справочник, с которым
 нужно объединить основной справочник.


## Описание


Метод MergeWith объединяет справочники.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 DimensionTree с наименованием DimensionTree1, компонент UiDimension с
 наименованием UiDimension1 и компонент Button с наименованием Button1.
 Укажите компонент UiDimension1 в качестве источника данных для компонента
 DimensionTree1. Источником данных компонента UiDimension1 должен быть
 справочник НСИ с настроенной динамической загрузкой элементов.


Также предполагается наличие в репозитории дополнительного справочника
 НСИ с настроенной динамической загрузкой элементов и с идентификатором
 MERGE_DIM.


Пример является обработчиком события OnClick для компонента Button1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Dim: IDynamicInstance;

    DimForMerge: IDynamicInstance;

Begin

    MB := MetabaseClass.Active;

    Dim := UiDimension1.DimInstance As IDynamicInstance;

    // Откроем справочник для объединения

    DimForMerge := MB.ItemById("MERGE_DIM").Open(Null) As IDynamicInstance;

    If Dim.CanMergeWith(DimForMerge) Then

        Dim.MergeWith(DimForMerge);

    End If;

End Sub Button1OnClick;


При нажатии на кнопку данные справочника «MERGE_DIM» будут скопированы
 в справочник, отображаемый в компоненте DimensionTree1.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

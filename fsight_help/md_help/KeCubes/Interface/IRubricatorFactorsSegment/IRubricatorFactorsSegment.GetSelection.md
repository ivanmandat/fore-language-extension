# IRubricatorFactorsSegment.GetSelection

IRubricatorFactorsSegment.GetSelection
-


# IRubricatorFactorsSegment.GetSelection


## Синтаксис


GetSelection(Selection: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm));


## Параметры


Selection. Отметка элементов
 измерения.


## Описание


Метод GetSelection возвращает
 отметку элементов измерения, определяющую диапазон данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В данной базе должны
 быть определены сегменты. Первый сегмент должен быть диапазоном данных,
 ограниченным отметкой элементов по атрибуту показателей с идентификатором
 COUNTRY. Атрибут является ссылкой на справочник.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Rub: IRubricator;

    Segs: IRubricatorSegments;

    Seg: IRubricatorSegment;

    SegmFact: IRubricatorFactorsSegment;

    Attr: IMetaAttribute;

    Dict: IMetabaseObject;

    DI: IDimInstance;

    Sel: IDimSelection;

Begin

    Mb := MetabaseClass.Active;

    Rub := Mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

    RubInst := (Rub As IMetabaseObjectDescriptor).Open(Null) As IRubricatorInstance;

    Segs := rubInst.Segments;

    Seg := Segs.Item(0).Edit;

    SegmFact := Seg As IRubricatorFactorsSegment;

    Attr := Rub.Facts.Attributes.FindById("COUNTRY");

    Seg.Attribute := Attr;

    Dict := Attr.ValuesObject.Bind;

    DI := Dict.Open(Null) As IDimInstance;

    Sel := DI.CreateSelection;

    SegmFact.GetSelection(Sel);

    Sel.InvertAll;

    SegmFact.SetSelection(Sel);

    Seg.Save;

End Sub UserProc;


После выполнения примера будет получена отметка элементов измерения,
 определяющая первый диапазон данных. Затем данная отметка будет изменена
 на противоположную, изменения в отметке элементов сегмента данных будут
 сохранены.


См. также:


[IRubricatorFactorsSegment](IRubricatorFactorsSegment.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

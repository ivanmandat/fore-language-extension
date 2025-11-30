# IPivotFilterAttributeLinks.Add

IPivotFilterAttributeLinks.Add
-


# IPivotFilterAttributeLinks.Add


## Синтаксис


Add: [IPivotFilterAttributeLink](../IPivotFilterAttributeLink/IPivotFilterAttributeLink.htm);


## Описание


Метод Add добавляет в коллекцию
 новую связь атрибутов и возвращает ее параметры.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором «EXPRESS_REPORT». В экспресс-отчете по строкам расположено
 минимум два измерения. В структуре первого измерения должен иметься атрибут
 с идентификатором «ID», в структуре второго измерения - атрибут «P_ID»
 . Добавьте ссылки на системные сборки: Dimension, Express, Metabase, Pivot.


			Sub CreateAttributeLink;

Var

    MB: IMetabase;

    Report: IEaxAnalyzer;

    Pivot: IPivot;

    LeftHeader: IPivotHeader;

    Filter: IPivotFilterSettings;

    AttrLinkFilter: IPivotFilterAttributeLink;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

    Pivot := Report.Pivot;

    //Измерения, расположенные по строкам

    LeftHeader := Pivot.LeftHeader;

    //Параметры фильтрации в таблице

    Filter := Pivot.Filter As IPivotFilterSettings;

    //Создание новой связи атрибутов

    AttrLinkFilter := Filter.AttributeLinks.Add;

    //Настройка параметров связи

    AttrLinkFilter.FirstDimensionKey := LeftHeader.Dim(0).Key;

    AttrLinkFilter.FirstDimensionAttrId := "ID";

    AttrLinkFilter.FirstDimensionAllowNull := True;

    AttrLinkFilter.SecondDimensionKey := LeftHeader.Dim(1).Key;

    AttrLinkFilter.SecondDimensionAttrId := "P_ID";

    AttrLinkFilter.SecondDimensionAllowNull := True;

    //Если связь рабочая, то сохраняем экспресс-отчет

    If AttrLinkFilter.IsValid Then

        (Report As IMetabaseObject).Save;

    End If;

End Sub CreateAttributeLink;


При выполнении примера для данных экспресс-отчета будет добавлен фильтр
 по атрибутам измерений. Связь устанавливается между первым и вторым измерением,
 которые расположены по строкам.


См. также:


[IPivotFilterAttributeLinks](IPivotFilterAttributeLinks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IPrxSliceDimension.UseDSAggregationValue

IPrxSliceDimension.UseDSAggregationValue
-


# IPrxSliceDimension.UseDSAggregationValue


## Синтаксис


UseDSAggregationValue: Boolean;


## Описание


Свойство UseDSAggregationValue
 определяет признак использования в регламентном отчете по данному измерению
 настроек агрегации, имеющихся в источнике данных.


## Комментарии


Данное свойство актуально, если измерение расположено в фиксированной
 области и свойство [IsDSAggregationSupported](IPrxSliceDimension.IsDSAggregationSupported.htm)
 возвращает значение True. Если
 данному свойству установлено значение True,
 то в качестве метода агрегации будет использоваться метод, установленный
 в настройках агрегации по данному измерению в источнике данных.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «Report».


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Source: IPrxDataSource;

    Slice: IPrxSlice;

    Dim: IPrxSliceDimension;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Edit As IPrxReport;

    For Each Source In Report.DataSources Do

        For Each Slice In Source.Slices Do

            For Each Dim In Slice.Dimensions Do

                If Dim.IsDSAggregationSupported And (Dim.Disposition = PrxHeaderDisposition.Fixed) Then

                    Dim.AggregationEnabled := TriState.OnOption;

                    Dim.UseDSAggregationValue := True;

                End If;

            End For;

        End For;

    End For;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будет осуществлена проверка измерений срезов
 всех источников данных регламентного отчета. Для измерений, расположенных
 в фиксированной области и имеющих настройки агрегации в источнике данных,
 будет разрешена агрегация данных в регламентном отчете. Расчет агрегированных
 данных будет осуществляться в соответствии с настройками агрегации из
 источника данных.


См. также:


[IPrxSliceDimension](IPrxSliceDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

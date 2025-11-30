# IMDCalculationDatasetInstance.View

IMDCalculationDatasetInstance.View
-


# IMDCalculationDatasetInstance.View


## Синтаксис


View: [ICalculatedCubeFormulasView](../ICalculatedCubeFormulasView/ICalculatedCubeFormulasView.htm);


## Описание


Свойство View возвращает параметры отображения элементов в измерениях и в формулах многомерного расчета.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного расчета на сервере БД с идентификатором «MDCalc_1».


			Sub UserProc;

Var

    MB: IMetabase;

    MDCalc: IMDCalculationInstance;

    Source: IMDCalculationSourceInstance;

    View: ICalculatedCubeFormulasView;

    Slice: IMDCalculationSliceInstance;

    Dim: IDimensionModel;

Begin

    MB := MetabaseClass.Active;

    //Многомерный расчет
    MDCalc := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

    //Источник данных многомерного расчета
    Source := MDCalc.Sources.FindById("Data_1");

    Slice := Source.Slices.FindById("Country");

    Dim := Slice.Dimension.Dimension;

    //Параметры отображения в измерении и в формулах
    View := Source.View;

    View.FormulaNaming(Slice.Key) := Dim.Attributes.Id;

    View.ViewNaming(Slice.Key) := Dim.Attributes.Name;

    MDCalc.SaveView;

End Sub UserProc;


При выполнении примера для указанного измерения источника данных будут настроены параметры отображения элементов в измерении и в формулах. В измерении будут отображаться наименования, в формулах - идентификаторы элементов.


См. также:


[IMDCalculationDatasetInstance](IMDCalculationDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IAutoCubeSourceDimensionFix.Operation

IAutoCubeSourceDimensionFix.Operation
-


# IAutoCubeSourceDimensionFix.Operation


## Синтаксис


Operation: [BasicAggregatorOperation](kematrix.chm::/enums/basicaggregatoroperation.htm);


## Описание


Свойство Operation определяет
 метод агрегации, применяемый по данным фиксированного измерения.


## Пример


Для выполнения примера в репозитории предполагается наличие автоматического
 куба с наименованием AUTO_CUBE.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    AutoCub: IAutoCube;

	    Source: IAutoCubeSource;

	    FixInfo: IAutoCubeSourceFixInfo;

	    DimFix: IAutoCubeSourceDimensionFix;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("AUTO_CUBE").Edit;

	    AutoCub := MObj As IAutoCube;

	    Source:= AutoCub.Source;

	    FixInfo := Source.FixInfo;

	    For Each DimFix In FixInfo Do

	      DimFix.Operation := BasicAggregatorOperation.ActualMean;

	      DimFix.Selection.SelectAll;

	    End For;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в автоматическом кубе будут зафиксированы все
 измерения куба-источника, отсутствующие в кубе-приёмнике. По данным измерениям
 будет осуществляться агрегация по всем элементам. Метод агрегации - Фактическое
 среднее.


См. также:


[IAutoCubeSourceDimensionFix](IAutoCubeSourceDimensionFix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

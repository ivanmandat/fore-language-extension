# ICalculatedCube.EvaluateOnly

ICalculatedCube.EvaluateOnly
-


# ICalculatedCube.EvaluateOnly


## Синтаксис


		EvaluateOnly: [EvaluateOnlyType](../../Enums/EvaluateOnlyType.htm);


## Описание


Свойство EvaluateOnly определяет,
 по каким координатам будут вычисляться значения результирующей матрицы.


## Комментарии


Свойство управляет флажком «Рассчитывать формулы по фактическим данным»
 в [мастере
 вычисляемого куба](UiNavObj.chm::/Cube/CreateCube/Master_Calculation/UiMd_Cube_CreateCube_Master_Calculation_3.htm). При установке значения [EvaluateOnlyType.Data](../../Enums/EvaluateOnlyType.htm)
 флажок будет включен.


## Пример


Для выполнения примера предполагается наличие вычисляемого куба с идентификатором
 «CALCULATED_CUBE».


Добавьте ссылки на системные сборки: Cubes, Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Cube: ICalculatedCube;

		Begin

		    Mb := MetabaseClass.Active;

		    Cube := Mb.ItemById("CALCULATED_CUBE").Edit As ICalculatedCube;

		    Cube.EvaluateOnly := EvaluateOnlyType.Selected;

		    (Cube As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера в настройках вычисляемого куба будет включено
 вычисление формул по фактическим данным.


См. также:


[ICalculatedCube](ICalculatedCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

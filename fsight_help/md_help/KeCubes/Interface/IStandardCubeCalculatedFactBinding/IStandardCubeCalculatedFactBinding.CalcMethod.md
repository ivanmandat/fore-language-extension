# IStandardCubeCalculatedFactBinding.CalcMethod

IStandardCubeCalculatedFactBinding.CalcMethod
-


# IStandardCubeCalculatedFactBinding.CalcMethod


## Синтаксис


CalcMethod: [CubeCalcMethod](../../Enums/CubeCalcMethod.htm);


## Описание


Свойство CalcMethod определяет
 режим расчёта значений вычисляемого факта при построении куба.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE». В измерении фактов куба имеется не
 менее трёх элементов: первые два элемента связаны с полями источника данных;
 третий элемент привязки не имеет. Добавьте ссылки на системные сборки:
 Cubes, Db, Dimensions, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    StdCube: IStandardCube;

		    StdCubeDest: IStandardCubeDestination;

		    CalcBind: IStandardCubeCalculatedFactBinding;

		Begin

		    MB := MetabaseClass.Active;

		    StdCube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

		    StdCubeDest := StdCube.Destinations.Item(0);

		    //Привязка вычисляемого факта

		    CalcBind := StdCubeDest.CalcBindings.Binding(3) As IStandardCubeCalculatedFactBinding;

		    CalcBind.Formula.AsString := "(@[2]*100)/@[1]";

		    CalcBind.CalcMethod := CubeCalcMethod.BySelection;

		    (StdCube As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера будет настроен вычисляемый факт куба. Формула
 вычисляемого факта будет рассчитывать процентное значение второго факта
 относительно первого. Расчёт будет производиться в соответствии с выставленной
 отметкой куба.


См. также:


[IStandardCubeCalculatedFactBinding](IStandardCubeCalculatedFactBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IStandardCubeDataset.SetCallback

IStandardCubeDataset.SetCallback
-


# IStandardCubeDataset.SetCallback


## Синтаксис


		SetCallback(Module: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);
		 ForeClass: String);


## Параметры


Module. Описание модуля, в
 котором реализован класс, реализующий методы интерфейса [ISQLCallback](KeDb.chm::/Interface/ISQLCallback/ISQLCallback.htm).


ForeClass. Наименование класса,
 который используется для обработки процесса формирования запроса на извлечение
 данных.


## Описание


Метод SetCallback задаёт для
 источника данных обработчик процесса формирования запроса на извлечение
 данных.


## Комментарии


В параметре ForeClass необходимо
 указать наименование класса, который реализует методы интерфейса [ISQLCallback](KeDb.chm::/Interface/ISQLCallback/ISQLCallback.htm).


Для сброса установленного обработчика задайте параметру Module
 значение Null, а параметру ForeClass -
 "".


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE» и модуля с идентификатором «CUBE_CALLBACK».
 В модуле реализован класс «SQLCallback».


Добавьте ссылки на системные сборки: Cubes, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Cube: IStandardCube;

		    CubeDataset: IStandardCubeDataset;

		Begin

		    MB := MetabaseClass.Active;

		    Cube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

		    CubeDataset := Cube.Destinations.Item(0).Datasets.Item(0);

		    CubeDataset.SetCallback(MB.ItemById("CUBE_CALLBACK"), "SQLCallback");

		    (Cube As IMetabaseObject).Save;

		End Sub UserProc;


		Public Class SQLCallback: Object, ISQLCallback

		    Sub BeforeConstruction(Components: ISQLComponents);

		     Var

		         i: Integer;

		         Select_, From_, Where, GroupBy, Aggregation, OrderBy: String;

		     Begin

		         Debug.WriteLine("Select_: " + Components.Select_);

		         Debug.WriteLine("From_: " + Components.From_);

		         Debug.WriteLine("Where: " + Components.Where);

		         Debug.WriteLine("GroupBy: " + Components.GroupBy);

		         Debug.WriteLine("Aggregation: " + Components.Aggregation);

		         Debug.WriteLine("OrderBy: " + Components.OrderBy);

		         Debug.WriteLine("SubQuery: " + Components.SubQuery.ToString);

		         Debug.WriteLine("ConditionCount: " + Components.ConditionCount.ToString);

		         For i := 0 To Components.ConditionCount - 1 Do

		             Debug.WriteLine("Condition " + i.ToString + " : " + Components.Condition(i).Condition);

		         End For;

		         Debug.WriteLine("TableAlias: " + Components.TableAlias);

		        //---Изменяемые части запроса

		        //Select_ := Components.Select_;

		        //...

		        //...Модификация Select_

		        //...

		        //Components.Select_ := Select_;


		        //From_ := Components.From_;

		        //...

		        //...Модификация From_

		        //...

		        //Components.From_ := From_;


		        //Where := Components.Where;

		        //...

		        //...Модификация Where

		        //...

		        //Components.Where := Where;


		        //GroupBy := Components.GroupBy;

		        //...

		        //...Модификация GroupBy

		        //...

		        //Components.GroupBy := GroupBy;


		        //Aggregation := Components.Aggregation;

		        //...

		        //...Модификация Aggregation

		        //...

		        //Components.Aggregation := Aggregation;


		        //OrderBy := Components.OrderBy;

		        //...

		        //...Модификация OrderBy

		        //...

		        //Components.OrderBy := OrderBy;

		    End Sub BeforeConstruction;


		    Sub AfterConstruction(Var SQL: String);

		    Begin

		        //При необходимости модификация окончательного текста запроса в переменной SQL

		        Debug.WriteLine("AFTER: " + SQL);

		    End Sub AfterConstruction;

		End Class SQLCallback;


При выполнении примера для первого источника куба будет установлен обработчик
 процесса формирования запроса.


См. также:


[IStandardCubeDataset](IStandardCubeDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

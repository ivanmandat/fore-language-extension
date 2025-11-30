# IStandardCubeCalculatedFactBinding.TimeForwardLag

IStandardCubeCalculatedFactBinding.TimeForwardLag
-


# IStandardCubeCalculatedFactBinding.TimeForwardLag


## Синтаксис


TimeForwardLag: Integer;


## Описание


Свойство TimeForwardLag определяет
 значение, на которое происходит увеличение отметки вперед (лаг вперед),
 по заданному уровню календаря.


## Комментарии


Увеличение отметки используется для извлечения дополнительных значений,
 которые могут потребоваться для вычисления формул. Фактический расчет
 будет производиться в соответствии с той отметкой, которая будет указана
 в методе [ICubeInstanceDestination.Execute](../ICubeInstanceDestination/ICubeInstanceDestination.Execute.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE». В измерении фактов куба имеется не
 менее двух элементов: первый элемент связан с полем источника данных;
 второй элемент привязки не имеет. В структуре куба присутствует календарное
 измерение.


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    StdCube: IStandardCube;

		    StdCubeDest: IStandardCubeDestination;

		    CalcBind: IStandardCubeCalculatedFactBinding;

		    Relation: IStandardCubeRelation;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemById("STD_CUBE").Edit;

		    StdCube := MObj As IStandardCube;

		    StdCubeDest := StdCube.Destinations.Item(0);

		    //Создаем отношение

		    Relation := StdCubeDest.Relations.Add;

		    Relation.Id := "NEXT_VALUE";

		    Relation.Name := "NEXT_VALUE";

		    //Формула отношения для календарного измерения

		    Relation.Relation(StdCubeDest.Dimensions.Calendar).AsString := "T.NEXT";

		    //Привязка второго(вычисляемого) факта

		    CalcBind := StdCubeDest.CalcBindings.Binding(3) As IStandardCubeCalculatedFactBinding;

		    CalcBind.Formula.AsString := "@[1]-NEXT_VALUE[@[1]]";

		    //Задаем лаг для вычисляемого показателя

		    CalcBind.TimeLagLevel := DimCalendarLevel.Year;

		    CalcBind.TimeForwardLag := 2;

		    MObj.Save;

		End Sub UserProc;


При выполнении примера в кубе будет создано отношение и настроен вычисляемый
 факт. Отношение будет извлекать следующее значение относительно текущей
 точки расчета по календарному измерению. Вычисляемый факт, используя отношение,
 будет рассчитывать разницу между текущим и следующим значением. Также
 для вычисляемого факта будет задан лаг, в соответствии с которым будет
 увеличиваться отметка при извлечении значений для расчета.


См. также:


[IStandardCubeCalculatedFactBinding](IStandardCubeCalculatedFactBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

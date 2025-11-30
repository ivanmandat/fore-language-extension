# ICalculatedCubeDimension.BackwardLag

ICalculatedCubeDimension.BackwardLag
-


# ICalculatedCubeDimension.BackwardLag


## Синтаксис


BackwardLag: Integer;


## Описание


Свойство BackwardLag определяет лаг назад, указывающий количество предшествующих элементов не входящих в отметку, по которым будут извлекаться значения.


## Комментарии


Лаг назад - это смещение назад по отметке относительно первого отмеченного элемента. Значение свойства BackwardLag указывает для скольких предшествующих элементов, не входящих в отметку, будет извлечено значение.


Значение лага необходимо указывать, если в формулах используется функция LAGVAL, которая получает значение элемента, смещенного относительно указанного элемента. Если элемент, координата которого была вычислена функцией LAGVAL, отсутствует в отметке, то функция вернет пустое значение, так как значение по этому элементу не извлекается из источника данных. Указание свойств BackwardLag и [ForwardLag](ICalculatedCubeDimension.ForwardLag.htm) позволяет задать необходимость извлечения значений по элементам, отсутствующим в отметке.


## Пример


Для выполнения примера предполагается наличие в репозитории вычисляемого куба с идентификатором «Calc_Cube». Первый источник данных вычисляемого куба в своей структуре содержит измерение с идентификатором «Calendar».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: ICalculatedCube;

    Dim: ICalculatedCubeDimension;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("Calc_Cube").Edit As ICalculatedCube;

    Dim := Cube.Sources.Item(0).Dimensions.FindById("Calendar");

    Dim.BackwardLag := 3;

    Dim.ForwardLag := 3;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера для указанного измерения куба-источника будут заданы лаги, определяющие количество элементов, не входящих в отметку, для которых будут извлекаться значения.


См. также:


[ICalculatedCubeDimension](ICalculatedCubeDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

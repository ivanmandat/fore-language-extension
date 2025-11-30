# ICalculatedCubeDimension.IsTime

ICalculatedCubeDimension.IsTime
-


# ICalculatedCubeDimension.IsTime


## Синтаксис


IsTime: Boolean;


## Описание


Свойство IsTime определяет,
 будет ли данное измерение использоваться для управления выбором периода
 действия формул.


## Комментарии


Если свойству установлено значение True,
 то так же необходимо определить значение свойства [TimeAttribute](ICalculatedCubeDimension.TimeAttribute.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором Calc_Cube. В кубе содержится календарное измерение
 с идентификатором CALENDAR.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Cube: ICalculatedCube;

    Dim: ICalculatedCubeDimension;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("Calc_Cube").Edit;

    Cube := MObj As ICalculatedCube;

    Dim := Cube.Dimensions.FindById("CALENDAR");

    Dim.IsTime := True;

    Dim.TimeAttribute := Dim.Dimension.Attributes.Item(1);

    MObj.Save;

End Sub UserProc;


После выполнения примера указанное измерение в вычисляемом кубе будет
 использоваться для управления выбором периода действия формул.


См. также:


[ICalculatedCubeDimension](ICalculatedCubeDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

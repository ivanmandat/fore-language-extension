# ICalculatedCubeDimension.Expression

ICalculatedCubeDimension.Expression
-


# ICalculatedCubeDimension.Expression


## Синтаксис


Expression(Attr: [IDimAttribute](kedims.chm::/interface/idimattribute/idimattribute.htm)
 ):
 [IExpression](foresys.chm::/interface/iexpression/iexpression.htm);


## Параметры


Attr - атрибут измерения ,
 по которому устанавливается связь.


## Описание


Свойство Expression возвращает
 выражение связи между измерениями куба-источника и куба-назначения.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором Calc_Cube. Куб-источник и куб-назначения имеют
 схожие по структуре измерения Dim_1 и Dim_1_1 соответственно. В каждом
 измерении создан индекс по атрибуту - Идентификатор.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: ICalculatedCube;

    Dim: ICalculatedCubeDimension;

Begin

    MB := MetabaseClass.Active;

    Cube := Mb.ItemById("Calc_Cube").Edit As ICalculatedCube;

    Dim := Cube.Sources.Item(0).Dimensions.FindById("Dim_1");

    Dim.Fixed := True;

    Dim.Index := Dim.Dimension.Indexes.PrimaryIndex;

    Dim.Expression(Dim.Dimension.Attributes.Id).AsString := "Dim_1_1.ID";

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет зафиксировано измерение источника Dim_1.
 Данное измерение отсутствует в кубе-назначении и связывается с измерением
 Dim_1_1 по полю ID.


См. также:


[ICalculatedCubeDimension](ICalculatedCubeDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

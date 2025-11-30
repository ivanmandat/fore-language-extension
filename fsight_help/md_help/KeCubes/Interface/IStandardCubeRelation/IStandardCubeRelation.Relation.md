# IStandardCubeRelation.Relation

IStandardCubeRelation.Relation
-


# IStandardCubeRelation.Relation


## Синтаксис


Relation(Dimension: [IStandardCubeDimension](../IStandardCubeDimension/IStandardCubeDimension.htm)):
 [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Параметры


Dimension. Измерение куба,
 по которому необходимо определить отношение.


## Описание


Свойство Relation возвращает
 выражение отношения куба по заданному измерению.


## Комментарии


В качестве значения параметра Dimension
 укажите какое-либо измерение куба, отличное от измерения фактов.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 STD_CUBE. В кубе имеется календарное измерение с идентификатором CALENDAR.


			Sub UserProc;

Var

    MB: IMetabase;

    StdCube: IStandardCube;

    Dest: IStandardCubeDestination;

    Relat: IStandardCubeRelation;

Begin

    MB := MetabaseClass.Active;

    StdCube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

    Dest := StdCube.Destinations.Item(0);

    Relat := Dest.Relations.Add;

    Relat.Id := "BEFORE_DOWN";

    Relat.Name := "Сдвиг на одну точку назад и вниз";

    Relat.Relation(Dest.Dimensions.FindById("CALENDAR")).AsString := "T.UP.UP";

    (StdCube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в стандартном кубе будет создано новое отношение
 для календарного измерения куба. При использовании данного отношения в
 вычисляемых фактах куба, будет выбираться элемент, расположенный на два
 уровня вверх.


См. также:


[IStandardCubeRelation](IStandardCubeRelation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

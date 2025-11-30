# IAutoCube.Transform

IAutoCube.Transform
-


# IAutoCube.Transform


## Синтаксис


Transform: [IAutoCubeTransform](../IAutoCubeTransform/IAutoCubeTransform.htm);


## Описание


Свойство Transform возвращает
 объект, осуществляющий преобразование данных при изменении позиции измерений
 в структуре куба.


## Пример


Для выполнения примера предполагается наличие в репозитории автоматического
 куба с идентификатором AUTO_CUBE. В кубе содержится более одного измерения.


			Sub UserProc;

Var

    MB: IMetabase;

    AutoCube: IAutoCube;

    Dims: IAutoCubeDimensions;

    Dim: IAutoCubeDimension;

    Transf: IAutoCubeTransform;

    b: Boolean;

Begin

    MB := MetabaseClass.Active;

    AutoCube := MB.ItemById("AUTO_CUBE").Edit As IAutoCube;

    Dims := AutoCube.Dimensions;

    Dims.Move(0, 1);

    Transf := AutoCube.Transform;

    Debug.WriteLine("Исходный список измерений");

    For Each Dim In Transf.MapDimensions Do

        Debug.WriteLine((Dim.Dimension As IMetabaseObject).Name)

    End For;

    Debug.WriteLine("Список измерений после перестановки");

    For Each Dim In Transf.Dimensions Do

        Debug.WriteLine((Dim.Dimension As IMetabaseObject).Name)

    End For;

    If Transf.GetChanged(b) Then

        Transf.Execute;

    End If;

    (AutoCube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в списке измерений автоматического куба будут
 переставлены местами первые два измерения. Если изменения коснулись измерений
 с данными, то будет осуществлено соответствующее преобразование данных
 куба.


См. также:


[IAutoCube](IAutoCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

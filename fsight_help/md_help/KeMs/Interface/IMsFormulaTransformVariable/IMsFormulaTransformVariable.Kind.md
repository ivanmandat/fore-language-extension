# IMsFormulaTransformVariable.Kind

IMsFormulaTransformVariable.Kind
-


# IMsFormulaTransformVariable.Kind


## Синтаксис


Kind: [MsFormulaTransformVariableKind](../../Enums/MsFormulaTransformVariableKind.htm);


## Описание


Свойство Kind
 возвращает вид переменной.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором «CONT_M». В данном контейнере должна присутствовать
 модель с идентификатором «Model».


			Sub UserProc;

Var

    mb: IMetabase;

    cm: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    InputsVar: IMsFormulaTransformVariables;

    Varabl: IMsFormulaTransformVariable;

    i: Integer;

Begin

    mb := MetabaseClass.Active;

    cm := mb.ItemById("CONT_M");

    Model := mb.ItemByIdNamespace("Model", cm.Key).Bind As IMsModel;

    Transform := Model.Transform;

    InputsVar := Transform.Inputs;

    For i := 0 To InputsVar.Count - 1 Do

        Varabl := InputsVar.Item(i);

        Debug.Write(Varabl.Id);

        Select Case Varabl.Kind

            Case MsFormulaTransformVariableKind.Stub: Debug.WriteLine(" - переменная содержит данные");

            Case MsFormulaTransformVariableKind.Parameter: Debug.WriteLine(" - переменная является параметром");

        End Select;

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 виде каждой входной переменной модели.


См. также:


[IMsFormulaTransformVariable](IMsFormulaTransformVariable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

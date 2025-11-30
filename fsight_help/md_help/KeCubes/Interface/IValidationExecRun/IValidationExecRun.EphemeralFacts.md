# IValidationExecRun.EphemeralFacts

IValidationExecRun.EphemeralFacts
-


# IValidationExecRun.EphemeralFacts


## Синтаксис


EphemeralFacts: Boolean;


## Описание


Свойство EphemeralFacts определяет,
 создавать ли новые ряды с признаком удаленности.


## Комментарии


EphemeralFacts используется,
 если валидация включает в расчет несуществующие, но возможные ряды.


Допустимые значения:


	- True. Новые ряды создаются
	 с признаком удаленности. Требуется указать значение свойства [IValidationExecRun.Revision](IValidationExecRun.Revision.htm);


	- False. Значение по умолчанию.
	 Новые ряды создаются без признака удаленности.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC_COMM», содержащей расчет валидации
 с ключом «19».


Также необходимо добавить ссылки на системные сборки «Cubes», «Rds»,
 «Ms», «Metabase», «Matrix», «Dimensions».


			Sub UserProc;

Var

    kFact: Integer;

    MB: IMetabase;

    Inst: IRubricatorInstance;

    Res: Integer;

    ArrVali: Array[0..1] Of Integer;

    MatCop, Mat: IMatrix;

    CooSrc, CooRes: IMatrixCoord;

    ItSrc, ItRes: IMatrixIterator;

    vVal: Variant;

    ValiDExecKey: Integer;

    ValiRun: IValidationExecRun;

    ValiData: IValidationExecData;

    Sel: IDimSelectionSet;

    Revi: IRubricatorRevision;

Begin

    kFact := 324912;

    MB := MetabaseClass.Active;

    Inst := MB.ItemById("FC_COMM").Open(Null) As IRubricatorInstance;

    ValiDExecKey := 19;

    ValiData := Inst.GetValidationExecData(ValiDExecKey, DictionaryGetDataOptions.None);

    Sel := Null;

// получаем данные расчета валидации

    ValiRun := Inst.LoadValidationRun(ValiData, New ValidationExecSelection.CreateSelection(Sel));

    Mat := ValiRun.Matrix;

    MatCop := ((New MatrixFactory.Create) As IMatrixFactory).CreateMatrix(Mat.Dimensions);

    MatCop.OperationMatrix(MatrixOperation.Append, Mat);

    Res := 0;

    Mat.Clear;

    Mat.ValueFlag := 1;

    ItSrc := MatCop.CreateIterator;

    CooSrc := MatCop.CreateCoord;

    ItRes := Mat.CreateIterator;

    CooRes := Mat.CreateCoord;

// изменяем полученные значения

    ItSrc.Move(IteratorDirection.First);

    While ItSrc.Valid Do

        ItSrc.PutCurrentPos(CooSrc);

        CooRes.Assign(CooSrc);

        CooRes.Item(0) := CooRes.Item(0) + 1;

        ItRes.PutCoord(CooRes);

        Res := Res + 1;

        ItRes.ValueFlag := 0;

        vVal := ItSrc.Value;

        If Not vVal.IsEmpty Then

            ItRes.Value := (vVal As Double) = 0.0 ? 0 : 1;

        End If;

        ItRes.ValueFlag := 1;

        ItSrc.Move(IteratorDirection.Next);

    End While;

// сохраняем изменения

    ValiData := Inst.GetValidationExecData(-1, DictionaryGetDataOptions.Create);

    ValiData.Name := (Inst As IMetabaseObjectInstance).Object.Name;

    ArrVali[0] := 3668;

    ArrVali[1] := 3677;

    ValiData.Validations := ArrVali;

    (ValiData As IRubricatorRecord).Save;

    ValiDExecKey := ValiData.Key;

    ValiRun.EphemeralFacts := True;

    Revi := Inst.OpenRevision("Validation Ephemeral");

    ValiRun.Revision := Revi;

    Try

        Inst.SaveValidationRun(ValiRun, ValiData);

    Finally

        Dispose ValiRun;

        Dispose Revi;

    End Try;

End Sub UserProc;


После выполнения примера будет загружен ранее полученный расчет валидации.
 В матрице его результатов изменяются значения и факты. Затем результат
 сохраняется. Сохранение фактов производится с признаком удаленности и
 указанием ревизии.


См. также:


[IValidationExecRun](IValidationExecRun.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

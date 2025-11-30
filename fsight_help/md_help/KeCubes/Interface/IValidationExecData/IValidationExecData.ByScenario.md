# IValidationExecData.ByScenario

IValidationExecData.ByScenario
-


# IValidationExecData.ByScenario


## Синтаксис


ByScenario: Boolean;


## Описание


Свойство ByScenario определяет,
 рассчитывать ли валидацию в измерении сценариев.


## Комментарии


Допустимые значения:


	- True. Рассчитывать валидацию
	 в измерении сценариев;


	- False. Значение по умолчанию.
	 Рассчитывать валидацию по актуальным данным.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором FC_COMM.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Inst: IRubricatorInstance;

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

	    bByScenario: Boolean;

	Begin

	    mb := MetabaseClass.Active;

	    Inst := mb.ItemById("FC_COMM").Open(Null) As IRubricatorInstance;

	    ValiDExecKey := 80;

	    ValiData := Inst.GetValidationExecData(ValiDExecKey, DictionaryGetDataOptions.None);

	    bByScenario := ValiData.ByScenario;

	    Sel := Null;

	    ValiRun := Inst.LoadValidationRun(ValiData, New ValidationExecSelection.CreateSelection(Sel));

	    Mat := ValiRun.Matrix;

	    MatCop := ((New MatrixFactory.Create) As IMatrixFactory).CreateMatrix(Mat.Dimensions);

	    MatCop.OperationMatrix(MatrixOperation.Append, Mat);

	    Mat.Clear;

	    Mat.ValueFlag := 1;

	    ItSrc := MatCop.CreateIterator;

	    CooSrc := MatCop.CreateCoord;

	    ItRes := Mat.CreateIterator;

	    CooRes := Mat.CreateCoord;

	    ItSrc.Move(IteratorDirection.First);

	    While ItSrc.Valid Do

	        ItSrc.PutCurrentPos(CooSrc);

	        CooRes.Assign(CooSrc);

	        ItRes.PutCoord(CooRes);

	        ItRes.ValueFlag := 0;

	            vVal := ItSrc.Value;

	            If Not vVal.IsEmpty Then

	                ItRes.Value := (vVal As Double) = 0.0 ? 0 : 1;

	            End If;

	            ItRes.ValueFlag := 1;

	        ItSrc.Move(IteratorDirection.Next);

	    End While;

	    ValiData := Inst.GetValidationExecData(-1, DictionaryGetDataOptions.Create);

	    ValiData.Name := (Inst As IMetabaseObjectInstance).Object.Name;

	    ValiData.ByScenario := bByScenario;

	    ArrVali[0] := 3668;

	    ArrVali[1] := 3677;

	    ValiData.Validations := ArrVali;

	    (ValiData As IRubricatorRecord).Save;

	    ValiDExecKey := ValiData.Key;

	    ValiRun.EphemeralFacts := False;

	    Debug.WriteLine("Признак расчета в измерении сценариев: " + ValiRun.ByScenario.ToString);

	    Revi := Inst.OpenRevision("Validation");

	    ValiRun.Revision := Revi;

	    Inst.SaveValidationRun(ValiRun, ValiData);

	End Sub UserProc;


После выполнения примера загружаются данные по валидации с ключом «80»,
 у которой установлен признак расчета по сценариям. Затем эти данные сохраняются
 в новый расчет валидации также в измерении по сценариям.


См. также:


[IValidationExecData](IValidationExecData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

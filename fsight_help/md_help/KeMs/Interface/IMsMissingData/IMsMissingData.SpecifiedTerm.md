# IMsMissingData.SpecifiedTerm

IMsMissingData.SpecifiedTerm
-


# IMsMissingData.SpecifiedTerm


## Синтаксис


SpecifiedTerm: [IMsFormulaTermInfo](../IMsFormulaTermInfo/IMsFormulaTermInfo.htm);


## Описание


Свойство SpecifiedTerm определяет ряд, используемый в обработке пропусков.


## Комментарии


Ряд задается в виде терма. Метод обработки пропусков определяется свойством [IMissingData.Method](StatLib.chm::/Interface/IMissingData/IMissingData.Method.htm).


SpecifiedTerm учитывается при следующих методах обработки пропусков:


-
MissingDataMethod.Pattern. Для вычисления пустых значений ряда используется интерполяция по шаблону, заданному другим рядом;


-
MissingDataMethod.Overlay. Пропуски заполняются значениями заданного ряда.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «OBJ_MS», содержащим модель с идентификатором «MODEL» и переменную с идентификатором «OBJ_VAR». Модель рассчитывается с помощью Грей-метода. Также необходимо добавить ссылки на системные сборки «Ms», «Metabase» и «Stat».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        MsDescrKey: Integer;

        Model: IMsModel;

        ModelTrans: IMsFormulaTransform;

        Formula: IMsFormula;

        Grey: IMsGreyForecastTransform;

        MissingData: IMsMissingData;

        Series: IMsFormulaTransformVariables;

        OverlayVar: IMsVariableStub;

        Ser: IMsFormulaTransformVariable;

        TermInfo: IMsFormulaTermInfo;

    Begin

        Mb := MetabaseClass.Active;

        MsDescrKey := Mb.ItemById("OBJ_MS").Key;

    // Получение модели
        Model := MB.ItemByIdNamespace("MODEL", MsDescrKey).Edit As IMsModel;

        ModelTrans := Model.Transform;

    // Настройка параметров расчета модели
        Formula := ModelTrans.FormulaItem(0);

        Grey := Formula.Method As IMsGreyForecastTransform;

        MissingData := Grey.MissingData As IMsMissingData;

        Series := ModelTrans.Series;

        OverlayVar := MB.ItemByIdNamespace("OBJ_VAR", MsDescrKey).Edit As IMsVariableStub;

        Ser := Series.Add(OverlayVar As IVariableStub);

        TermInfo := ModelTrans.CreateTermInfo;

        TermInfo.Slice := Ser.Slices.Add(Null);

        MissingData.Method := MissingDataMethod.Pattern;

        MissingData.SpecifiedTerm := TermInfo;

    // Сохранение параметров расчета модели
        (Model As IMetabaseObject).Save;

    End Sub UserProc;


После выполнения примера для модели будет задан новый метод обработки пропусков: по шаблону. Для вычисления пустых значений используется интерполяция по шаблону, заданному переменной «OBJ_VAR».


См. также:


[IMsMissingData](IMsMissingData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

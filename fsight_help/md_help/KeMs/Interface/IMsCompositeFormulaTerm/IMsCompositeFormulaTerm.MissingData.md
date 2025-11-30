# IMsCompositeFormulaTerm.MissingData

IMsCompositeFormulaTerm.MissingData
-


# IMsCompositeFormulaTerm.MissingData


## Синтаксис


		MissingData: [IMissingData](StatLib.chm::/Interface/IMissingData/IMissingData.htm);


## Описание


Свойство MissingData возвращает
 параметры метода обработки пропусков в значениях составного терма.


## Комментарии


Свойство учитывается, если [IMsCompositeFormulaTerm.ApplyMissingData](IMsCompositeFormulaTerm.ApplyMissingData.htm)
 принимает значение True.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором OBJ_MS, содержащим модель с идентификатором
 MODEL. Модель рассчитывается с помощью линейной регрессии (оценка МНК).


Добавьте ссылки на системные сборки: Ms, Metabase и Stat.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    MsDescrKey: Integer;

		    Model: IMsModel;

		    ModelTrans: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Linear: IMsLinearRegressionTransform;

		    CompositeTerm: IMsCompositeFormulaTerm;

		Begin

		    Mb := MetabaseClass.Active;

		    MsDescrKey := Mb.ItemById("OBJ_MS").Key;

		    // Получение модели

		    Model := MB.ItemByIdNamespace("MODEL", MsDescrKey).Edit As IMsModel;

		    ModelTrans := Model.Transform;

		    // Настройка параметров расчета модели

		    Formula := ModelTrans.FormulaItem(0);

		    Linear := Formula.Method As IMsLinearRegressionTransform;

		    CompositeTerm := Linear.Explanatories.Item(0);

		    CompositeTerm.ApplyMissingData := True;

		    CompositeTerm.MissingData.Method := MissingDataMethod.AnyValue;

		    // Сохранение параметров расчета модели

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для первого составного терма, используемого
 в расчёте линейной регрессии, будет задан метод обработки пропусков.


См. также:


[IMsCompositeFormulaTerm](IMsCompositeFormulaTerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

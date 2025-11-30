# IMsLinearRegressionTransform.ConstantMode

IMsLinearRegressionTransform.ConstantMode
-


# IMsLinearRegressionTransform.ConstantMode


## Синтаксис


ConstantMode: [InterceptMode](StatLib.chm::/Enums/InterceptMode.htm);


## Описание


Свойство ConstantMode определяет режим задания константы для модели.


## Комментарии


Если ConstantMode имеет значение InterceptMode.ManualEstimate, то константа задается с использованием свойства [IMsLinearRegressionTransform.ConstantValue](IMsLinearRegressionTransform.ConstantValue.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «OBJ_MS», содержащим модель с идентификатором «MODEL». Модель рассчитывается с помощью метода линейной регрессии (оценка МНК). Также необходимо добавить ссылки на системные сборки «Ms», «Metabase» и «Stat».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        MsDescrKey: Integer;

        Model: IMsModel;

        ModelTrans: IMsFormulaTransform;

        Formula: IMsFormula;

        LinearRegr: IMsLinearRegressionTransform;

    Begin

        Mb := MetabaseClass.Active;

        MsDescrKey := Mb.ItemById("OBJ_MS").Key;

    // Получение модели
        Model := MB.ItemByIdNamespace("MODEL", MsDescrKey).Edit As IMsModel;

        ModelTrans := Model.Transform;

    // Настройка параметров расчета модели
        Formula := ModelTrans.FormulaItem(0);

        LinearRegr := Formula.Method As IMsLinearRegressionTransform;

        LinearRegr.ConstantMode := InterceptMode.ManualEstimate;

        LinearRegr.ConstantValue := 2.9;

    // Сохраняем параметры расчета модели
        (Model As IMetabaseObject).Save;

    End Sub UserProc;


После выполнения примера будет задано значение константы для модели.


См. также:


[IMsLinearRegressionTransform](IMsLinearRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

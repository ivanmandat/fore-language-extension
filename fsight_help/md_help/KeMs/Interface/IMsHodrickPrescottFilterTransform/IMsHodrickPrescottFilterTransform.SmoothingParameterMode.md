# IMsHodrickPrescottFilterTransform.SmoothingParameterMode

IMsHodrickPrescottFilterTransform.SmoothingParameterMode
-


# IMsHodrickPrescottFilterTransform.SmoothingParameterMode


## Синтаксис


SmoothingParameterMode: [HPSmoothingParameterModeType](StatLib.chm::/Enums/HPSmoothingParameterModeType.htm);


## Описание


Свойство SmoothingParameterMode определяет способ задания параметра сглаживания.


## Комментарии


В зависимости от значения SmoothingParameterMode для задания параметра сглаживания используйте различные свойства:


-
SmoothingParameterMode = HPSmoothingParameterModeType.SetByFrequencyRule. Параметр сглаживания определяется значением степени: [IMsHodrickPrescottFilterTransform.Power](IMsHodrickPrescottFilterTransform.Power.htm);


-
SmoothingParameterMode = HPSmoothingParameterModeType.EditDirectly. Параметр сглаживания определяется значением лямбды: [IMsHodrickPrescottFilterTransform.SmoothingParameter](IMsHodrickPrescottFilterTransform.SmoothingParameter.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «OBJ_MS», содержащим модель с идентификатором «MODEL». Модель использует для расчета фильтр Ходрик-Прескотта. Также необходимо добавить ссылки на системные сборки «Ms», «Metabase» и «Stat».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        MsDescrKey: Integer;

        Model: IMsModel;

        ModelTrans: IMsFormulaTransform;

        Formula: IMsFormula;

        HPFilter: IMsHodrickPrescottFilterTransform;

    Begin

        Mb := MetabaseClass.Active;

        MsDescrKey := Mb.ItemById("OBJ_MS").Key;

    // Получение модели
        Model := MB.ItemByIdNamespace("MODEL", MsDescrKey).Edit As IMsModel;

        ModelTrans := Model.Transform;

    // Настройка параметров расчета модели
        Formula := ModelTrans.FormulaItem(0);

        HPFilter := Formula.Method As IMsHodrickPrescottFilterTransform;

        HPFilter.SmoothingParameterMode := HPSmoothingParameterModeType.SetByFrequencyRule;

        HPFilter.Power := 3;

    // Сохраняем параметры расчета модели
        (Model As IMetabaseObject).Save;

    End Sub UserProc;


После выполнения примера параметр сглаживания будет определяться значением степени.


См. также:


[IMsHodrickPrescottFilterTransform](IMsHodrickPrescottFilterTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

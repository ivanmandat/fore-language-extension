# ITsModelParam.LinkedObjectParams

ITsModelParam.LinkedObjectParams
-


# ITsModelParam.LinkedObjectParams


## Синтаксис


LinkedObjectParams: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


## Описание


Свойство LinkedObjectParams
 возвращает коллекцию значений параметров, используемую для открытия связанного
 справочника.


## Комментарии


Свойство LinkedObjectParams
 актуально, если для параметра определено свойство [LinkedObject](ITsModelParam.LinkedObject.htm)
 и указываемый в нём справочник является параметрическим.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта добавлен параметр,
 который связан со справочником репозитория. Справочник в свою очередь
 является параметрическим и имеет в своей структуре один параметр.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms, Transform.
 Также добавьте [ссылку
 на сборку](KeAlgo.chm::/Intro/KeAlgo_Programming.htm),
 необходимую для работы с алгоритмом расчёта.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObjectDescriptor;

    Algo: ICalcObject;

    CalcAlgo: ICalcAlgorithm;

    MetaModel: IMsMetaModel;

    Params: IMsModelParams;

    Param: ITsModelParam;

    ParamValues: IMetabaseObjectParamValues;

Begin

    MB := MetabaseClass.Active;

    // Получим алгоритм расчёта

    MObj := MB.ItemById("ALGORITHM");

    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

    CalcAlgo := Algo As ICalcAlgorithm;

    // Получим параметры алгоритма расчёта

    MetaModel := CalcAlgo.MsProblem.MetaModel;

    Params := MetaModel.Params;

    Debug.WriteLine("Количество параметров: " + Params.Count.ToString);

    If Params.Count > 0 Then

        // Получение параметра алгоритма расчёта

        Param := Params.Item(0) As ITsModelParam;

        // Значения параметров для справочника, с которым связан параметр алгоритма расчёта

        ParamValues := Param.LinkedObjectParams;

        If ParamValues.Count > 0 Then

            ParamValues.Item(0).Value := 1;

        End If;

        // Сохранение изменений

        CalcAlgo.SaveObject;

    End If;

End Sub UserProc;


При выполнении примера будет задано значение параметра, которое необходимо
 для открытия справочника, связанного с параметром алгоритма расчёта.


См. также:


[ITsModelParam](ITsModelParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

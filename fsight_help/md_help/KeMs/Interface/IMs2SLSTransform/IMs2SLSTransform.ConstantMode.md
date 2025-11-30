# IMs2SLSTransform.ConstantMode

IMs2SLSTransform.ConstantMode
-


# IMs2SLSTransform.ConstantMode


## Синтаксис


		ConstantMode: [InterceptMode](StatLib.chm::/Enums/InterceptMode.htm);


## Описание


Свойство ConstantMode определяет
 режим задания константы для модели.


## Комментарии


Если ConstantMode имеет значение
 InterceptMode.ManualEstimate,
 то константа задается с использованием свойства [IMs2SLSTransform.ConstantValue](IMs2SLSTransform.ConstantValue.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. В данном контейнере создана
 модель с идентификатором NEW_2SLS, использующая для расчёта метод линейной
 регрессии (оценка методом инструментальных переменных).


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    MsDescrKey: Integer;

		    Model: IMsModel;

		    ModelTrans: IMsFormulaTransform;

		    Formula: IMsFormula;

		    SLS: IMs2SLSTransform;

		Begin

		    Mb := MetabaseClass.Active;

		    MsDescrKey := Mb.ItemById("MODEL_SPACE").Key;

		    // Получение модели

		    Model := MB.ItemByIdNamespace("New_2SLS", MsDescrKey).Edit As IMsModel;

		    ModelTrans := Model.Transform;

		    // Настройка параметров расчета модели

		    Formula := ModelTrans.FormulaItem(0);

		    SLS := Formula.Method As IMs2SLSTransform;

		    SLS.ConstantMode := InterceptMode.ManualEstimate;

		    SLS.ConstantValue := 2.9;

		    // Сохраняем параметры расчета модели

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера будет задано значение константы для
 модели.


См. также:


[IMs2SLSTransform](IMs2SLSTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

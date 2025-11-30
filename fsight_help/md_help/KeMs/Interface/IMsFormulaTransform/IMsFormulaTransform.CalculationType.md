# IMsFormulaTransform.CalculationType

IMsFormulaTransform.CalculationType
-


# IMsFormulaTransform.CalculationType


## Синтаксис


		CalculationType: [MsCalculationType](../../Enums/MsCalculationType.htm);


## Описание


Свойство CalculationType определяет
 режим расчёта модели.


## Комментарии


Режим расчёта учитывается только для:


	- модели детерминированного уравнения, основанной на атрибутах
	 базы данных временных рядов;


	- задачи трансформации.


Если используется поточечный расчёт, т.е. свойство принимает значение
 MsCalculationType.Pointwise, то
 направление расчёта определяется свойством [IMsFormulaTransform.CalculationDirection](IMsFormulaTransform.CalculationDirection.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC_COMM, в контейнере моделирования
 которой содержится модель детерминированного уравнения с идентификатором
 M_DETERM.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    Rubr: IRubricator;

		    MsKey: Integer;

		    Model: IMsModel;

		    Transf: IMsFormulaTransform;

		Begin

		    mb := MetabaseClass.Active;

		    Rubr := mb.ItemById("FC_COMM").Bind As IRubricator;

		    MsKey := Rubr.ModelSpace.Key;

		    Model := mb.ItemByIdNamespace("M_DETERM", MsKey).Edit As IMsModel;

		    Transf := Model.Transform;

		    Transf.CalculationType := MsCalculationType.Pointwise;

		    Transf.CalculationDirection := MsCalculationDirection.Forward;

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для расчёта задачи M_DETERM будет использоваться
 поточечный (вперед) режим расчёта.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

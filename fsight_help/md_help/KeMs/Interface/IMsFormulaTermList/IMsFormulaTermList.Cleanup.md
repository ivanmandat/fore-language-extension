# IMsFormulaTermList.Cleanup

IMsFormulaTermList.Cleanup
-


# IMsFormulaTermList.Cleanup


## Синтаксис


		Cleanup([CleanupVariables: Boolean = false]);


## Параметры


CleanupVariables. Определяет
 признак удаления переменных, соответствующих неиспользуемым термам.


## Описание


Метод Cleanup удаляет
 из коллекции термы, которые не используются в выражении модели.


## Комментарии


Допустимые значения параметра CleanupVariables:


	- True. Переменные, соответствующие
	 неиспользуемым термам, будут удалены из [параметров
	 модели](../IMsFormulaTransform/IMsFormulaTransform.htm);


	- False. Переменные, соответствующие
	 неиспользуемым термам, будут оставлены.


На Fore параметр является необязательным и имеет значение по умолчанию
 False.


Для удаления всех термов из коллекции используйте метод [IMsFormulaTermList.Clear](IMsFormulaTermList.Clear.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. Данный контейнер должен содержать
 модель детерминированного уравнения с идентификатором DETERM.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ModelCont: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Determ: IMsDeterministicTransform;

		    Operands: IMsFormulaTermList;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем модель

		    ModelCont := mb.ItemById("MS");

		    Model := mb.ItemByIdNamespace("DETERM", ModelCont.Key).Edit As IMsModel;

		    // Получаем параметры модели

		    Transform := Model.Transform;

		    // Получаем факторы модели

		    Formula := Transform.FormulaItem(0);

		    Determ := Formula.Method As IMsDeterministicTransform;

		    Operands := Determ.Operands;

		    // Удаляем все факторы, неиспользуемые в выражении модели

		    Operands.Cleanup(True);

		    // Сохраняем изменения

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера из модели будут удалены все факторы,
 которые не используются в выражении модели.


См. также:


[IMsFormulaTermList](IMsFormulaTermList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
